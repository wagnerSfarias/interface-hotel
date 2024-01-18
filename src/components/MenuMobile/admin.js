import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import listOptions from '../../components/MenuAdmin/menu-list'
import { useMenu } from '../../hooks/MenuContext'
import { useUser } from '../../hooks/UserContext'
import { IconLogout } from '../Header/styles'
import { Background, Container, Close, ContainerNav, BtnLogout } from './styles'

export function AdminMobile() {
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
          <p>Olá, {userData?.name}</p>
          {listOptions.map(option => (
            <Link to={option.link} key={option.id}>
              {option.label}
            </Link>
          ))}

          <BtnLogout onClick={logoutUser}>
            <IconLogout />
          </BtnLogout>
        </ContainerNav>
      </Container>
    </Background>
  )
}
