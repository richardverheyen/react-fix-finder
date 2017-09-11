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

const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
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
