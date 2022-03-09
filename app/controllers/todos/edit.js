import Controller from '@ember/controller';
import { action } from '@ember/object';
import {inject as service} from '@ember/service';

export default class TodosEditController extends Controller {

    @service store;

    @action
    editToDo(id){
        var self = this;

        var _date = document.getElementById('date_id').value;
        var _title = document.getElementById('title_id').value ;
        var _body = document.getElementById('body_id').value;

        this.store.findRecord('todo', id).then(function(todo){
            todo.set('title', _title);
            todo.set('body', _body);
            todo.set('date', new Date(_date));

            todo.save();

            self.transitionToRoute('todos');
        });
    }

    @action
    deleteToDo(id){
        var self = this;

        let post = this.store.peekRecord('todo',id);
        post.destroyRecord();

        self.transitionToRoute('todos');
        // post.isDeleted;
        // post.save();
        
    }
}
