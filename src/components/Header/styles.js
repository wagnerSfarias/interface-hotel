import { FiLogOut } from 'react-icons/fi'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  font-weight: 500;
  padding: 20px;
  justify-content: end;
  gap: 50px;

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
export const IconLogout = styled(FiLogOut)`
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  margin-right: 20px;
`
