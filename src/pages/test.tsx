import React, { useState, useEffect } from 'react';
import {
  IndexModelState,
  ConnectRC,
  Loading,
  connect,
  useAccess,
  Access,
} from 'umi';
import { statisticsHistory } from '../api/api';
interface PageProps {
  index: IndexModelState;
  loading: boolean;
}
const IndexPage: ConnectRC<PageProps> = ({ index, dispatch }) => {
  const { name } = index;
  const access = useAccess();
  console.log('access====', access);
  useEffect(() => {
    dispatch({
      type: "index/query1",
      payload: { acount: 'admin', password: 123456 },
    })
    statisticsHistory();
  }, []);


  return (
    <div>
      <Access
        accessible={access.canReadFoo}
        fallback={<div>Can not read foo content.</div>}
      >
        Foo content.
      </Access>
      <Access
        accessible={access.canUpdateFoo}
        fallback={<div>Can not update foo.</div>}
      >
        Update foo.
      </Access>
      <Access
        accessible={access.canDeleteFoo(1)}
        fallback={<div>Can not delete foo.</div>}
      >
        Delete foo.
      </Access>
    </div>
  );
};

export default connect(
  ({ index, loading }: { index: IndexModelState; loading: Loading }) => ({
    index,
    loading: loading.models.index,
  }),
)(IndexPage);
