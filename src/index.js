import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Cafe from './components/Cafe';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


//Redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk),
));

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/cafe' component={Cafe} />
        </Switch>
      </BrowserRouter>
    </Provider>
  , document.querySelector('#root')
);
