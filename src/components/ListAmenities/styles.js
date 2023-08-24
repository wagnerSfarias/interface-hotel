import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 2%;
  width: 100%;

  div {
    padding: 15px 10px;
    border-radius: 5px;
    display: flex;
    gap: 10px;
    box-shadow: 5px 4px 10px 2px rgba(0, 0, 0, 0.3);
  }

  p {
    color: #305369;
    font-size: 14px;
  }

  .icon {
    color: #fe7569;
    font-size: 18px;
  }
`
