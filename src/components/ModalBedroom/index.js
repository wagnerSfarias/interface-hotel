import PropTypes from 'prop-types'
import React, { useState } from 'react'
import DatePicker from 'react-date-picker'
import { MdClose } from 'react-icons/md'
import Modal from 'react-modal'
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
  WarnCancel
} from './styles'

export function ModalBedroom({ isOpen, onRequestClose, details }) {
  const history = useHistory()
  const { userData } = useUser()
  const [checkin, setCheckin] = useState()
  const [checkout, setCheckout] = useState()

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: '80vh',
      width: '60%',
      padding: '0'
    }
  }

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

          toast.success('Reserva realizada com sucesso !')
          history.push('/reservas')
        } catch (err) {
          toast.error('Falha no sistema! Tente novamente. ')
        }
      }
    }
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <Header>
        <Back onClick={onRequestClose}>
          <MdClose />
        </Back>
        <p>{details.name}</p>
      </Header>
      <ContainerCarousel>
        <Image src={details.url} alt="imagem do quarto" />
        <Image src={details.url_l} alt="imagem do quarto" />
        <Image src={details.url_r} alt="imagem do quarto" />
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
    </Modal>
  )
}

ModalBedroom.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  details: PropTypes.object
}
