//入口文件
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './stores/store.configure';

import App from './containers/app/';




const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
    <App store={store} history={history} />,
    document.getElementById('app')
);
