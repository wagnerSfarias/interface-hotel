import { yupResolver } from '@hookform/resolvers/yup'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
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
  Label,
  Input,
  LabelUpload,
  Button
} from '../ModalCreateUnit/styles'

export function ModalEditUnit({ isOpen, onRequestClose, details }) {
  const [file, setFile] = useState(null)
  const [error, setError] = useState(false)

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
    address: Yup.string().required('Digite o endereço da unidade.')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async data => {
    const unitDataFormData = new FormData()
    unitDataFormData.append('name', data.name)
    unitDataFormData.append('address', data.address)
    unitDataFormData.append('file', file)

    try {
      const { status } = await api.put(`unit/${details.id}`, unitDataFormData, {
        validateStatus: () => true
      })
      if (status === 201 || status === 200) {
        toast.success('Unidade alterada')
        onRequestClose()
      } else if (status === 400) {
        toast.error('Nome da unidade já existe, tente usar outro nome.')
        setError(true)
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Falha no sistema tente novamente!')
    }
  }

  const handleFile = e => {
    if (e.target.files[0]) {
      const isImage = typeFile(e)
      if (isImage) {
        setFile(isImage[0])
        e.target.value = null
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
          <div>
            <Label>Name</Label>
            <Input
              type="text"
              {...register('name')}
              errorExist={error}
              error={errors.name?.message}
              defaultValue={details.name}
            />
            <ErrorMessage>{errors.name?.message}</ErrorMessage>
            {error && <ErrorMessage>Nome da unidade já existe.</ErrorMessage>}
          </div>
          <div>
            <Label>Endereço</Label>
            <Input
              type="text"
              {...register('address')}
              defaultValue={details.address}
              error={errors.address?.message}
            />
            <ErrorMessage>{errors.address?.message}</ErrorMessage>
          </div>

          <LabelUpload>
            <img
              src={file ? URL.createObjectURL(file) : details.url}
              alt="imagem-unidade"
            />

            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleFile}
            />
          </LabelUpload>
          <ErrorMessage>{errors.file?.message}</ErrorMessage>

          <Button>Editar</Button>
        </form>
      </Container>
    </Modal>
  )
}

ModalEditUnit.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  details: PropTypes.object
}
