import React from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.less';
import '../style/base.less';
import MyHeader from '../components/layout/header';

const { Footer, Content } = Layout;

const App = () => (
  <div>
    <Layout>
      <MyHeader />
      <Content>Content</Content>
      <Footer style={{ textAlign: 'center' }}>
        ©2017 Created by popzhou
      </Footer>
    </Layout>
  </div>
);

export default App;
