import template from './todo.html';
import controller from './todo.controller';

export default {
	template: template,
	controller: controller,
    controllerAs: '$ctrl',
    bindings: {
	    tasks:'<'
    }

};
