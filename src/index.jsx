import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import ErrorBoundry from './components/pages/error-page/error-boundry';
import Spinner from './components/spinner';
import store from './store';
import './i18n';

import './components/app/app.scss';

ReactDOM.render(
    <Provider store={store}>
        <Suspense fallback={<Spinner />}>
            <ErrorBoundry>
                <App />
            </ErrorBoundry>
        </Suspense>
    </Provider>,
    document.getElementById('root'),
);
