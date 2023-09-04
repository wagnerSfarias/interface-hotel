import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  background-color: #7890f4;
  padding-bottom: 1%;
`
export const ContainerReservations = styled.div`
  margin: 0 auto;
  max-width: 800px;
`
export const CardReservation = styled.div`
  max-height: 250px;
  display: flex;
  margin-bottom: 2%;

  img {
    max-height: 250px;
    width: 300px;
  }
`
export const Detail = styled.div`
  border-top-right-radius: 25px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 15px;
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
