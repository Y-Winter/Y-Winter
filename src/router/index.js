import React, { Component } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Index from '../components/index';
import Book from '../components/book';
import Details from '../components/details';
import About from '../components/about';
import User from '../components/user';
export default class router extends Component {
  render() {
    return (
      <div>
        <Switch>
        
          <Route exact path='/' render={()=>(
              <Redirect to='/index/all'/>
              )}/>
          <Route path='/index/:id' component={Index}/>
          <Route path='/book'  component={Book}/>
          <Route path='/about' component={About}/>
          <Route path='/user/:id'  component={User}/>
          <Route path='/details/:id'  component={Details}/>
        </Switch>
      </div>
    )
  }
}
