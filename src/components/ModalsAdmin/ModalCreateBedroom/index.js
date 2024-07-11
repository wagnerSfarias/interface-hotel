import { yupResolver } from '@hookform/resolvers/yup'
import Modal from '@mui/material/Modal'
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { MdClose, MdUploadFile } from 'react-icons/md'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import api from '../../../service/api'
import typeFile from '../../../utils/typeFile'
import { ErrorMessage } from '../../ErroMessage'
import { Header, Back } from '../../ModalBedroom/styles'
import {
  ModalContentAdmin,
  Label,
  Input,
  Button
} from '../ModalCreateUnit/styles'
import {
  Container,
  ContainerInput,
  ReactSelectStyle,
  Carousel,
  LabelUpload
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
      } catch (err) {}
    }
    loadUnits()
  }, [])

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
    if (listFile.length !== 3) {
      setErrorFile(true)
    } else {
      setErrorFile(false)

      const unitDataFormData = new FormData()
      unitDataFormData.append('name', data.name)
      unitDataFormData.append('price', data.price)
      unitDataFormData.append('qtd_people', data.qtd_people)
      for (let i = 0; i < listFile.length; i++) {
        unitDataFormData.append('file', listFile[i])
      }
      unitDataFormData.append('unit_id', data.id_unit.value)

      try {
        await api.post('bedroom/', unitDataFormData)
        toast.success('Quarto adicionado.')
        onRequestClose()
      } catch (err) {}
    }
  }

  const handleFile = e => {
    if (e.target.files[0]) {
      const isImage = typeFile(e)

      if (isImage) {
        const existsImg = listFile.find(index => index.name === isImage[0].name)
        if (existsImg) {
          toast.warn('Por favor, não repetir as imagens!')
          e.target.value = null
          return
        }
        const files = [...listFile, isImage[0]]

        setListFile(files)
        e.target.value = null
      } else {
        e.target.value = null
      }
    }
  }

  const handleUpdateFile = (e, nameFile) => {
    if (e.target.files[0]) {
      const isImage = typeFile(e)
      if (isImage) {
        const existsImg = listFile.find(
          index => index.name === isImage[0]?.name
        )
        if (existsImg) {
          toast.warn('Por favor, não repetir as imagens!')
          e.target.value = null
          return
        }
        const newFiles = listFile.map(image => {
          return image.name === nameFile ? isImage[0] : image
        })

        setListFile(newFiles)
        e.target.value = null
      } else {
        e.target.value = null
      }
    }
  }

  return (
    <Modal open={isOpen} onClose={onRequestClose}>
      <ModalContentAdmin>
        <Header>
          <Back onClick={onRequestClose}>
            <MdClose />
          </Back>
        </Header>
        <Container>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <h2>Criar Quarto</h2>
            <ContainerInput>
              <Label>Nome</Label>
              <Input
                type="text"
                {...register('name')}
                error={errors.name?.message}
              />
              <ErrorMessage>{errors.name?.message}</ErrorMessage>
            </ContainerInput>
            <ContainerInput>
              <Label>Acomoda</Label>
              <Input
                type="number"
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
                  {...register('price')}
                  error={errors.price?.message}
                />
              </div>

              <ErrorMessage>{errors.price?.message}</ErrorMessage>
            </ContainerInput>

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

            {errorFile && (
              <ErrorMessage>Carregue todas as imagens</ErrorMessage>
            )}

            <Button>Criar</Button>
          </form>
        </Container>
      </ModalContentAdmin>
    </Modal>
  )
}

ModalCreateBedroom.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func
}
