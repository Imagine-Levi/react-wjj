import React, { Component } from 'react';
import { getExampleData } from '@/api/service';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'welcome3...'
    }
  }

  componentDidMount() {
    getExampleData({name: '123'}).then(res => {
      console.log(res)
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