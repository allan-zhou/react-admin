import React from 'react';
import { Layout } from 'antd';
import '../style/base.less';
import MyHeader from '../components/layout/header';
import MyContent from '../components/layout/content';
import MyFooter from '../components/layout/footer';


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
