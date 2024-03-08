import React from 'react'
import { FaInstagram, FaFacebook, FaGoogle } from 'react-icons/fa'

import ImgHome from '../../assets/home.jpg'
import Logo from '../../assets/logo-footer.png'
import {
  CarouselExperiences,
  Header,
  Units,
  MenuMobile
} from '../../components'
import {
  Container,
  Banner,
  ContainerTitle,
  Description,
  Footer,
  Contacts
} from './styles'

export function Home() {
  return (
    <Container>
      <MenuMobile />
      <Banner>
        <Header />
      </Banner>

      <ContainerTitle>
        <h2>
          Nosso objetivo é oferecer tranquilidade e bem-estar durante a sua
          hospedagem.
        </h2>
      </ContainerTitle>

      <Description>
        <img
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-easing="ease-in"
          src={ImgHome}
          alt="imagem quarto"
        />
        <div data-aos="fade-up" data-aos-delay="300">
          <h2>Nossos hoteis seguem um padrão de excelência.</h2>
          <p>
            Onde oferecemos serviços e lazer, como sala de eventos, sala de
            reuniões, piscina aquecida, restaurante e estacionamento privativo.
          </p>
        </div>
      </Description>

      <CarouselExperiences />
      <Units />
      <Footer>
        <img src={Logo} alt="logo grand hotel" />
        <h3>Você merece o que há de melhor.</h3>
        <Contacts>
          <h3>Central de Atendimento</h3>
          <p>+55 21 55886633</p>
          <p>sac@grandhotel.com</p>
          <div>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a href="https://www.google.com/" target="_blank" rel="noreferrer">
              <FaGoogle />
            </a>
          </div>
        </Contacts>

        <h2>Grand Hotel &copy; 2024</h2>
      </Footer>
    </Container>
  )
}
