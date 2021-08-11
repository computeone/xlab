import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import App from './main/App';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
	import.meta.hot.accept();
}
