import React, { Component } from 'react';

//WrappedComponent为被处理组件
function HOC1(WrappedComponent) {
  return class Agent extends Component {
    render() {
      const newProps = {type:'HOC-Agent'};
      return <WrappedComponent {...this.props} {...newProps}/>
    }
  }
}

export default HOC1;

