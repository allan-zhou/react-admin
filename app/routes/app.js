import React from 'react';
import { Layout } from 'antd';
import MyHeader from '../components/layout/Header';
import MyContent from '../components/layout/Content';
import MyFooter from '../components/layout/Footer';
import '../style/base.less';

const App = () => (
  <div>
    <Layout>
      <MyHeader />
      <MyContent />
      <MyFooter />
    </Layout>
  </div>
);

export default App;
