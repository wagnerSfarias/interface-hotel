import PropTypes from 'prop-types'
import React from 'react'

import { Menu } from '../../components'
import paths from '../../constants/paths'
import EditUnits from './EditUnits'
import ListReservations from './ListReservations'
import { Container, ContainerPages } from './styles'

export function Admin({ match: { path } }) {
  return (
    <Container>
      <Menu path={path} />
      <ContainerPages>
        {path === paths.Reservations && <ListReservations />}
        {path === paths.EditUnits && <EditUnits />}
      </ContainerPages>
    </Container>
  )
}
Admin.propTypes = {
  match: PropTypes.object
}
