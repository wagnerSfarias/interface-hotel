import styled from 'styled-components'

export const ContainerButton = styled.button`
  width: 70%;
  height: 40px;
  background: #fe7569;
  border-radius: 20px;
  border: none;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  color: #fff;
  font-size: 18px;
  margin: 20px auto;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`
