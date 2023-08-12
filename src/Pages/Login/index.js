import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import LoginImg from '../../assets/logo.png'
import Button from '../../components/Button'
import api from '../../service/api'
import {
  Container,
  Form,
  ContainerItens,
  LoginImage,
  Label,
  Input,
  SignInlink,
  ErrorMessage
} from './styles'

export default function Login() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha dete ter pelo menos 6 digítos')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onsubmit = async clientData => {
    try {
      const { status } = await api.post(
        '/sessions',
        {
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true }
      )

      if (status === 201 || status === 200) {
        toast.success('Seja bem-vindo(a)')
      } else if (status === 400) {
        toast.error('Verifique se seu e-mail ou senha estão corretos. ')
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Falha no sistema! Tente novamente. ')
    }
  }

  return (
    <Container>
      <Form>
        <LoginImage src={LoginImg} alt="login-image" />
        <ContainerItens>
          <h1>Login</h1>
          <form noValidate onSubmit={handleSubmit(onsubmit)}>
            <Label>Email</Label>
            <Input
              type="email"
              {...register('email')}
              error={errors.email?.message}
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>

            <Label>Senha</Label>
            <Input
              type="password"
              {...register('password')}
              error={errors.password?.message}
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>

            <Button type="submit">Logar</Button>
          </form>

          <SignInlink>Não possui conta ? Criar conta</SignInlink>
        </ContainerItens>
      </Form>
    </Container>
  )
}
