import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
// import App from './App';
import Route from '@/router';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const render = Component => {
  ReactDOM.render(
    //绑定redux、热加载
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root'),
  )
}
render(Route);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./router/', () => {
    render(Route);
  })
}

registerServiceWorker();
