import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import LoginImg from '../../assets/logo-login.png'
import { Button, ErrorMessage } from '../../components'
import paths from '../../constants/paths'
import { useUser } from '../../hooks/UserContext'
import api from '../../service/api'
import {
  Container,
  Form,
  ContainerItens,
  LoginImage,
  Logo,
  Label,
  Input,
  SignInlink,
  IconLoading
} from './styles'

export function Login() {
  const history = useHistory()
  const { putUserData } = useUser()

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter pelo menos 6 digítos')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onsubmit = async clientData => {
    toast.info('Verificando dados.', {
      icon: <IconLoading />,
      autoClose: 1500
    })
    try {
      const response = await api.post(
        '/sessions',
        {
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true }
      )

      if (response.status === 201 || response.status === 200) {
        toast.success('Seja bem-vindo(a)')
        putUserData(response.data)

        setTimeout(() => {
          if (response.data.admin) {
            history.push(paths.Reservations)
          } else {
            history.push('/')
          }
        }, 2000)
      } else if (response.status === 400) {
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
          <Logo src={LoginImg} alt="login-image" />
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
          <SignInlink>
            Não possui conta ?<Link to="/cadastro">Criar conta</Link>{' '}
          </SignInlink>
        </ContainerItens>
      </Form>
    </Container>
  )
}
