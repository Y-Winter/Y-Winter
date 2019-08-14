import React, { Component } from 'react'
import {
  Link,
} from 'react-router-dom'
import './index.css'
import { Row, Col, Divider, Menu, Icon, Dropdown} from 'antd';

export default class mainheader extends Component {
  render() {
    return (
      <div className={'wrap'}>
        <Row>
          <Col md={6} className={'Home-logo'}>
            <h1 className={'logo'}>discussion</h1>
            <Dropdown overlay={()=>{
              return (
                <Menu
                  mode="horizontal"
                  className={'navList'}
                  theme='dark'
                >
                  <Menu.Item>
                    <Link to="/"><Icon type="home" />首页</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to="/book"><Icon type="book" />教程</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to="/about"><Icon type="info-circle" />关于</Link>
                  </Menu.Item>
                </Menu>
              )
            }} trigger={['click']}>
              <a href="javvascript:void()">
                <Icon type="menu-unfold"/>
              </a>
            </Dropdown>
          </Col>
          <Col md={18} className={'menu-right'}>
            <Divider className={'line'} type="vertical" />
            <Menu
              mode="horizontal"
              className={'navList'}
              theme='dark'
            >
              <Menu.Item>
                <Link to="/"><Icon type="home" />首页</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/book"><Icon type="book" />教程</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/about"><Icon type="info-circle" />关于</Link>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
        
      </div>
    )
  }
}
