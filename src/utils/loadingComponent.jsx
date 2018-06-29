import React from 'react';
import { Spin } from 'antd';

const LoadingComponent = (props) => {
  // 加载中
  if (props.pastDelay) {
    // 300ms 之后显示
    return <Spin tip="Loading..."/>
  }
  // 加载出错
  else if (props.error) {
    return <div>Sorry, there was a problem loading the page.</div>
  }
  else {
    return null
  }
}

export default LoadingComponent;