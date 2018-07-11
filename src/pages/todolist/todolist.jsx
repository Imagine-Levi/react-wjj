import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input, Button } from 'antd';
import { saveData, clearData, addToList, delFromList } from '@/store/todolist/action';

//todolist---redux
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  static propTypes = {
    form: PropTypes.object.isRequired,
    saveData: PropTypes.func.isRequired,
    clearData: PropTypes.func.isRequired,
    addToList: PropTypes.func.isRequired,
    delFromList: PropTypes.func.isRequired
  }

  componentDidMount() {}

  inputEvent = (e) => {
    this.props.saveData(e.target.value);
  }

  clickEvent = (type, key) => {
    const { name } = this.props.form;
    if (type === 1) {
      if (!name)
        return;
      this.props.clearData(name);
      this.props.addToList(name);
    } else {
      this.props.delFromList(key);
    }
  }

  render() {
    const { name, list } = this.props.form;
    console.log(this.props)
    return (
      <div>
        <Input value={name} onChange={this.inputEvent} onPressEnter={this.clickEvent.bind(this, 1)} placeholder="please input words" style={{ width: 200 }}/>
        <Button type="primary" onClick={this.clickEvent.bind(this, 1)}>add</Button>
        {
          list.map((item, index) => {
            return <div key={index}>{item}<Button type="danger" onClick={this.clickEvent.bind(this, -1, index)}>delete</Button></div>
          })
        }
      </div>
    )
  }
}

export default connect(state => ({
  form: state.form
}), {
  saveData,
  clearData,
  addToList,
  delFromList
})(TodoList);


