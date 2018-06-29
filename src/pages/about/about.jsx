import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'about...'
    }
  }

  render() {
    const {title} = this.state;
    return (
      <div>{title}</div>
    )
  }
}

export default About;