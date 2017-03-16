import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';


import reducers from './reducers'; // Or wherever you keep your reducers
import saga, { helloSaga } from './reducers/saga';
import { LandingPage } from './containers';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware),
  applyMiddleware(sagaMiddleware)
);

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))
sagaMiddleware.run(saga);
sagaMiddleware.run(helloSaga);

ReactDOM.render(
  <Provider store={ store }>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={ history }>
      <div>
        <Route exact path='/' component={ LandingPage } />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
