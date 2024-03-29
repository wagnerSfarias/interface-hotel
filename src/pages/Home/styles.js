import styled from 'styled-components'

import Back from '../../assets/banner.jpg'

export const Container = styled.div`
  min-height: 100vh;
`
export const Banner = styled.div`
  height: 65vh;
  width: 100%;
  background-image: linear-gradient(
      90deg,
      rgba(18, 18, 17, 1) 2%,
      rgba(18, 18, 17, 0.75) 30%,
      rgba(18, 18, 17, 0.1) 60%
    ),
    url(${Back});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center top;
  background-color: rgba(18, 18, 17, 1);

  @media screen and (max-width: 768px) {
    height: 350px;
  }
`

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  background-color: rgba(98, 135, 169, 0.2);

  h2 {
    font-size: 24px;
    font-weight: 400;
    width: 70%;
    text-align: center;
    color: #305369;
  }

  @media screen and (max-width: 768px) {
    height: 120px;
    h2 {
      font-size: 20px;
      width: 90%;
    }
  }
`

export const Description = styled.div`
  display: flex;
  align-items: center;
  height: 500px;

  img {
    max-width: 500px;
    width: 45%;
    margin: 5% 3%;
  }
  div {
    width: 50%;
    margin: 0 auto;
  }
  h2 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 2%;
    color: #305369;
    text-align: center;
  }
  p {
    margin: 0 auto;
    width: 80%;
    text-align: center;
    color: #305369;
    font-size: 18px;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 400px;
    padding-top: 3%;
    position: relative;
    margin: 5% 0;

    img {
      max-width: 500px;
      width: 330px;
      position: absolute;
      bottom: 0;
    }
    div {
      width: 100%;
    }
    h2 {
      font-size: 20px;
      margin-bottom: 2%;
    }
    p {
      font-size: 16px;
    }
  }
`
export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(98, 135, 169, 0.2);
  color: #305369;
  position: relative;

  h3 {
    font-weight: 400;
    margin: 1% auto;
  }

  h2 {
    border-top: 2px solid #fe7569;
    text-align: center;
    padding-top: 1%;
    width: 80%;
    margin: 1% auto;
    font-weight: 500;
    font-size: 16px;
  }
  img {
    margin: 0 auto;
    height: 150px;
  }

  @media screen and (max-width: 768px) {
    img {
      height: 100px;
    }
    h3 {
      font-size: 18px;
    }
    h2 {
      margin: 5% auto;
    }
  }
`
export const Contacts = styled.div`
  position: absolute;
  right: 3%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: fit-content;

  h3 {
    font-weight: 400;
    color: #fe7569;
    font-size: 20px;
  }

  p {
    font-weight: 400;
  }

  div {
    display: flex;
    gap: 5%;

    a {
      color: #305369;
      transition: transform 500ms;
      font-size: 26px;
    }
    a:hover {
      transform: scale(1.3);
    }
  }

  @media screen and (max-width: 768px) {
    position: relative;
    right: 0;
    align-items: center;

    div {
      justify-content: center;
      gap: 10%;
      margin-top: 2%;

      a:hover {
        transform: none;
      }
    }
  }
`
