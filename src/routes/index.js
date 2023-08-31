import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import { Home, Login, Register, Bedrooms } from '../pages'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact component={Home} path="/" />
        <Route component={Login} path="/login" />
        <Route component={Register} path="/cadastro" />
        <Route component={Bedrooms} path="/quartos" />
      </Switch>
    </Router>
  )
}
