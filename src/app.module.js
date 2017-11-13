import styles from './styles/styles.scss';

import './routes/router.module';
import './app.components';
import './services/service';

const appModule = angular
	.module('todoapp', [
		'app.services',
		'app.router',
		'ui.router',
		'app.header',
		'app.home',
		'app.about',
		'app.todo'
	]);

export default appModule;
