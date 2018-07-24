import React, { Component } from 'react';
import { Table, Divider, Button } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reqData, delColumn } from '@/store/table/action';
import api from '@/api/service';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'test'
    };
  }

  static propTypes = {
    table: PropTypes.object.isRequired,
    reqData: PropTypes.func.isRequired,
    delColumn: PropTypes.func.isRequired
  }

  columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <span>{text}</span>,
  }, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: 'Action',
    key: 'action',
    render: (text, col) => (
      <div>
        <span>name</span>
        <Divider type="vertical" />
        <Button type="danger" size="small" onClick={this.deleteColumn.bind(this, col)}>Delete</Button>
        <Divider type="vertical" />
        <Button type="primary" size="small">Detail</Button>
      </div>
    )
  }];

  componentDidMount() {
    api.getList({age: '26'}).then(res => {
      this.props.reqData(res.data);
    }).catch(err => console.log(err))
  }

  deleteColumn = (col) => {
    this.props.delColumn(col.key);
  }

  render() {
    const { list } = this.props.table;
    return (
      <Table columns={this.columns} dataSource={list} />
    );
  }
}

export default connect(state => ({
  table: state.table
}), {
  reqData,
  delColumn
})(About);
// connect方法做的事情是将state和dispatch绑定到Connect组件的参数上，
// 然后Connect组件将你当前的About组件封装起来，使得About组件可以通过
// props获取到父组件Connect传递的state和props。