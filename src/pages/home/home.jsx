import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'welcome3...'
    }
  }

  render() {
    const {title} = this.state;
    return (
      <div>{title}</div>
    )
  }
}

export default Home;