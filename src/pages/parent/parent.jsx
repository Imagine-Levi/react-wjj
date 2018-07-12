import React, { Component } from 'react';
import { Route, withRouter, Link } from 'react-router-dom'; // withRouter高阶组件，提供history控制路由跳转
import { Button } from 'antd';
import child from './child';

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  lookChild = () => {
    this.props.history.push(`${this.props.match.url}/:123`);
  }

  render() {
    const { match } = this.props;
    return [
      <Link key={0} to={`${match.url}/:123`} replace={true}>look child</Link>,
      <Button key={1} type="primary" onClick={this.lookChild}>look child</Button>,
      <Route key={2} path={`${match.url}/:id`} component={child}/>
    ]
  }
}

export default withRouter(Parent);
