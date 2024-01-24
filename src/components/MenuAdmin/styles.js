import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: #305369;
  padding-top: 2%;

  img {
    height: 45px;
    padding-bottom: 1%;
  }

  button {
    background-color: transparent;
    border: none;
  }

  @media screen and (max-width: 768px) {
    justify-content: end;
    padding: 2% 3%;
    background: transparent;
    height: 60px;

    svg {
      color: #305369;
    }
    img {
      display: none;
    }
    button {
      display: none;
    }
  }
`
export const OptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  font-size: 18px;
  height: 50px;
  width: 150px;
  border-radius: 10px 10px 0 0;
  background-color: ${props => (props.isActive ? '#dadbf5' : 'transparent')};
  color: ${props => (props.isActive ? '#305369' : '#fff')};
  gap: 10px;
  padding-top: 15px;

  a {
    text-decoration: none;
    color: ${props => (props.isActive ? '#305369' : '#fff')};
  }

  &:hover {
    background-color: #dadbf5;
    color: #305369;

    a {
      color: #305369;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`
