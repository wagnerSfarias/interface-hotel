import React, { useEffect, useState } from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'

import { SubTitle, Empty, Header, MenuMobile } from '../../components'
import { Warn } from '../../components/ModalBedroom/styles'
import api from '../../service/api'
import formatDate from '../../utils/formatDate'
import {
  Container,
  ContainerReservations,
  CardReservation,
  Detail,
  Dates
} from './styles'

export function Reservations() {
  const [reservations, setReservations] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadReservations() {
      try {
        const response = await api.get('/user/reservations')

        setTimeout(() => {
          setReservations(response.data)
          setLoading(false)
        }, 2000)
      } catch (err) {
        setLoading(false)
      }
    }
    loadReservations()
  }, [])

  async function cancelReservation(id) {
    try {
      await api.delete(`/reservation/${id}`)
      const reservation = reservations.filter(
        reservation => reservation.id !== id
      )
      setReservations(reservation)
    } catch (err) {}
  }

  return (
    <>
      <MenuMobile />
      <Container>
        <Header />
        <SubTitle isWhite={true}>Suas Reservas</SubTitle>

        {loading && <Empty loading />}

        <ContainerReservations>
          {reservations &&
            reservations.map((reservation, index) => (
              <CardReservation
                key={reservation.id}
                data-aos="zoom-in"
                data-aos-delay={index * 300}
                data-aos-easing="ease-in"
              >
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
                      <p>{formatDate(reservation.check_in)}</p>
                    </div>
                    <div>
                      <p>CHECK-OUT</p>
                      <p>{formatDate(reservation.check_out)}</p>
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
        {reservations.length === 0 && !loading && (
          <Empty>Nenhuma reserva foi encontrada.</Empty>
        )}
      </Container>
    </>
  )
}
