import PropTypes from 'prop-types'
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function PrivateRoutes({ component, ...rest }) {
  const user = localStorage.getItem('userData:hotel')

  if (!user) {
    return <Redirect to="/login" />
  }
  return <Route {...rest} component={component} />
}

PrivateRoutes.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
