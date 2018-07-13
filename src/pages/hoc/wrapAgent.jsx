import React, { Component } from 'react';
import HOC1 from './hoc1';

class OriginComponent extends Component {
  render() {
    return <div>newProps: {this.props.type}</div>
  }
}

export default HOC1(OriginComponent);
