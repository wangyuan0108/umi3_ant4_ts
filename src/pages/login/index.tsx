import React, { FC, useEffect } from 'react';
import {
  LoginModelState,
  ConnectProps,
  useDispatch,
  Loading,
  connect,
} from 'umi';
interface PageProps extends ConnectProps {
  login: LoginModelState;
  loading: boolean;
}

const LoginPage: FC<PageProps> = ({ login }) => {
  const dispacth = useDispatch();
  useEffect(() => {
    loginSet();
  }, []);
  const loginSet = () => {
    dispacth({
      type: 'login/login',
    });
  };
  const { name } = login;
  return <div>Hello {name}</div>;
};
export default connect(
  ({ login, loading }: { login: LoginModelState; loading: Loading }) => ({
    login,
    loading: loading.models.login,
  }),
)(LoginPage);
