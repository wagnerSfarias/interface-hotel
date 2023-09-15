import PropTypes from 'prop-types'
import React from 'react'

import { Menu } from '../../components'
import ListReservations from './ListReservations'
import { Container, ContainerPages } from './styles'

export function Admin({ match: { path } }) {
  return (
    <Container>
      <Menu path={path} />
      <ContainerPages>
        <ListReservations />
      </ContainerPages>
    </Container>
  )
}
Admin.propTypes = {
  match: PropTypes.object
}