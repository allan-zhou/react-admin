import React from 'react';
import { Layout } from 'antd';
import MyHeader from '../components/layout/Header';
import MyFooter from '../components/layout/Footer';
import { MainRoutes } from '../routes';

const App = () => (
  <div>
    <Layout>
      <MyHeader />
      {MainRoutes()}
      <MyFooter />
    </Layout>
  </div>
);

export default App;
