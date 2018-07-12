import React, { Component } from 'react';
import api from '@/api/service';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'welcome...'
    }
  }

  componentDidMount() {
    api.getExampleData({name: '123'}).then(res => {
      this.setState({
        title: res
      })
    }).catch(err => console.log(err))
  }

  render() {
    const {title} = this.state;
    return (
      <div>{title}</div>
    )
  }
}

export default Home;