import Carousel from 'react-elastic-carousel'
import styled from 'styled-components'

export const Container = styled.div`
  margin: 3% 0;
  display: flex;
  flex-direction: column;
  padding-bottom: 3%;
  background-color: #f0e2d0;
`

export const ContainerCarousel = styled(Carousel)`
  width: 90%;
  margin: 0 auto;

  .rec.rec-arrow {
    background-color: #fe7569;
    color: #efefef;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border: none;
  }
  .rec.rec-arrow:hover {
    border: 1px solid #fe7569;
    background-color: #efefef;
    color: #fe7569;
  }
  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }

  .rec-dot_active {
    background-color: #fe7569;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 1px 3px;
    width: 12px;
    height: 12px;
  }
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2%;

  img {
    max-height: 350px;
    width: 100%;
  }
  h2 {
    color: #fe7569;
    margin: 5px 0;
    font-weight: 400;
    font-size: 20px;
  }
  p {
    text-align: center;
    font-size: 16px;
    color: #305369;
  }
`
