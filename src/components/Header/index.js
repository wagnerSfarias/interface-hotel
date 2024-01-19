import React, { useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'

import Logo from '../../assets/logo.png'
import { TooltipMui } from '../../components/TooltipMui'
import { useMenu } from '../../hooks/MenuContext'
import { useUser } from '../../hooks/UserContext'
import {
  Container,
  ContainerLinks,
  IconManage,
  IconLogout,
  MenuMobile
} from './styles'

export function Header() {
  const { userData, logout } = useUser()
  const { changeIsVisible } = useMenu()
  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    changeIsVisible(false)
  }, [location])

  const logoutUser = () => {
    logout()
    history.go(0)
  }

  return (
    <Container>
      <TooltipMui title="Inicio">
        <Link to="/">
          <img src={Logo} alt="imagem logo" />
        </Link>
      </TooltipMui>
      <ContainerLinks>
        <Link to="/reservas">Minhas Reservas</Link>
        {userData ? (
          <>
            <p>Olá, {userData.name}</p>
            {userData.admin && (
              <TooltipMui title="Painel Admin">
                <Link to="/admin/reservas">
                  <IconManage />
                </Link>
              </TooltipMui>
            )}

            <IconLogout onClick={logoutUser} />
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </ContainerLinks>
      <MenuMobile onClick={() => changeIsVisible(true)} />
    </Container>
  )
}
