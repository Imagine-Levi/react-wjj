import React, { Component } from 'react';
import HOC2 from './hoc2';

class OriginComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      number: 1
    }
  }

  componentDidMount() {}

  add(a, b) {
    return a + b;
  }

  render() {
    return <div>{this.test(1, 2)}</div>
  }
}

export default HOC2(OriginComponent);
