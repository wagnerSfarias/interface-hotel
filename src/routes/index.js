import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import { Home, Login, Register, Bedrooms, Reservations } from '../pages'
import PrivateRoutes from './private-route'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact component={Home} path="/" />
        <Route component={Login} path="/login" />
        <Route component={Register} path="/cadastro" />
        <Route component={Bedrooms} path="/quartos" />

        <PrivateRoutes component={Reservations} path="/reservas" />
      </Switch>
    </Router>
  )
}
