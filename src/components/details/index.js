import React, { Component } from 'react'
import ReplyList from './replyList'
import TxtDetails from './txtDetails'
import { connect } from 'react-redux'
import axios from 'axios'
import './index.css'

class index extends Component {
  constructor(arg) {
    super(arg)
    const activeid = this.props.match.params.id
    this.state = {
      activeid,
      data: this.props.details.data,
      loading: this.props.details.loading
    }
    this.updataDetils(activeid)
  }
  updataDetils(activeid) {
    this.props.dispatch((dispatch) => {
      axios.get(`https://cnodejs.org/api/v1/topic/${activeid}`)
        .then(res => {
          dispatch({
            type: 'DETAILS_SUCC',
            data: res
          })
        })
        .catch(err => {
          dispatch({
            type: 'DETAILS_ERROR'
          })
        })
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.details.data,
      loading: nextProps.details.loading
    })
  }

  render(){
    const { data } = this.state.data
    const { replies } = data
    return (
      <div>
        <TxtDetails data={data} />
        <ReplyList data={replies}/>
      </div>
    )
  }
}
export default connect(state => ({ details: state.details }))(index)