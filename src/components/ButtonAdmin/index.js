import PropTypes from 'prop-types'
import React from 'react'

import { Button } from './styles'

export function ButtonAdmin({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>
}

ButtonAdmin.propTypes = {
  children: PropTypes.string
}
