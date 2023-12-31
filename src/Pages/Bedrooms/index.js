import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import Modal from 'react-modal'
import { toast } from 'react-toastify'

import {
  SubTitle,
  Header,
  ListAmenities,
  ModalBedroom,
  MenuMobile
} from '../../components'
import api from '../../service/api'
import {
  Container,
  ContainerBedrooms,
  CardBedrooms,
  Descriptions,
  Price,
  Detail
} from './styles'

Modal.setAppElement('#root')

export function Bedrooms({ location: { state } }) {
  const [listBedrooms, setListBedrooms] = useState([])
  const [detail, setDetail] = useState([])
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    async function loadBedroms() {
      try {
        const { data } = await api.get(`/unit/bedrooms/`, {
          params: { unit_id: state.unitId }
        })
        setListBedrooms(data)
      } catch (err) {
        toast.error('Falha no sistema! Tente novamente. ')
      }
    }
    loadBedroms()
  }, [state.unitId])

  async function openModal(id) {
    try {
      const { data } = await api.get(`/bedroom/${id}`)
      setDetail(data)
      setVisible(true)
    } catch (err) {
      toast.error('Falha no sistema! Tente novamente. ')
    }
  }

  function closeModal() {
    setVisible(false)
  }

  return (
    <Container>
      <MenuMobile />
      <Header />
      <SubTitle isWhite={true}>{state.name}</SubTitle>
      <ContainerBedrooms>
        {listBedrooms &&
          listBedrooms.map(bedroom => (
            <CardBedrooms key={bedroom.id}>
              <Descriptions>
                <img src={bedroom.url} alt="imagem do quarto" />
                <Detail>
                  <h1>{bedroom.name}</h1>
                  <p>{bedroom.unidade.name}</p>
                  <p>
                    9.2 <FaStar className="icon" />
                  </p>
                  <Price>
                    <p>Diarias apartir de</p>
                    <p>R${bedroom.price},00</p>
                  </Price>
                  <button onClick={() => openModal(bedroom.id)}>
                    Mais Detalhes
                  </button>
                </Detail>
              </Descriptions>
              <ListAmenities />
            </CardBedrooms>
          ))}
      </ContainerBedrooms>
      {visible && (
        <ModalBedroom
          isOpen={visible}
          onRequestClose={closeModal}
          details={detail}
        />
      )}
    </Container>
  )
}

Bedrooms.propTypes = {
  location: PropTypes.object
}
