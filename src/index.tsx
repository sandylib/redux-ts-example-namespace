import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import {App as TodoApp} from './example/Todo'


const history = createBrowserHistory();
const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <Router history={history}>
        <Switch>
            <Route path="/" component={TodoApp}/> 
          </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
