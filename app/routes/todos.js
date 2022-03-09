import Route from '@ember/routing/route';
import $ from 'jquery';
import { inject as service } from '@ember/service';

export default class TodosRoute extends Route {
    @service store;

    model(){
        return this.store.findAll('todo');
    }
}
