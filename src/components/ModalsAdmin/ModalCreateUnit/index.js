import { yupResolver } from '@hookform/resolvers/yup'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { MdClose, MdUploadFile } from 'react-icons/md'
import Modal from 'react-modal'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import api from '../../../service/api'
import { ErrorMessage } from '../../ErroMessage'
import { Header, Back } from '../../ModalBedroom/styles'
import { Container, Label, Input, LabelUpload, Button } from './styles'

export function ModalCreateUnit({ isOpen, onRequestClose }) {
  const [fileName, setFileName] = useState(null)

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: '50vh',
      width: '40%',
      padding: '0',
      background: '#dadbf5'
    }
  }

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome da unidade.'),
    address: Yup.string().required('Digite o endereço da unidade.'),
    file: Yup.mixed().test('required', 'Carregue uma imagem', value => {
      return value?.length > 0
    })
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
    unitDataFormData.append('file', data.file[0])

    try {
      await api.post('unit/', unitDataFormData)
      toast.success('Unidade criada.')
    } catch (err) {
      console.log(err)
      toast.error('Falha no sistema tente novamente!')
    }
    onRequestClose()
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
          <h2>Criar Unidade</h2>
          <div>
            <Label>Name</Label>
            <Input
              type="text"
              {...register('name')}
              error={errors.name?.message}
            />
            <ErrorMessage>{errors.name?.message}</ErrorMessage>
          </div>
          <div>
            <Label>Endereço</Label>
            <Input
              type="text"
              {...register('address')}
              error={errors.address?.message}
            />
            <ErrorMessage>{errors.address?.message}</ErrorMessage>
          </div>

          <LabelUpload>
            {fileName || (
              <>
                <MdUploadFile />
                Carregue a imagem
              </>
            )}

            <input
              {...register('file')}
              type="file"
              accept="image/png, image/jpeg"
              onChange={value => setFileName(value.target.files[0]?.name)}
            />
          </LabelUpload>
          <ErrorMessage>{errors.file?.message}</ErrorMessage>

          <Button>Criar</Button>
        </form>
      </Container>
    </Modal>
  )
}

ModalCreateUnit.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func
}