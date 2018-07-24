import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import api from '@/api/service';
import '@/style/login.css';

const FormItem = Form.Item;

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount() {}

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        api.login({userName1: values.username}).then(res => {
          console.log(res)
        }).catch(err => console.log(err))
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-wrap">
        <div className="login-bg">
          <div className="login-inner">
            <Form className="login-form" onSubmit={this.handleSubmit}>
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>记住我</Checkbox>
                )}
                <a className="login-form-forgot" href="">忘记密码</a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  登录
                </Button>
                <a href="">注册</a>
              </FormItem>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default Form.create()(LoginForm);