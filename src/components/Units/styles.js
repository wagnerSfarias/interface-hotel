import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ContainerUnits = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  margin-bottom: 30px;
  padding: 0 3%;
  gap: 2%;
`
export const Button = styled(Link)`
  max-height: 250px;
  position: relative;
  border: none;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
  img {
    border-radius: 10px;
    max-height: 250px;
    width: 100%;
  }
  p {
    position: absolute;
    bottom: 0;
    font-size: 22px;
    font-weight: 500;
    background-color: rgba(164, 161, 161, 0.6);
    color: #fff;
    width: 100%;
    text-align: right;
    padding: 2% 3%;
    border-radius: 0px 0 10px 10px;
  }
`
