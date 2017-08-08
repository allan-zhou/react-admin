import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Radio, Tree } from 'antd';
import './style.css';

const { Content, Sider } = Layout;
const TreeNode = Tree.TreeNode;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const Contacts = () => (
  <Layout style={{ padding: '24px 50px 0 50px' }}>
    <Sider width={260} style={{ background: '#F9FAFC', padding: '10px', borderRight: '1px dotted #DCE1E6' }}>
      <div>
        <RadioGroup defaultValue="a">
          <RadioButton value="a">组织架构</RadioButton>
          <RadioButton value="b">标签</RadioButton>
        </RadioGroup>
      </div>
    </Sider>
    <Content style={{ background: '#fff', padding: 24, minHeight: 480 }}>
      Content
    </Content>
  </Layout >

);

export default Contacts;
