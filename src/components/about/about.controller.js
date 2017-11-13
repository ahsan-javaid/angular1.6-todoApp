export default class AboutController {
	constructor($log) {
		'ngInject';
		this.$log = $log;
	}
	$onInit = () => {
		this.$log.info('Activated About View.');
	};
}
