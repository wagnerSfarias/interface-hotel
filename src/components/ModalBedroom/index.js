import Modal from '@mui/material/Modal'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import DatePicker from 'react-date-picker'
import { MdClose } from 'react-icons/md'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useUser } from '../../hooks/UserContext'
import api from '../../service/api'
import {
  Header,
  ContainerCarousel,
  Back,
  Image,
  ContainerDates,
  Calendar,
  Warn,
  Reservation,
  WarnCancel,
  ModalContent
} from './styles'

export function ModalBedroom({ isOpen, onRequestClose, details }) {
  const history = useHistory()
  const { userData } = useUser()
  const [checkin, setCheckin] = useState()
  const [checkout, setCheckout] = useState()

  async function handleReservation() {
    if (!userData) {
      toast.info('Para continuarmos com sua reserva é necessário fazer login!')
      history.push('/login')
    } else {
      if (!checkin || !checkout) {
        toast.warn('É necessario selecionar as datas de check-in e check-out.')
      } else {
        try {
          await api.post('/reservation', {
            check_in: checkin,
            check_out: checkout,
            bedroom_id: details.id
          })

          toast.success('Reserva realizada!')
          history.push('/reservas')
        } catch (err) {}
      }
    }
  }

  return (
    <Modal open={isOpen} onClose={onRequestClose}>
      <ModalContent>
        <Header>
          <Back onClick={onRequestClose}>
            <MdClose />
          </Back>
          <p>{details.name}</p>
        </Header>
        <ContainerCarousel>
          <Image src={details.url[0]} alt="imagem do quarto" />
          <Image src={details.url[1]} alt="imagem do quarto" />
          <Image src={details.url[2]} alt="imagem do quarto" />
        </ContainerCarousel>

        <ContainerDates>
          <Calendar>
            <p>CHECK-IN</p>
            <DatePicker
              value={checkin}
              minDate={new Date()}
              onChange={date => {
                setCheckin(date)
              }}
            />
          </Calendar>
          <Calendar>
            <p>CHECK-OUT</p>
            <DatePicker
              disabled={!checkin && true}
              value={checkout}
              minDate={checkin}
              onChange={date => {
                setCheckout(date)
              }}
            />
          </Calendar>
        </ContainerDates>

        <Warn>Entrada 15H | Saída 12H</Warn>
        <Reservation onClick={handleReservation}>Reservar</Reservation>
        <WarnCancel>Cancelamento até 24 horas antes.</WarnCancel>
      </ModalContent>
    </Modal>
  )
}

ModalBedroom.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  details: PropTypes.object
}
