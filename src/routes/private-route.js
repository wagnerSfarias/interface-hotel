import PropTypes from 'prop-types'
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function PrivateRoutes({ component, isAdmin, ...rest }) {
  const user = localStorage.getItem('userData:hotel')

  if (!user) {
    return <Redirect to="/login" />
  }

  if (isAdmin && !JSON.parse(user).admin) {
    return <Redirect to="/" />
  }

  return <Route {...rest} component={component} />
}

PrivateRoutes.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  isAdmin: PropTypes.bool
}
