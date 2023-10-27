import { FaUserCog } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  font-weight: 500;
  padding: 0 30px 0 80px;
  align-items: center;
  justify-content: space-between;

  img {
    width: 100px;
    height: 50px;
  }
`
export const ContainerLinks = styled.nav`
  display: flex;
  gap: 50px;
  color: #fff;

  a {
    cursor: pointer;
    text-decoration: none;
    color: #fff;
  }

  a:nth-child(1) {
    border-right: 2px solid #d1d1d1;
    padding-right: 50px;
  }

  button {
    background-color: transparent;
    border: none;
  }
`
export const IconManage = styled(FaUserCog)`
  font-size: 24px;
`
export const IconLogout = styled(FiLogOut)`
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  margin-right: 20px;
`
