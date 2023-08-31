import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`
export const Container = styled.div`
  min-height: 100vh;
  background-color: #7890f4;
`
export const ContainerBedrooms = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 0 auto;
`
export const CardBedrooms = styled.div`
  display: flex;
  width: 100%;
  background-color: #fff;
  flex-direction: column;
  margin: 2% 0;
  border-radius: 5px;
`

export const Descriptions = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 2%;

  img {
    max-height: 270px;
    width: 40%;
  }
`

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;
  justify-content: space-between;

  h1 {
    color: #fe7569;
    font-weight: 400;
    font-size: 28px;
  }
  p {
    color: #305369;
  }
  .icon {
    color: #fabc05;
  }

  button {
    border: none;
    background-color: transparent;
    color: #fe7569;
    font-size: 20px;
    cursor: pointer;
    position: relative;
    width: 200px;
    height: 50px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 5px;

    &:hover::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 25px;
      background-color: #fe7569;
      animation: ${rotate} 3s linear infinite;
    }

    &:hover::after {
      content: 'Mais Detalhes';
      position: absolute;
      background-color: #fff;
      inset: 5px;
      border-radius: inherit;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`
export const Price = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`
