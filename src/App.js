import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './page/Home'
import SignUp from './page/SignUp'
import SignIn from './page/SignIn'
import ForgetPassword from './page/ForgetPassword'
import Account from './page/Account'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={() => <Home />} />
          <Route exact path="/sign-up" component={() => <SignUp />} />
          <Route exact path="/sign-in" component={() => <SignIn />} />
          <Route
            exact
            path="/forget-password"
            component={() => <ForgetPassword />}
          />
          <Route exact path="/account" component={() => <Account />} />
        </div>
      </Router>
    )
  }
}
