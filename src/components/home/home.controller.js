export default class HomeController {
	constructor($log, TodoService) {
		'ngInject';
		this.todoService = TodoService;
		this.tasks = [];
		this.todoService.getTasks().then((res) => {
			this.tasks = res.data;
		});
	}

	$onInit = () => {
	};
}
