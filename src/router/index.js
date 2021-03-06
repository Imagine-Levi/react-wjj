import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import LoadingComponent from '@/utils/loadingComponent';
import asyncComponent from '@/utils/asyncComponent';

const home = Loadable({
  loader: () => import('@/pages/home/home'),
  loading: LoadingComponent,
  delay: 300 //延迟，防止LoadingComponent组件闪现
});
const about =  asyncComponent(() => import('@/pages/about/about'));
const parent = asyncComponent(() => import('@/pages/parent/parent'));
const todolist = asyncComponent(() => import('@/pages/todolist/todolist'));
const hoc = asyncComponent(() => import('@/pages/hoc/index'));

const login =  asyncComponent(() => import('@/pages/user/login'));

// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
export default class RouteConfig extends Component {
  render() {
    return(
      <HashRouter>
        <Switch>
          <Route path="/" exact component={login} />
          <Route path="/parent" component={parent}/>
          <Route path="/about" component={about} />
          <Route path="/todolist" component={todolist} />
          <Route path="/hoc" component={hoc} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    )
  }
}

