import { yupResolver } from '@hookform/resolvers/yup'
import Modal from '@mui/material/Modal'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { MdClose, MdUploadFile } from 'react-icons/md'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { useUser } from '../../../hooks/UserContext'
import api from '../../../service/api'
import typeFile from '../../../utils/typeFile'
import { ErrorMessage } from '../../ErroMessage'
import { Header, Back } from '../../ModalBedroom/styles'
import {
  ModalContentAdmin,
  Container,
  ContainerInput,
  Label,
  Input,
  LabelUpload,
  Button
} from './styles'

export function ModalCreateUnit({ isOpen, onRequestClose }) {
  const [file, setFile] = useState(null)
  const [error, setError] = useState(false)
  const [errorFile, setErrorFile] = useState(false)
  const { logout } = useUser()
  const history = useHistory()

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
    if (file) {
      setErrorFile(false)
      const unitDataFormData = new FormData()
      unitDataFormData.append('name', data.name)
      unitDataFormData.append('address', data.address)
      unitDataFormData.append('file', file)

      try {
        const { status } = await api.post('unit/', unitDataFormData, {
          validateStatus: () => true
        })
        if (status === 201 || status === 200) {
          toast.success('Unidade criada.')
          onRequestClose()
        } else if (status === 400) {
          toast.error('Nome da unidade já existe, tente usar outro nome.')
          setError(true)
        } else if (status === 401) {
          logout()
          toast.error('Ocorreu um erro na sua autenticação! Tente novamente.')

          setTimeout(() => {
            history.push('/login')
          }, 2000)
        } else {
          throw new Error()
        }
      } catch (err) {
        toast.error('Falha no sistema tente novamente!')
      }
    } else {
      setErrorFile(true)
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
    <Modal open={isOpen} onClose={onRequestClose}>
      <ModalContentAdmin>
        <Header>
          <Back onClick={onRequestClose}>
            <MdClose />
          </Back>
        </Header>
        <Container>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <h2>Criar Unidade</h2>
            <ContainerInput>
              <Label>Name</Label>
              <Input
                type="text"
                {...register('name')}
                error={errors.name?.message}
                errorExist={error}
              />
              <ErrorMessage>{errors.name?.message}</ErrorMessage>
              {error && <ErrorMessage>Nome da unidade já existe.</ErrorMessage>}
            </ContainerInput>
            <ContainerInput>
              <Label>Endereço</Label>
              <Input
                type="text"
                {...register('address')}
                error={errors.address?.message}
              />
              <ErrorMessage>{errors.address?.message}</ErrorMessage>
            </ContainerInput>

            <LabelUpload>
              {file ? (
                <img src={URL.createObjectURL(file)} alt="imagem-unidade" />
              ) : (
                <MdUploadFile />
              )}

              <input
                type="file"
                accept="image/png, image/jpeg"
                onChange={handleFile}
              />
            </LabelUpload>
            {errorFile && <ErrorMessage>Carregue uma imagem</ErrorMessage>}
            <Button>Criar</Button>
          </form>
        </Container>
      </ModalContentAdmin>
    </Modal>
  )
}

ModalCreateUnit.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func
}
