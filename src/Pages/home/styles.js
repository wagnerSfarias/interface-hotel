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
export const TitleBanner = styled.div`
  color: #fff;
  position: absolute;
  top: 20%;
  left: 5%;
  h1 {
    font-weight: 500;
    margin-bottom: 10px;
  }
  h3 {
    font-weight: 300;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 28px;
      margin-bottom: 5px;
    }
    h3 {
      font-size: 16px;
    }
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
