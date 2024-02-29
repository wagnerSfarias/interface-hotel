import Proptypes from 'prop-types'
import React from 'react'

import { Container, Message, IconWarn, IconLoading } from './styles'

export function Empty({ children, loading, ...rest }) {
  return (
    <Container {...rest}>
      {!loading && <IconWarn />}
      {loading && <IconLoading />}
      <Message>{loading ? 'Carregando' : children}</Message>
    </Container>
  )
}
Empty.propTypes = {
  children: Proptypes.string,
  loading: Proptypes.bool
}
