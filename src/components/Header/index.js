import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import Logo from '../../assets/logo.svg'
import { TooltipMui } from '../../components/TooltipMui'
import { useUser } from '../../hooks/UserContext'
import { Container, ContainerLinks, IconManage, IconLogout } from './styles'

export function Header() {
  const { userData, logout } = useUser()
  const history = useHistory()

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

            <button onClick={logoutUser}>
              <IconLogout />
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </ContainerLinks>
    </Container>
  )
}
