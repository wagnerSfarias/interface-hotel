import React, { useEffect, useState } from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'

import { SubTitle, Header } from '../../components'
import { Warn } from '../../components/ModalBedroom/styles'
import api from '../../service/api'
import {
  Container,
  ContainerReservations,
  CardReservation,
  Detail,
  Dates
} from './styles'

export function Reservations() {
  const [reservations, setReservations] = useState([])

  useEffect(() => {
    async function loadReservations() {
      const { data } = await api.get('/user/reservations')

      setReservations(data)
    }
    loadReservations()
  }, [])

  async function cancelReservation(id) {
    await api.delete(`/reservation/${id}`)

    const reservation = reservations.filter(
      reservation => reservation.id !== id
    )
    setReservations(reservation)
  }

  return (
    <Container>
      <Header />
      <SubTitle isWhite={true}>Suas Reservas</SubTitle>
      <ContainerReservations>
        {reservations &&
          reservations.map(reservation => (
            <CardReservation key={reservation.id}>
              <img src={reservation.bedroom.url} alt="imagem quarto" />
              <Detail>
                <h1>Quarto {reservation.bedroom.name}</h1>
                <p>
                  <FaMapMarkerAlt />
                  {reservation.bedroom.unidade.address} -{' '}
                  {reservation.bedroom.unidade.name}
                </p>
                <Dates>
                  <div>
                    <p>CHECK-IN</p>
                    <p>
                      {new Date(reservation.check_in).toLocaleDateString(
                        'pt-BR',
                        { timeZone: 'UTC' }
                      )}
                    </p>
                  </div>
                  <div>
                    <p>CHECK-OUT</p>
                    <p>
                      {new Date(reservation.check_out).toLocaleDateString(
                        'pt-BR',
                        { timeZone: 'UTC' }
                      )}
                    </p>
                  </div>
                </Dates>

                <button onClick={() => cancelReservation(reservation.id)}>
                  Cancelar Reserva
                </button>
                <Warn> Entrada 15H | Saída 12H</Warn>
              </Detail>
            </CardReservation>
          ))}
      </ContainerReservations>
    </Container>
  )
}
