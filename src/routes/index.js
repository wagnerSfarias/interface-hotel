import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import paths from '../constants/paths'
import { Home, Login, Register, Bedrooms, Reservations, Admin } from '../pages'
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
        <PrivateRoutes component={Admin} path={paths.Reservations} isAdmin />
      </Switch>
    </Router>
  )
}
