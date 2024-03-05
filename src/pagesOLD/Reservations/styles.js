import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  background-color: #7890f4;
  padding-bottom: 1%;
`
export const ContainerReservations = styled.div`
  margin: 0 auto;
  max-width: 768px;

  @media screen and (max-width: 768px) {
    width: 60%;
  }
  @media screen and (max-width: 480px) {
    width: 80%;
  }
`
export const CardReservation = styled.div`
  display: flex;
  margin-bottom: 4%;
  border-radius: 5px;
  overflow: hidden;
  max-height: 250px;

  img {
    max-height: 250px;
    width: 300px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    max-height: 100%;

    img {
      max-height: 230px;
      width: 100%;
    }
  }
`
export const Detail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 1% 3%;
  border-left: 2px dashed #305369;

  h1 {
    color: #fe7569;
    font-weight: 500;
    font-size: 25px;
  }
  p {
    color: #305369;
    font-size: 13px;
    margin: 2% 0;
  }
  button {
    border: none;
    background-color: transparent;
    width: fit-content;
    align-self: end;
    font-size: 18px;
    color: #fe7569;
    cursor: pointer;
    margin: 5%;
    transition: all 500ms ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 768px) {
    border: 0;
    border-top: 2px dashed #305369;

    h1 {
      font-size: 20px;
    }

    button {
      align-self: center;
      font-weight: 500;

      &:hover {
        transform: none;
      }
    }
  }
`

export const Dates = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;

  p:first-of-type {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 2%;
  }
  p {
    font-size: 14px;
  }
`
