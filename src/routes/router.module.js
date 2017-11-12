import appRoutes from './app-routes';

const routerModule = angular.module('app.router', [
	'ui.router'
]);
routerModule.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
	'ngInject';
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');
	appRoutes.forEach((route) => {
		$stateProvider.state(route);
	});
});

export default routerModule;
