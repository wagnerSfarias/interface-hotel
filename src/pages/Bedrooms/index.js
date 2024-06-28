import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'

import {
  SubTitle,
  Header,
  ListAmenities,
  ModalBedroom,
  MenuMobile,
  Empty
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

export function Bedrooms({ location: { state } }) {
  const [listBedrooms, setListBedrooms] = useState([])
  const [detail, setDetail] = useState([])
  const [loading, setLoading] = useState(true)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    async function loadBedroms() {
      try {
        const { data } = await api.get(`/unit/bedrooms/`, {
          params: { unit_id: state.unitId }
        })
        setTimeout(() => {
          setListBedrooms(data)
          setLoading(false)
        }, 2000)
      } catch (err) {
        setLoading(false)
      }
    }
    loadBedroms()
  }, [state.unitId])

  async function openModal(id) {
    try {
      const { data } = await api.get(`/bedroom/${id}`)
      setDetail(data)
      setVisible(true)
    } catch (err) {}
  }

  function closeModal() {
    setVisible(false)
  }

  return (
    <Container>
      <MenuMobile />
      <Header />
      <SubTitle isWhite={true}>{state.name}</SubTitle>

      {loading && <Empty loading />}

      <ContainerBedrooms>
        {listBedrooms &&
          listBedrooms.map((bedroom, index) => (
            <CardBedrooms
              key={bedroom.id}
              data-aos="zoom-in"
              data-aos-delay={index * 300}
              data-aos-easing="ease-in"
            >
              <Descriptions>
                <img src={bedroom.url} alt="imagem do quarto" />
                <Detail>
                  <h1>{bedroom.name}</h1>
                  <p>{bedroom.unidade.name}</p>
                  <p>
                    9.2 <FaStar className="icon" />
                  </p>
                  <Price>
                    <p>Diárias apartir de</p>
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

      {listBedrooms.length === 0 && !loading && (
        <Empty>No momento não possuímos quartos nessa unidade.</Empty>
      )}

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
