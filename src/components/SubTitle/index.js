import Proptypes from 'prop-types'
import React from 'react'

import { Title } from './styles'

export function SubTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>
}
SubTitle.propTypes = {
  children: Proptypes.string
}
