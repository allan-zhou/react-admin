import React from 'react';
import { Layout } from 'antd';
import { MainRoutes } from '../../routes';
import './style.less';

const { Content } = Layout;

const MyContent = () => (
  <Layout style={{ padding: '24px 50px 0 50px' }}>
    <Content style={{ background: '#fff', padding: 24, minHeight: 480 }}>
      { MainRoutes()}
    </Content>
  </Layout>
);

export default MyContent;
