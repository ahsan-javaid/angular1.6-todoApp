export default class TodoController {
	constructor($log) {
		'ngInject';
	}

	$onInit = () => {
	};

	addTask(evt) {
		this.tasks.unshift({task: evt.target[0].value, done: false, edit:false, date: new Date()});
        evt.target[0].value = '';
	}

	editTask(evt, index) {
		this.tasks[index].edit = false;
		this.tasks[index].task =  evt.target[0].value;
	}

	doneTask(index) {
		this.tasks[index].done = true;
	}

	unDoneTask(index) {
		this.tasks[index].done = false;
	}

	deleteTask(index) {
		this.tasks.splice(index, 1);
	}

}
