import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { persistor, store } from './utilities/redux/store';
import history from './utilities/history';

ReactDOM.render(
    <Provider store={store}>
      <PersistGate
          persistor={persistor}
      >
        <Router history={history}>
          <App />
        </Router>
      </PersistGate>
    </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
