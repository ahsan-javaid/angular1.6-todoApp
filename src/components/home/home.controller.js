export default class HomeController {
	constructor($log, TodoService) {
		'ngInject';
		this.todoService = TodoService;
		this.tasks = [];
		this.todoService.getTasks().then((res) => {
			console.log(res.data);
			this.tasks = res.data;
		});
	}

	$onInit = () => {
	};

	addTask(evt) {
		this.tasks.push({task: evt.target[0].value, done: false, edit:false, date: new Date()});
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
