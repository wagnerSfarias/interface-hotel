import React from 'react'

import ImgHome from '../../assets/home.jpg'
import { CarouselExperiences, Header, Units } from '../../components'
import {
  Container,
  Banner,
  TitleBanner,
  ContainerTitle,
  Description
} from './styles'

export function Home() {
  return (
    <Container>
      <Banner>
        <Header />
        <TitleBanner>
          <h1>GRAND HOTEL</h1>
          <h3>Você merece o que há de melhor.</h3>
        </TitleBanner>
      </Banner>

      <ContainerTitle>
        <h2>
          Nosso objetivo é oferecer tranquilidade e bem-estar durante a sua
          hospedagem.
        </h2>
      </ContainerTitle>

      <Description>
        <img src={ImgHome} alt="imagem quarto" />
        <div>
          <h2>Nossos hoteis seguem um padrão de excelência.</h2>
          <p>
            Onde oferecemos serviços e lazer, como sala de eventos, sala de
            reuniões, piscina aquecida, restaurante e estacionamento privativo.
          </p>
        </div>
      </Description>

      <CarouselExperiences />
      <Units />
    </Container>
  )
}
