import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: #7890f4;
  padding-top: 2%;

  img {
    height: 50px;
  }

  button {
    background-color: transparent;
    border: none;
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
  color: ${props => (props.isActive ? '#7890f4' : '#fff')};
  gap: 10px;
  padding-top: 15px;

  a {
    text-decoration: none;
    color: ${props => (props.isActive ? '#7890f4' : '#fff')};
  }

  &:hover {
    background-color: #dadbf5;
    color: #7890f4;
    a {
      color: #7890f4;
    }
  }
`
