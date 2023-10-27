import styled from 'styled-components'

import Back from '../../assets/banner.jpg'

export const Container = styled.div`
  min-height: 100vh;
`
export const Banner = styled.div`
  height: 60vh;
  width: 100%;
  background-image: linear-gradient(
      90deg,
      rgba(18, 18, 17, 1) 0%,
      rgba(18, 18, 17, 0.75) 30%,
      rgba(18, 18, 17, 0.1) 60%
    ),
    url(${Back});
  background-repeat: no-repeat;
  background-size: 80% 100%;
  background-position: top right;
  background-color: rgba(18, 18, 17, 1);
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
`
export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: rgba(98, 135, 169, 0.2);
  font-size: 24px;
  color: #305369;
`

export const Description = styled.div`
  display: flex;
  align-items: center;

  img {
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
    line-height: 50px;
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
`
