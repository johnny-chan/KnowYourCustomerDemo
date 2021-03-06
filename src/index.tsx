import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise-middleware';
import { createStore, applyMiddleware } from 'redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { rootReducer } from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware())(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
