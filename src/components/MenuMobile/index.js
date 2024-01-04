import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { useMenu } from '../../hooks/MenuContext'
import { useUser } from '../../hooks/UserContext'
import { IconLogout } from '../Header/styles'
import {
  Background,
  Container,
  Close,
  ContainerNav,
  BtnLogout,
  BtnSignIn,
  IconSign
} from './styles'

export function MenuMobile() {
  const { userData, logout } = useUser()
  const { menuIsVisible, changeIsVisible } = useMenu()
  const history = useHistory()

  useEffect(() => {
    document.body.style.overflow = menuIsVisible ? 'hidden' : 'auto'
  }, [menuIsVisible])

  const logoutUser = () => {
    logout()
    history.go(0)
  }

  return (
    <Background isVisible={menuIsVisible}>
      <Container isVisible={menuIsVisible}>
        <Close onClick={() => changeIsVisible(false)} />
        <ContainerNav>
          {userData ? (
            <>
              <p>Olá, {userData.name}</p>
              <Link to="/reservas">Minhas Reservas</Link>
              {userData.admin && <Link to="/admin/reservas">Painel Admin</Link>}

              <BtnLogout onClick={logoutUser}>
                Sair
                <IconLogout />
              </BtnLogout>
            </>
          ) : (
            <>
              <Link to="/reservas">Minhas Reservas</Link>
              <BtnSignIn>
                <IconSign />
                <Link to="/login">Login</Link>
              </BtnSignIn>
            </>
          )}
        </ContainerNav>
      </Container>
    </Background>
  )
}
