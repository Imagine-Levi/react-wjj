import React, { Component } from 'react';
import { Route, withRouter, Link } from 'react-router-dom';
import { Divider } from 'antd';
import origin1 from './wrapAgent';
import origin2 from './wrapReverse';

class HOC extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { match } = this.props;
    return [
      <Link key={0} to={`${match.url}/agent`} replace={true}>属性代理</Link>,
      <Divider key={11} type="vertical" />,
      <Link key={1} to={`${match.url}/reverse`} replace={true}>反向继承</Link>,
      <Route key={2} path={`${match.url}/agent`} component={origin1}/>,
      <Route key={3} path={`${match.url}/reverse`} component={origin2}/>
    ]
  }
}

export default withRouter(HOC);
