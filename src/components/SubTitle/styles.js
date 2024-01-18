import styled from 'styled-components'

export const Title = styled.h2`
  color: ${props => (props.isWhite ? '#FFF' : '#305369')};
  text-align: center;
  margin: 2% 0;
  font-size: 28px;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`
