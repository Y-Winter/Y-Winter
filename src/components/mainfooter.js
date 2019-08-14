import React, { Component } from 'react'
import {Layout} from 'antd';
import './index.css'
export default class mainfotter extends Component {
  render() {
    return (
      <Layout.Footer className={'footer'}>
        <p>一个基于react的论坛</p>
      </Layout.Footer>
    )
  }
}
