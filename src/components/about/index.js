import React, { Component } from 'react'
import { Card } from 'antd'
import data from './data'
import './index.css'


export default class index extends Component {
  render() {
    return (
      <div>
        {data.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              hoverable={true}
              type={'inner'}
            >
              <div
                className={'about'}
                dangerouslySetInnerHTML={{
                  __html: item.content
                }}
              >

              </div>
            </Card>
          )
        })}
      </div>
    )
  }
}
