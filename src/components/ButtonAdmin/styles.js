import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`
export const Button = styled.button`
  position: absolute;
  right: 6%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #323d5d;
  background-color: transparent;
  border: none;
  font-size: 18px;

  overflow: hidden;
  width: 250px;
  height: 50px;

  &:hover::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 25px;
    background-color: #fe7569;
    animation: ${rotate} 4s linear infinite;
  }

  &:hover::after {
    content: '${props => props.text}';
    position: absolute;
    background-color: #dadbf5;
    inset: 5px;
    border-radius: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    background: #fe7569;
    color: #fff;
    border-radius: 10px;
    width: 210px;
    &:hover:before {
      display: none;
    }
    &:hover::after {
      display: none;
    }
  }
`
