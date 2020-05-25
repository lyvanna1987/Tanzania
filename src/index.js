import './polyfills'
import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';
import './assets/base.scss';
import Main from './Pages/Main';
import configureStore from './config/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();
const rootElement = document.getElementById('root');

const renderApp = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <Component />
            </BrowserRouter>
        </Provider>,
        rootElement
    );
};

renderApp(Main);

if (module.hot) {
    module.hot.accept('./Pages/Main', () => {
        const NextApp = require('./Pages/Main').default;
        renderApp(NextApp);
    });
}
serviceWorker.unregister();
