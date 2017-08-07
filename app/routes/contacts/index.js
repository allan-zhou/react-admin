import React from 'react';
import { Link } from 'react-router-dom';
import { Radio, Tree } from 'antd';
import './style.less';

const TreeNode = Tree.TreeNode;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const Contacts = () => (
  <div className="container">
    <div className="left">
      <div>
        <RadioGroup defaultValue="a">
          <RadioButton value="a">组织架构</RadioButton>
          <RadioButton value="b">标签</RadioButton>
        </RadioGroup>
      </div>
    </div>
    <div className="right">
      Contacts
    </div>
  </div>
);

export default Contacts;
