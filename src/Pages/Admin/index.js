import PropTypes from 'prop-types'
import React from 'react'

import { Menu, TooltipMui } from '../../components'
import paths from '../../constants/paths'
import EditBedroom from './EditBedroom'
import EditUnits from './EditUnits'
import ListReservations from './ListReservations'
import { Container, ContainerPages, ButtonHome, Icon } from './styles'

export function Admin({ match: { path } }) {
  return (
    <Container>
      <Menu path={path} />
      <TooltipMui title="Tela Inicial">
        <ButtonHome to="/">
          <Icon />
        </ButtonHome>
      </TooltipMui>
      <ContainerPages>
        {path === paths.Reservations && <ListReservations />}
        {path === paths.EditUnits && <EditUnits />}
        {path === paths.EditBedroom && <EditBedroom />}
      </ContainerPages>
    </Container>
  )
}
Admin.propTypes = {
  match: PropTypes.object
}
