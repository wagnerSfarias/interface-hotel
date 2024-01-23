import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { useHistory, useLocation, Link } from 'react-router-dom'

import Logo from '../../assets/logo.png'
import { useMenu } from '../../hooks/MenuContext'
import { useUser } from '../../hooks/UserContext'
import { IconLogout, MenuMobile } from '../Header/styles'
import listOptions from './menu-list'
import { Container, OptionContainer } from './styles'

export function Menu({ path }) {
  const { logout } = useUser()
  const history = useHistory()
  const location = useLocation()

  const { changeIsVisible } = useMenu()

  useEffect(() => {
    changeIsVisible(false)
  }, [location])

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

      <MenuMobile onClick={() => changeIsVisible(true)} />

      <button onClick={logoutUser}>
        <IconLogout />
      </button>
    </Container>
  )
}

Menu.propTypes = {
  path: PropTypes.string
}
