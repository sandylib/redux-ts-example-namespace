import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import {App as TodoApp} from './example/Todo'
import Screens from './screens';


const history = createBrowserHistory();
const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <Router history={history}>
        <Switch>
            <Route path="/todo" component={TodoApp}/> 
             
            <Route path="/">
              <Screens />
            </Route>
          </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
