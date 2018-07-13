import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import store from '@/store/store';
import Route from '@/router';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// 监听state变化
store.subscribe(() => {
  // console.log(store.getState())
  console.log('store is change');
});
const render = Component => {
  ReactDOM.render(
    // Provider是顶层组件的作用，将store作为上下文提供给全局共享
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
  module.hot.accept('@/router', () => {
    render(Route);
  })
}

registerServiceWorker();
