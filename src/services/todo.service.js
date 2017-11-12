export default class ToDoService {
	constructor($http, $state) {
		this.$http = $http;
		console.log('ready');
	}
	getTasks() {
       return this.$http.get('/api/tasks')
	}
};
