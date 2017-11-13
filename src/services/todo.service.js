export default class ToDoService {
	constructor($http, $state) {
		this.$http = $http;
	}
	getTasks() {
       return this.$http.get('/api/tasks')
	}
};
