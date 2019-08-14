import React, { Component } from 'react'
import {List, Avatar, Pagination} from 'antd'
import TextTag from '../tag'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import axios from 'axios'
class indexlist extends Component {
  constructor(arg){
    super(arg)
    this.getDate(this.props.tab,this.state.page, this.state.pageSize)
  }
  getDate(tab,page,pageSize){
    this.props.dispatch((dispatch)=>{
      axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=${pageSize}`)
        .then(res=>{
          dispatch({
            type:'LIST_UPLOAD_SUCC',
            data:res.data
          })
        })
        .catch(err=>{
          console.log(err)
        })
    })
  }
  // props变化触发
  componentWillReceiveProps(nextProps){
    if( this.props.tab !== nextProps.tab ){
        this.setState({
          page: 1
        })

        this.getDate( nextProps.tab, this.state.page, this.props.pageSize )
    }
  }
  shouldComponentUpdate(nextProps, nextStates){
    // 页吗切换时
    if(nextStates.page !== this.state.page){
      this.getDate(this.props.tab, nextStates.page, nextStates.pageSize)
    }
    if( this.props.tab !== nextProps.tab ){
      this.setState({
        page: 1
      })
      this.getDate( nextProps.tab, this.state.page, this.props.pageSize )
    }
    return true
  }
  state={
    page:1,
    pageSize:10,
  }
  render() {
    const {data, loading} = this.props.list
    return (
      <div className={'index-list'}>
        <List
          dataSource={data}
          loading={loading}
          renderItem={
            item=>(<List.Item
              actions={[
                `回复${item.reply_count}`,
                `访问${item.visit_count}`
              ]}
            >
              <List.Item.Meta
                avatar={
                  <Avatar src={item.author.avatar_url}/>
                }
                title={
                  <div>
                    <TextTag
                     tag={ item }
                     >
                    </TextTag>
                    <Link to={`/details/${item.id}`}>{item.title}</Link>
                  </div>
                }
                description={
                  <p> 
                      <Link to={`/user/${item.author.loginname}`}> {item.author.loginname} </Link>
                      发表于:{item.create_at.split("T")[0]}    
                  </p>
                }

              />
            </List.Item>
          )} 
        >
        </List>
        <Pagination 
          total={500}
          current={this.state.page}
          onChange={(page, pageSize)=>{
            this.setState({
              page,
            })
          }}
        />
      </div>
    )
  }
}

export default connect(state=>({list:state.list}))(indexlist)