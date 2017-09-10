import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


//Redux
import { AppContainer } from 'react-hot-loader';
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
        </Switch>
      </BrowserRouter>
    </Provider>
  , document.querySelector('#root')
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={App} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </AppContainer>
      , document.querySelector('#root')
    );
  });
}
