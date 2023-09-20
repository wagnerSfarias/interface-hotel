import Edit from '@mui/icons-material/Edit'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`
export const Container = styled.div`
  margin-top: 70px;
`
export const ImgUnit = styled.img`
  width: 100px;
  border-radius: 5px;
`
export const ButtonAdd = styled.button`
  position: absolute;
  right: 6%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
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
    animation: ${rotate} 3s linear infinite;
  }

  &:hover::after {
    content: 'Adicionar nova unidade';
    position: absolute;
    background-color: #dadbf5;
    inset: 5px;
    border-radius: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const EditIcon = styled(Edit)`
  cursor: pointer;
  color: #323d5d;
`
