import React, { Component } from 'react'
import { Tag } from 'antd';
const tablist = {
  top:{
    color: 'red',
    txt:'置顶',
  },
  good:{
    color: 'lime',
    txt:'精华',
  },
  ask:{
    color: 'green',
    txt:'问答',
  },
  job:{
    color: 'magenta',
    txt:'招聘',
  },
  dev:{
    color: 'purple',
    txt:'测试',
  },
  share:{
    color: 'orange',
    txt:'分享',
  },
}

function gettab(data){
  return (
    data.top ? 'top'
      : data.good ? 'good'
        : data.tab
  )
}

export default class tag extends Component {
  render() {
    const nowTab = tablist[gettab(this.props.tag)]
    return (
      nowTab 
      ?<Tag color={nowTab.color}>
        {nowTab.txt}
      </Tag> 
      : ''
    )
  }
}
