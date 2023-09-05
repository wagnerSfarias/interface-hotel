import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import { useUser } from '../../hooks/UserContext'
import { Container, ContainerLinks, IconLogout } from './styles'

export function Header() {
  const { userData, logout } = useUser()
  const history = useHistory()

  const logoutUser = () => {
    logout()
    history.go(0)
  }

  const Logo =
    'https://raw.githubusercontent.com/wagnerSfarias/images/765758fe0da80a49b0a48d60d8d49c190969163e/images-hotel/logo.svg'

  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="imagem logo" title="Início" />
      </Link>
      <ContainerLinks>
        <Link to="/reservas">Minhas Reservas</Link>
        {userData ? (
          <>
            <p>Olá, {userData.name}</p>
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
