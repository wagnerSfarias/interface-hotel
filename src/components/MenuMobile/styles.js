import { MdClose, MdPersonPin } from 'react-icons/md'
import styled, { css } from 'styled-components'

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: calc(100vh - 300px);
  z-index: 1;
  opacity: 0;
  pointer-events: none;
  background-color: rgba(218, 219, 245, 0.9);
  transition: 500ms;
  transform: translateY(300px);

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0px);
      height: 100vh;
      z-index: 99;
    `}
`
export const Container = styled.div`
  position: absolute;
  width: 80%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #305369;
  display: flex;
  justify-content: center;
  font-size: 20px;
  color: #fff;

  a {
    cursor: pointer;
    font-size: 20px;
    text-decoration: none;
    color: #fff;
    border-left: 2px solid #fff;
    padding-left: 20px;
  }

  > svg {
    transform: rotate(80deg);
    transition: 2s;
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      > svg {
        transform: rotate(0deg);
      }
    `}

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`
export const Close = styled(MdClose)`
  position: absolute;
  top: 2%;
  left: 2%;
  font-size: 30px;
`
export const ContainerNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  gap: 3%;
`
export const BtnLogout = styled.button`
  position: absolute;
  top: 20px;
  right: 5%;
  display: flex;
  background: transparent;
  color: #fff;
  font-size: 30px;
  border: none;
`
export const BtnSignIn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  gap: 6%;
  background: transparent;
  color: #fff;
  padding: 2%;
  margin-top: 2%;
  border: none;
  border: 2px solid #fff;
  border-radius: 5%;
`
export const IconSign = styled(MdPersonPin)`
  font-size: 24px;
`
