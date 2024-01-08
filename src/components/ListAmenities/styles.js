import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 2%;
  width: 100%;
  gap: 1%;

  div {
    padding: 15px 10px;
    border-radius: 5px;
    display: flex;
    gap: 5px;
    box-shadow: 5px 4px 10px 2px rgba(0, 0, 0, 0.3);
  }

  p {
    color: #305369;
    font-size: 14px;
    text-align: center;
  }

  .icon {
    color: #fe7569;
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    margin: 0 auto;

    div {
      margin-bottom: 5%;
      gap: 2%;
      box-shadow: 4px 2px 10px 2px rgba(0, 0, 0, 0.3);
    }
  }
`
