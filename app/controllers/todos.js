import Controller from '@ember/controller';
import { sort } from '@ember/object/computed';

export default class TodosController extends Controller {
    filter = '';
    filterTodos = function(){
        var filter = document.getElementById('search').value;
        var rx = new RegExp(filter, 'gi');
        var todo = this.model;

        return todo.filter(function(todo){
            return todo.get('title').match(rx) || todo.get('body').match(rx);
        });
        
    }.property('arrangedContent', 'filter');
    sortedProperties= ['date:asc'];
    @sort('model', 'sortedProperties') sortedTodos;
}
