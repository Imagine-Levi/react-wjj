import React, { Component } from 'react';
import { Table, Divider, Button } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reqData, delColumn } from '@/store/table/action';
import data from '@/pages/about/test';
import api from '@/api/service';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    api.getList({page: 1}).then(res => {
      this.props.reqData(res.list);
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