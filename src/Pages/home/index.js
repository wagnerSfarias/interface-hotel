import React from 'react'

import ImgHome from '../../assets/home.jpg'
import CarouselExperiences from '../../components/CarouselExperiences'
import Header from '../../components/Header'
import {
  Container,
  Banner,
  TitleBanner,
  ContainerTitle,
  Description
} from './styles'

export default function Home() {
  return (
    <Container>
      <Banner>
        <Header />
        <TitleBanner>
          <h1>Hotel escolher um nome</h1>
          <h3>Você merece o que há de melhor.</h3>
        </TitleBanner>
      </Banner>

      <ContainerTitle>
        Nosso objetivo é oferecer tranquilidade e bem-estar durante a sua
        hospedagem.
      </ContainerTitle>

      <Description>
        <img src={ImgHome} />
        <div>
          <h2>Nossos hoteis seguem um padrão de excelência.</h2>
          <p>
            Onde oferecemos serviços e lazer, como sala de eventos, sala de
            reuniões, piscina aquecida, restaurante e estacionamento privativo.
          </p>
        </div>
      </Description>

      <CarouselExperiences />
    </Container>
  )
}
