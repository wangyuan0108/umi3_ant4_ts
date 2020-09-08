import React, { FC, useEffect } from 'react';
import {
  LoginModelState,
  ConnectProps,
  useDispatch,
  Loading,
  connect,
  useModel,
} from 'umi';
import { Form, Input, Button, Checkbox } from 'antd';
import './index.less';

interface PageProps extends ConnectProps {
  login: LoginModelState;
  loading: boolean;
}
interface LoginParams {
  acount: string;
  password: number | string;
}
const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const LoginPage: FC<PageProps> = ({ login }) => {
  const dispacth = useDispatch();
  const { initialState, loading, error, refresh, setInitialState } = useModel(
    '@@initialState',
  );
  useEffect(() => {
    // loginSet();
  }, []);
  const loginSet = (params: LoginParams) => {
    dispacth({
      type: 'login/login',
      payload: params,
    });
  };
  const onFinish = values => {
    console.log('Success:', values);
    const { username: acount, password } = values;
    setInitialState({ ...initialState, name: 'wy' });
    // console.log('setInitialState======', initialState);

    loginSet({ acount, password });
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  const { name } = login;
  return (
    <div className="login_wrapper">
      <Form
        {...layout}
        className="lay"
        name="basic"
        initialValues={{ remember: false }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="姓名"
          name="username"
          rules={[{ required: true, message: '请输入名字!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default connect(
  ({ login, loading }: { login: LoginModelState; loading: Loading }) => ({
    login,
    loading: loading.models.login,
  }),
)(LoginPage);
