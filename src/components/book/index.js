import React, { Component } from 'react'
import data from './data'
import { Card } from 'antd'
export default class index extends Component {
  render() {
    return (
      <div>
        {
          data.map((item, index)=>{
            return (
              <Card
                key={index}
                title={item.title}
                type='inner'
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html:item.content
                  }}
                ></div>
              </Card>

            )
          })
        }
      </div>
    )
  }
}
