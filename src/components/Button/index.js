import Proptypes from 'prop-types'
import React from 'react'

import { ContainerButton } from './styles'

export function Button({ children }) {
  return <ContainerButton>{children}</ContainerButton>
}

Button.propTypes = {
  children: Proptypes.string
}
