import React from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import { HeaderRoutes } from '../../routes';
import './index.less';

const { Header } = Layout;

const MyHeader = () => (
  <Header>
    <Row>
      <Col span={3}>
        <div className="logo">
          Admin
        </div>
      </Col>
      <Col span={15}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">用户管理</Menu.Item>
          <Menu.Item key="2">新闻管理</Menu.Item>
          <Menu.Item key="3">会议管理</Menu.Item>
        </Menu>
      </Col>
      <Col span={6}></Col>
    </Row>

    {HeaderRoutes()}
  </Header>
);

export default MyHeader;
