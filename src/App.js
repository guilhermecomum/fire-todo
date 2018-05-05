import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import { connect } from 'react-redux'

import Home from './page/Home'
import SignUp from './page/SignUp'
import SignIn from './page/SignIn'
import ForgetPassword from './page/ForgetPassword'
import Account from './page/Account'
import * as actions from './actions'
import './App.css'


@connect(state => ({ auth: state.form, app: state.app }), actions)
export default class App extends Component {
  render() {
    return (
      <Router>
        <Container className="main-container">
          <Route exact path="/" render={routerProps => <Home {...this.props} />} />
          <Route exact path="/sign-up" render={routerProps => <SignUp {...this.props} />} />
          <Route exact path="/sign-in" render={routerProps => <SignIn {...this.props} />} />
          <Route
            exact
            path="/forget-password"
            render={routerProps => <ForgetPassword {...this.props} />}
          />
          <Route exact path="/account" render={routerProps => <Account {...this.props} />} />
        </Container>
      </Router>
    )
  }
}
