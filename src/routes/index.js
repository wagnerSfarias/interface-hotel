import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact component={Home} path="/" />
        <Route component={Login} path="/login" />
        <Route component={Register} path="/cadastro" />
      </Switch>
    </Router>
  )
}
