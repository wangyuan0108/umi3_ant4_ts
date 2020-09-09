import React, { useEffect } from 'react';
import { Table, Tag, Space, Layout, Breadcrumb } from 'antd';
import { useIntl } from 'umi';
const { Content, Footer } = Layout;

const Index: React.FC<{}> = () => {
  const intl = useIntl();
  return (
    <Layout>
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>首页</Breadcrumb.Item>
          {/* <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
        </Breadcrumb>
        <div
          style={{
            padding: 24,
            backgroundColor: '#fff',
            minHeight: 'calc(100vh - 200px)',
          }}
        >
          {intl.formatMessage(
            {
              id: 'WELCOME_TO_UMI_WORLD',
              defaultMessage: '你好，旅行者',
            },
            {
              name: '旅行者',
              age: 18,
            },
          )}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default Index;
