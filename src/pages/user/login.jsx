import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import { login } from './store/action';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const Login = props => {

    const { userInfo } = props;
    const { Login } = props;

    const onFinish = values => {
        Login(values.account, values.password);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        (userInfo || localStorage.getItem('user')) ?
            <Redirect to='/blog/new' /> :
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Account"
                    name="account"
                    rules={[{ required: true, message: '请输入账号！' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: '请输入密码！' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>记住我</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        登录
                </Button>
                </Form.Item>
            </Form>
    );
};

const mapStateToProps = state => ({
    userInfo: state.user.userInfo
});

const mapDispatchToProps = dispatch => ({
    Login(account, password) {
        dispatch(login(account, password));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);