import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Container, IconLogout } from './styles'
export default function Header() {
  const [user, setUser] = useState(false)
  return (
    <Container>
      <Link to="/">Minhas Reservas</Link>
      {user ? (
        <button>
          <IconLogout />{' '}
        </button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </Container>
  )
}
