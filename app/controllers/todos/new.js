import Controller from '@ember/controller';
import { action } from '@ember/object';
import {inject as service} from '@ember/service';

export default class TodosNewController extends Controller {

    @service store;

    @action
    addToDo(){
        var self = this;
        var _date = document.getElementById('date_id').value;
        var _title = document.getElementById('title_id').value ;
        var _body = document.getElementById('body_id').value;
        // var length = this.store.findAll('todo').length();
        // var _id = length.get('lastObject');
        // console.log("record " + length);
        var _id = Math.floor((Math.random() * 100) + 1);

        var newTodo = this.store.createRecord('todo',{
            id: _id + 1,
            title: _title,
            body: _body,
            date: new Date(_date) 
        });

        self.transitionToRoute('todos');

        // newTodo.save();

        this.setProperties({
            title: '',
            body: '',
            date: ''
        });
    }
}
