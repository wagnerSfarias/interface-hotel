import { yupResolver } from '@hookform/resolvers/yup'
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { MdClose, MdUploadFile } from 'react-icons/md'
import Modal from 'react-modal'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import api from '../../../service/api'
import { ErrorMessage } from '../../ErroMessage'
import { Header, Back } from '../../ModalBedroom/styles'
import {
  Container,
  Label,
  Input,
  ReactSelectStyle,
  Carousel,
  ContainerInputPrice,
  LabelUpload,
  Button
} from './styles'

export function ModalCreateBedroom({ isOpen, onRequestClose }) {
  const [listFile, setListFile] = useState([])
  const [units, setUnits] = useState([])
  const [errorFile, setErrorFile] = useState(false)

  useEffect(() => {
    async function loadUnits() {
      try {
        const { data } = await api.get('/units')

        const dataUnits = data.map(unit => {
          return { value: unit.id, label: unit.name }
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
      .max(2, 'Nosso limite é de até 2 pessoas.')
      .required('Digite a capacidade de pessoas.'),
    price: Yup.number()
      .typeError('Digite o valor da diaria.')
      .min(200, 'Valor mínimo é de R$ 200.')
      .max(400, 'Valor máximo até R$ 400')
      .required('Digite o valor da diaria.'),
    id_unit: Yup.object().required('escolhe uma unidade.')
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async data => {
    if (listFile.length !== 3) {
      setErrorFile(true)
    } else {
      setErrorFile(false)

      const unitDataFormData = new FormData()
      unitDataFormData.append('name', data.name)
      unitDataFormData.append('price', data.price)
      unitDataFormData.append('qtd_people', data.qtd_people)
      unitDataFormData.append('file', listFile[0])
      unitDataFormData.append('file', listFile[1])
      unitDataFormData.append('file', listFile[2])
      unitDataFormData.append('unit_id', data.id_unit.value)

      try {
        const { status } = await api.post('bedroom/', unitDataFormData, {
          validateStatus: () => true
        })
        if (status === 201 || status === 200) {
          toast.success('Quarto adicionado.')
        } else {
          throw new Error()
        }
      } catch (err) {
        toast.error('Falha no sistema tente novamente!')
      }
      onRequestClose()
    }
  }

  const handleFile = e => {
    const existsImg = listFile.find(
      index => index.name === e.target.files[0]?.name
    )
    if (existsImg) {
      toast.warn('Por favor, não repetir as imagens!')
      return
    }

    const files = [...listFile, ...e.target.files]
    setListFile(files)
  }

  const handleUpdateFile = (e, nameFile) => {
    const existsImg = listFile.find(
      index => index.name === e.target.files[0]?.name
    )
    if (existsImg) {
      toast.warn('Por favor, não repetir as imagens!')
      return
    }
    const newFiles = listFile.map(image => {
      return image.name === nameFile ? e.target.files[0] : image
    })

    setListFile(newFiles)
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <Header>
        <Back onClick={onRequestClose}>
          <MdClose />
        </Back>
      </Header>
      <Container>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <h2>Criar Quarto</h2>
          <div>
            <Label>Nome</Label>
            <Input
              type="text"
              {...register('name')}
              error={errors.name?.message}
            />
            <ErrorMessage>{errors.name?.message}</ErrorMessage>
          </div>
          <div>
            <Label>Acomoda</Label>
            <Input
              type="number"
              {...register('qtd_people')}
              error={errors.qtd_people?.message}
            />
            <ErrorMessage>{errors.qtd_people?.message}</ErrorMessage>
          </div>
          <div>
            <Label>Preço</Label>
            <ContainerInputPrice>
              <Label>R$</Label>
              <Input
                type="number"
                {...register('price')}
                error={errors.price?.message}
              />
            </ContainerInputPrice>

            <ErrorMessage>{errors.price?.message}</ErrorMessage>
          </div>
          <div>
            <Controller
              name="id_unit"
              control={control}
              render={({ field }) => {
                return (
                  <ReactSelectStyle
                    {...field}
                    options={units}
                    placeholder="unidade..."
                  />
                )
              }}
            ></Controller>
            <ErrorMessage>{errors.id_unit?.message}</ErrorMessage>
          </div>
          <Carousel>
            {listFile.map((value, key) => (
              <LabelUpload key={key}>
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  onChange={e => handleUpdateFile(e, value.name)}
                />

                <img src={URL.createObjectURL(value)} />
              </LabelUpload>
            ))}
            {listFile.length === 3 ? (
              <></>
            ) : (
              <>
                <LabelUpload>
                  <MdUploadFile />
                  <input
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={handleFile}
                  />
                </LabelUpload>
              </>
            )}
          </Carousel>

          {errorFile && <ErrorMessage>Carregue todas as imagens</ErrorMessage>}

          <Button>Criar</Button>
        </form>
      </Container>
    </Modal>
  )
}

ModalCreateBedroom.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func
}
