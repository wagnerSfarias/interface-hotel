import { FaExclamationTriangle } from 'react-icons/fa'
import { TbLoader2 } from 'react-icons/tb'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: ${props => (props.isAdmin ? 0 : '10%')};
  padding: 3% 0;
  color: ${props => (props.isAdmin ? '#305369' : '#FFF')};
  background: ${props => (props.isAdmin ? '#FFF' : 'transparent')};
`
export const Message = styled.p`
  font-size: 24px;
  text-align: center;
  font-weight: 300;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
export const IconWarn = styled(FaExclamationTriangle)`
  font-size: 26px;
`
export const IconLoading = styled(TbLoader2)`
  font-size: 26px;
  animation: ${rotate} 2s linear infinite;
`
