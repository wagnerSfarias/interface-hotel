import React from 'react'
import { FaWifi, FaBed, FaSnowflake, FaUserFriends } from 'react-icons/fa'

import { Container } from './styles'

const amenities = [
  { name: 'Wi-Fi grátis', icon: FaWifi },
  { name: 'Cama de casal', icon: FaBed },
  { name: 'Ar-condicionado', icon: FaSnowflake },
  { name: 'Acomoda até 2 pessoas', icon: FaUserFriends }
]

export function ListAmenities() {
  return (
    <Container>
      {amenities.map(amenitie => (
        <div key={amenitie.name}>
          <amenitie.icon className="icon" />
          <p>{amenitie.name}</p>
        </div>
      ))}
    </Container>
  )
}
