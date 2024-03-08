import React, { useEffect, useState } from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import { SubTitle, Empty, Header, MenuMobile } from '../../components'
import { Warn } from '../../components/ModalBedroom/styles'
import { useUser } from '../../hooks/UserContext'
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
  const { logout } = useUser()
  const history = useHistory()

  useEffect(() => {
    async function loadReservations() {
      try {
        const response = await api.get('/user/reservations', {
          validateStatus: () => true
        })

        if (response.status === 200 || response.status === 201) {
          setTimeout(() => {
            setReservations(response.data)
            setLoading(false)
          }, 2000)
        } else if (response.status === 401) {
          logout()
          toast.error('Ocorreu um erro na sua autenticação! Tente novamente.')

          setTimeout(() => {
            history.push('/login')
          }, 2000)
        } else {
          throw new Error()
        }
      } catch (err) {
        toast.error('Falha no sistema! Tente novamente.')
        setLoading(false)
      }
    }
    loadReservations()
  }, [logout, history])

  async function cancelReservation(id) {
    try {
      const response = await api.delete(`/reservation/${id}`, {
        validateStatus: () => true
      })
      if (response.status === 200 || response.status === 201) {
        const reservation = reservations.filter(
          reservation => reservation.id !== id
        )
        setReservations(reservation)
      } else if (response.status === 401) {
        logout()
        toast.error('Ocorreu um erro na sua autenticação! Tente novamente.')

        setTimeout(() => {
          history.push('/login')
        }, 2000)
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Falha no sistema! Tente novamente.')
    }
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
