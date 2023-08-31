import React from 'react'

import { SubTitle } from '../index'
import dataCarousel from './data-carousel'
import { Container, ContainerCarousel, Card } from './styles'

export function CarouselExperiences() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]

  return (
    <Container>
      <SubTitle>Experiências</SubTitle>
      <ContainerCarousel breakPoints={breakPoints}>
        {dataCarousel.map(data => (
          <Card key={data.id}>
            <img src={data.url} alt={`imagem ${data.name}`} />
            <h2>{data.name}</h2>
            <p>{data.description}</p>
          </Card>
        ))}
      </ContainerCarousel>
    </Container>
  )
}
