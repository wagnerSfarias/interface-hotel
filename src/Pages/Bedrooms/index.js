import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import Modal from 'react-modal'

import { SubTitle, Header, ListAmenities, ModalBedroom } from '../../components'
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
      const { data } = await api.get(`/bedrooms/${state.unitId}`)
      setListBedrooms(data)
    }
    loadBedroms()
  }, [state.unitId])

  async function openModal(id) {
    const { data } = await api.get(`/bedroom/${id}`)
    setDetail(data)
    setVisible(true)
  }

  function closeModal() {
    setVisible(false)
  }

  return (
    <Container>
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
