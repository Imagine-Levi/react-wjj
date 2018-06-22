import React, {Component} from 'react';

class Home extends Componnet {
  constructor(props) {
    super(props);

    this.state = {
      title: 'welcome...'
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