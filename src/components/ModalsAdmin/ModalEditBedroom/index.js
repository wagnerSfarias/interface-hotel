import { yupResolver } from '@hookform/resolvers/yup'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { MdClose } from 'react-icons/md'
import Modal from 'react-modal'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import api from '../../../service/api'
import typeFile from '../../../utils/typeFile'
import { ErrorMessage } from '../../ErroMessage'
import { Header, Back } from '../../ModalBedroom/styles'
import {
  Container,
  ContainerInput,
  Label,
  Input,
  ReactSelectStyle,
  Carousel,
  LabelUpload,
  Button
} from '../ModalCreateBedroom/styles'

export function ModalEditBedroom({ isOpen, onRequestClose, details }) {
  const [units, setUnits] = useState([])
  const [listFile, setListFile] = useState(details.images)

  useEffect(() => {
    async function loadUnits() {
      try {
        const { data } = await api.get('/units')

        const dataUnits = data.map(unit => {
          return { id: unit.id, name: unit.name }
        })

        setUnits(dataUnits)
      } catch (err) {
        toast.error('Falha no sistema! Tente novamente. ')
      }
    }
    loadUnits()
  }, [])

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: '70vh',
      width: '40%',
      padding: '0',
      background: '#dadbf5'
    }
  }

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome da unidade.'),
    qtd_people: Yup.number()
      .typeError('Digite a capacidade de pessoas.')
      .min(1, 'Nosso limite mínimo é de 1 pessoa.')
      .max(2, 'Nosso limite é de até 2 pessoas.'),
    price: Yup.number()
      .typeError('Digite o valor da diaria.')
      .min(200, 'Valor mínimo é de R$ 200.')
      .max(400, 'Valor máximo até R$ 400'),
    id_unit: Yup.object().required('escolhe uma unidade.')
  })
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async data => {
    const unitDataFormData = new FormData()
    unitDataFormData.append('name', data.name)
    unitDataFormData.append('price', data.price)
    unitDataFormData.append('qtd_people', data.qtd_people)
    unitDataFormData.append('image', listFile[0])
    unitDataFormData.append('image_l', listFile[1])
    unitDataFormData.append('image_r', listFile[2])
    unitDataFormData.append('unit_id', data.id_unit.id)

    try {
      const { status } = await api.put(
        `/bedroom/${details.id}`,
        unitDataFormData,
        {
          validateStatus: () => true
        }
      )
      if (status === 201 || status === 200) {
        toast.success('Quarto editado com sucesso.')
        onRequestClose()
      } else {
        throw new Error()
      }
    } catch (err) {
      console.log(err)
      toast.error('Falha no sistema tente novamente!')
    }
  }

  const handleUpdateFile = (e, key) => {
    if (e.target.files[0]) {
      const isImage = typeFile(e)

      if (isImage) {
        const newFiles = listFile.map((image, index) => {
          return index === key ? e.target.files[0] : image
        })
        setListFile(newFiles)
      } else {
        e.target.value = null
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
      <Container>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <ContainerInput>
            <Label>Nome</Label>
            <Input
              type="text"
              defaultValue={details.name}
              {...register('name')}
              error={errors.name?.message}
            />
            <ErrorMessage>{errors.name?.message}</ErrorMessage>
          </ContainerInput>
          <ContainerInput>
            <Label>Acomoda</Label>
            <Input
              type="number"
              defaultValue={details.qtd_people}
              {...register('qtd_people')}
              error={errors.qtd_people?.message}
            />
            <ErrorMessage>{errors.qtd_people?.message}</ErrorMessage>
          </ContainerInput>
          <ContainerInput>
            <Label>Preço</Label>
            <div>
              <Label>R$</Label>
              <Input
                type="number"
                defaultValue={details.price}
                {...register('price')}
                error={errors.price?.message}
              />
            </div>
            <ErrorMessage>{errors.price?.message}</ErrorMessage>
          </ContainerInput>

          <Controller
            name="id_unit"
            defaultValue={details.select}
            control={control}
            render={({ field }) => {
              return (
                <ReactSelectStyle
                  {...field}
                  options={units}
                  getOptionLabel={cat => cat.name}
                  getOptionValue={value => value.id}
                  placeholder="unidade..."
                  defaultValue={details.select}
                />
              )
            }}
          ></Controller>
          <ErrorMessage>{errors.id_unit?.message}</ErrorMessage>

          <Carousel>
            {listFile.map((value, key) => (
              <LabelUpload key={key}>
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  onChange={e => handleUpdateFile(e, key)}
                />
                <img
                  src={value.url ? value?.url : URL.createObjectURL(value)}
                  alt="imagem-quarto"
                />
              </LabelUpload>
            ))}
          </Carousel>
          <Button>Editar</Button>
        </form>
      </Container>
    </Modal>
  )
}

ModalEditBedroom.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  details: PropTypes.object
}
