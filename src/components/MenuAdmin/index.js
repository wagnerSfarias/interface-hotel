import PropTypes from 'prop-types'
import React from 'react'
import { useHistory, Link } from 'react-router-dom'

import { useUser } from '../../hooks/UserContext'
import { IconLogout } from '../Header/styles'
import listOptions from './menu-list'
import { Container, OptionContainer } from './styles'

export function Menu({ path }) {
  const { logout } = useUser()
  const history = useHistory()

  const Logo =
    'https://raw.githubusercontent.com/wagnerSfarias/images/765758fe0da80a49b0a48d60d8d49c190969163e/images-hotel/logo.svg'

  const logoutUser = () => {
    logout()
    history.go(0)
  }

  return (
    <Container>
      <img src={Logo} alt="imagem logo" />
      {listOptions.map(option => (
        <OptionContainer key={option.id} isActive={path === option.link}>
          <option.icon />
          <Link to={option.link}>{option.label}</Link>
        </OptionContainer>
      ))}
      <button onClick={logoutUser}>
        <IconLogout />
      </button>
    </Container>
  )
}

Menu.propTypes = {
  path: PropTypes.string
}
