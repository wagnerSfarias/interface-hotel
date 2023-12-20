import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ContainerUnits = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4% auto;
  padding: 0 3%;
  gap: 2%;
  max-width: 1250px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 6%;
  }
`
export const Button = styled(Link)`
  display: flex;
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
    height: 100%;
  }
  p {
    position: absolute;
    bottom: 0;
    font-size: 22px;
    font-weight: 500;
    background-color: rgba(224, 231, 238, 0.7);
    color: #305369;
    width: 100%;
    text-align: right;
    padding: 2% 3%;
    border-radius: 0px 0 10px 10px;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 3%;

    &:hover {
      transform: none;
    }
  }
`
