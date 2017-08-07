import React from 'react';
import { Link } from 'react-router-dom'
import { Layout, Menu, Row, Col } from 'antd';
import '../style.less';

const { Header } = Layout;
const StylePrefix = 'popzhou-layout';

const MyHeader = () => {
  const onSelect = (e) => {
    console.log('select ', e);
  }

  const handleClick = (e) => {
    console.log('click ', e);
  }

  return (
    <Header>
      <Row>
        <Col span={3}>
          <div className={`${StylePrefix}-logo`}>
            <Link to="/">Admin</Link>
          </div>
        </Col>
        <Col span={15}>
          <Menu
            theme="dark"
            mode="horizontal"
            onClick={handleClick}
            onSelect={onSelect}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">
              <Link to="/contacts">用户管理</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/news">新闻管理</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/meeting">会议管理</Link>
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={6}></Col>
      </Row>
    </Header>
  );
};

export default MyHeader;
