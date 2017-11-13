webpackJsonp([0],{

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _styles = __webpack_require__(60);

var _styles2 = _interopRequireDefault(_styles);

__webpack_require__(61);

__webpack_require__(63);

__webpack_require__(79);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appModule = angular.module('todoapp', ['app.services', 'app.router', 'ui.router', 'app.header', 'app.home', 'app.about', 'app.todo']);

exports.default = appModule;

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _appRoutes = __webpack_require__(62);

var _appRoutes2 = _interopRequireDefault(_appRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routerModule = angular.module('app.router', ['ui.router']);
routerModule.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function ($stateProvider, $urlRouterProvider, $locationProvider) {
	'ngInject';

	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');
	_appRoutes2.default.forEach(function (route) {
		$stateProvider.state(route);
	});
}]);

exports.default = routerModule;

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = [{
	name: 'home',
	url: '/',
	component: 'home'
}, {
	name: 'about',
	url: '/about',
	component: 'about'
}];

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(64);

__webpack_require__(67);

__webpack_require__(71);

__webpack_require__(75);

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _header = __webpack_require__(65);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = angular.module('app.header', []).component('appHeader', _header2.default);

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _header = __webpack_require__(66);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	template: _header2.default,
	controller: function controller() {},
	controllerAs: '$ctrl'
};

/***/ }),

/***/ 66:
/***/ (function(module, exports) {

module.exports = "<header class=\"app-bar promote-layer paper-toolbar paper-shadow\">\n\t<div class=\"app-bar-container paper-toolbar\">\n\t\t<h1 class=\"logo\">TO DO LIST </h1>\n\t\t<button class=\"menu\" ui-sref=\"home\">\n\t\t\tHome\n\t\t</button>\n\t\t<button class=\"menu\" ui-sref=\"about\">\n\t\t\tAbout\n\t\t</button>\n\t</div>\n</header>\n\n";

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _home = __webpack_require__(68);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = angular.module('app.home', []).component('home', _home2.default);

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _home = __webpack_require__(69);

var _home2 = _interopRequireDefault(_home);

var _home3 = __webpack_require__(70);

var _home4 = _interopRequireDefault(_home3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	template: _home2.default,
	controller: _home4.default,
	controllerAs: '$ctrl'
};

/***/ }),

/***/ 69:
/***/ (function(module, exports) {

module.exports = "<todo tasks=\"$ctrl.tasks\"></todo>";

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomeController = function HomeController($log, TodoService) {
	'ngInject';

	var _this = this;

	_classCallCheck(this, HomeController);

	this.$onInit = function () {};

	this.todoService = TodoService;
	this.tasks = [];
	this.todoService.getTasks().then(function (res) {
		_this.tasks = res.data;
	});
};
HomeController.$inject = ["$log", "TodoService"];

exports.default = HomeController;

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _about = __webpack_require__(72);

var _about2 = _interopRequireDefault(_about);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = angular.module('app.about', []).component('about', _about2.default);

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _about = __webpack_require__(73);

var _about2 = _interopRequireDefault(_about);

var _about3 = __webpack_require__(74);

var _about4 = _interopRequireDefault(_about3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	controller: _about2.default,
	template: _about4.default,
	controllerAs: '$ctrl'
};

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AboutController = function AboutController($log) {
	'ngInject';

	var _this = this;

	_classCallCheck(this, AboutController);

	this.$onInit = function () {
		_this.$log.info('Activated About View.');
	};

	this.$log = $log;
};
AboutController.$inject = ["$log"];

exports.default = AboutController;

/***/ }),

/***/ 74:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<p>Lorem ipsum dolor sit amet, eleifend erat a pulvinar aliquam rhoncus, suspendisse ante massa euismod dolor, suspendisse posuere unde, in ut. Praesent posuere nibh erat tortor vehicula imperdiet, dignissim quis, purus egestas magna diam nibh ipsum viverra. Nullam nulla aliquet maecenas fermentum, ultricies vulputate leo viverra commodo lorem, convallis dolor volutpat, etiam sit nunc a mi. Cras vehicula id erat quod integer, quis eget lectus enim varius neque dolor, in posuere nullam nam hac fringilla est, nisl metus laoreet urna orci. Eget lacinia, nulla sed tristique dolor. A ligula, ante pretium massa urna class, vitae vitae minim neque, ante convallis vel faucibus et qui dictum, arcu ipsum lobortis quisque et. Fermentum inceptos, id porttitor, sit massa vestibulum molestie enim non sem. Debitis hendrerit quisque amet sit, lacinia sodales eu. Taciti mi bibendum aliquet sollicitudin amet sapien, ut praesent turpis et, libero in ipsum elit justo mollis, quam fusce felis suscipit. Varius luctus vel nulla tellus, vulputate nibh, quisque sit placerat in cum et, morbi mollis porta, sed a nulla pretium elementum ullamcorper. Molestie et at mi vulputate, ante malesuada sapien fuga ante.\n\t</p>\n</div>\n";

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _todo = __webpack_require__(76);

var _todo2 = _interopRequireDefault(_todo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = angular.module('app.todo', []).component('todo', _todo2.default);

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _todo = __webpack_require__(77);

var _todo2 = _interopRequireDefault(_todo);

var _todo3 = __webpack_require__(78);

var _todo4 = _interopRequireDefault(_todo3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
   template: _todo2.default,
   controller: _todo4.default,
   controllerAs: '$ctrl',
   bindings: {
      tasks: '<'
   }

};

/***/ }),

/***/ 77:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-8 col-md-offset-2\">\n\t\t\t<form class=\"form\" ng-submit=\"$ctrl.addTask($event)\">\n\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" required maxlength=\"30\">\n\t\t\t\t\t<span class=\"input-group-btn\">\n                    <button class=\"btn btn-default\" type=\"submit\">\n                    <span class=\"glyphicon glyphicon-plus\"></span> Add Task</button>\n                    </span>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t\t<hr/>\n\t\t\t<ul class=\"list-group\" ng-show=\"$ctrl.tasks.length > 0\">\n\t\t\t\t<li class=\"list-group-item clearfix task\" ng-repeat=\"todo in $ctrl.tasks\" ng-class=\"{disabled: todo.done}\">\n\t\t\t\t\t<p class=\"lead\" ng-show=\"!todo.edit\"> <span class=\"glyphicon glyphicon-tasks\" style=\"top:5px\"></span> &nbsp;{{todo.task}}\n\t\t\t\t\t\t<span class=\"pull-right\">{{todo.date | date:'MM/dd/yyyy @ h:mma'}} </span>\n\t\t\t\t\t</p>\n\t\t\t\t\t<form ng-show=\"todo.edit\" class=\"form\" ng-submit=\"$ctrl.editTask($event, $index)\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<input type=\"text\" value=\"{{todo.task}}\" class=\"form-control\" required maxlength=\"30\">\n\t\t\t\t\t\t\t<span class=\"input-group-btn\">\n                    <button class=\"btn btn-default\" type=\"submit\">\n                    <span class=\"glyphicon glyphicon-edit\"></span> Save Task</button>\n                    </span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t\t<br>\n\t\t\t\t\t<div>\n                        <span class=\"pull-right\">\n                        <button class=\"btn btn-default btn-xs\"><span class=\"glyphicon glyphicon-pencil\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t ng-click=\"todo.edit = true\"></span></button>\n                        <button class=\"btn btn-default btn-xs\" ng-show=\"!todo.done\"><span class=\"glyphicon glyphicon-ok\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  ng-click=\"$ctrl.doneTask($index)\"></span></button>\n                        <button class=\"btn btn-default btn-xs\" ng-show=\"todo.done\"><span class=\"glyphicon glyphicon-repeat\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t ng-click=\"$ctrl.unDoneTask($index)\"></span></button>\n                        <button class=\"btn btn-default btn-xs\"><span class=\"glyphicon glyphicon-remove\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t ng-click=\"$ctrl.deleteTask($index)\"></span></button>\n                        </span>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TodoController = function () {
	TodoController.$inject = ["$log"];
	function TodoController($log) {
		'ngInject';

		_classCallCheck(this, TodoController);

		this.$onInit = function () {};
	}

	_createClass(TodoController, [{
		key: 'addTask',
		value: function addTask(evt) {
			this.tasks.unshift({ task: evt.target[0].value, done: false, edit: false, date: new Date() });
			evt.target[0].value = '';
		}
	}, {
		key: 'editTask',
		value: function editTask(evt, index) {
			this.tasks[index].edit = false;
			this.tasks[index].task = evt.target[0].value;
		}
	}, {
		key: 'doneTask',
		value: function doneTask(index) {
			this.tasks[index].done = true;
		}
	}, {
		key: 'unDoneTask',
		value: function unDoneTask(index) {
			this.tasks[index].done = false;
		}
	}, {
		key: 'deleteTask',
		value: function deleteTask(index) {
			this.tasks.splice(index, 1);
		}
	}]);

	return TodoController;
}();

exports.default = TodoController;

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _todoService = __webpack_require__(80);

var _todoService2 = _interopRequireDefault(_todoService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = angular.module('app.services', []).service({
	TodoService: _todoService2.default
});

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ToDoService = function () {
	function ToDoService($http, $state) {
		_classCallCheck(this, ToDoService);

		this.$http = $http;
	}

	_createClass(ToDoService, [{
		key: 'getTasks',
		value: function getTasks() {
			return this.$http.get('/api/tasks');
		}
	}]);

	return ToDoService;
}();

exports.default = ToDoService;
;

/***/ })

},[59]);