import { FaUserCog } from 'react-icons/fa'
import { FiLogOut, FiMenu } from 'react-icons/fi'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  font-weight: 500;
  padding: 1% 30px 1% 50px;
  align-items: center;
  justify-content: space-between;

  img {
    height: 60px;
  }

  @media screen and (max-width: 768px) {
    padding: 2% 30px 2%;
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
    padding-right: 30px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const IconManage = styled(FaUserCog)`
  font-size: 24px;
`
export const IconLogout = styled(FiLogOut)`
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`
export const MenuMobile = styled(FiMenu)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    color: #fff;
    font-size: 26px;
    cursor: pointer;
  }
`
