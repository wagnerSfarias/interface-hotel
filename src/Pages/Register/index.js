import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

import LoginImg from '../../assets/logo.png'
import Button from '../../components/Button'
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

export default function Register() {
  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório.'),
    email: Yup.string()
      .email('Digite um e-mail válido.')
      .required('O e-mail é obrigatório.'),
    password: Yup.string()
      .required('A senha é obrigatória.')
      .min(6, 'A senha dete ter pelo menos 6 digítos.'),
    confirmPassword: Yup.string()
      .required('A senha é obrigatória.')
      .oneOf([Yup.ref('password')], 'As senhas devem ser iguais.')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onsubmit = async clientData => console.log(clientData)

  return (
    <Container>
      <Form>
        <LoginImage src={LoginImg} alt="login-image" />
        <ContainerItens>
          <h1>Criar Conta</h1>
          <form noValidate onSubmit={handleSubmit(onsubmit)}>
            <Label>Nome</Label>
            <Input
              type="text"
              {...register('name')}
              error={errors.name?.message}
            />
            <ErrorMessage>{errors.name?.message}</ErrorMessage>

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

            <Label>Confirmar Senha</Label>
            <Input
              type="password"
              {...register('confirmPassword')}
              error={errors.confirmPassword?.message}
            />
            <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

            <Button type="submit">Criar</Button>
          </form>

          <SignInlink>Já possui conta ? Entrar</SignInlink>
        </ContainerItens>
      </Form>
    </Container>
  )
}
