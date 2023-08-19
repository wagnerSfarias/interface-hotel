import React from 'react'

import Chef from '../../assets/chef.png'
import Coffe from '../../assets/coffe.png'
import Coworking from '../../assets/coworking.png'
import Drinks from '../../assets/drink.png'
import Eventos from '../../assets/events.png'
import Pool from '../../assets/pool.png'
import { Container, Title, ContainerCarousel, Card } from './styles'

export default function CarouselExperiences() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]

  return (
    <Container>
      <Title>Experiências</Title>
      <ContainerCarousel breakPoints={breakPoints}>
        <Card>
          <img src={Coffe} />
          <h2>Café da manhã</h2>
          <p>Servido todos os dias com um buffet completo.</p>
        </Card>
        <Card>
          <img src={Chef} />
          <h2>Restaurante</h2>
          <p>
            Temos um menu completo com diversos pratos, além de 5 cheffs
            renomados a disposição.
          </p>
        </Card>
        <Card>
          <img src={Drinks} />
          <h2>Bar</h2>
          <p>
            Aberto 24 horas, com uma ampla variedade de drinks e aperitivos.
          </p>
        </Card>
        <Card>
          <img src={Eventos} />
          <h2>Sala de Eventos</h2>
          <p>Realize seu evento, espaço com capacidade para até 100 pessoas.</p>
        </Card>
        <Card>
          <img src={Coworking} />
          <h2>Coworking</h2>
          <p>
            Estações de trabalhos que oferecem tomada, ponto de rede e
            impressora.
          </p>
        </Card>
        <Card>
          <img src={Pool} />
          <h2>Piscina</h2>
          <p>Piscina climatizada. </p>
        </Card>
      </ContainerCarousel>
    </Container>
  )
}
