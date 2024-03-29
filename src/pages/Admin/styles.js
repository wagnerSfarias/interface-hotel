import { MdHome } from 'react-icons/md'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
 `
export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #dadbf5;
`
export const ContainerPages = styled.div`
  padding: 30px;

  @media screen and (max-width: 768px) {
    padding: 30px 3%;
  }
`
export const Icon = styled(MdHome)`
  z-index: 99;
  font-size: 30px;
`
export const ButtonHome = styled(Link)`
  position: relative;
  margin-top: 1%;
  left: 6%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #323d5d;
  z-index: 1;
  background-color: transparent;
  overflow: hidden;
  width: 60px;
  height: 60px;
  border-radius: 50%;

  &:hover::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 25px;
    background-color: #fe7569;
    animation: ${rotate} 2s linear infinite;
  }

  &:hover::after {
    content: '';
    position: absolute;
    background-color: #dadbf5;
    inset: 5px;
    border-radius: inherit;
  }

  @media screen and (max-width: 768px) {
    position: absolute;
    top: 0;
    margin: 0;
    left: 4%;
    border-radius: 0;

    &:hover:before {
      display: none;
    }
  }
`
