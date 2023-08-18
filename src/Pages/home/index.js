import React from 'react'

import Chef from '../../assets/chef.png'
import Coffe from '../../assets/coffe.png'
import Drinks from '../../assets/drink.png'
import ImgHome from '../../assets/home.jpg'
import Header from '../../components/Header'
import {
  Container,
  Banner,
  TitleBanner,
  ContainerTitle,
  Title,
  Description,
  ContainerGastronomy,
  CardsGastronomy
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

      <ContainerGastronomy>
        <Title>Gastronomia</Title>
        <CardsGastronomy>
          <div>
            <img src={Coffe} />
            <h2>Café da manhã</h2>
            <p>Servido todos os dias com um buffet completo.</p>
          </div>
          <div>
            <img src={Chef} />
            <h2>Restaurante</h2>
            <p>
              Temos um menu completo com diversos pratos, além de 5 cheffs
              renomados a disposição.
            </p>
          </div>
          <div>
            <img src={Drinks} />
            <h2>Bar</h2>
            <p>
              Aberto 24 horas, com uma ampla variedade de drinks e aperitivos.
            </p>
          </div>
        </CardsGastronomy>
      </ContainerGastronomy>
    </Container>
  )
}
