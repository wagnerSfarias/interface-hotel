import { FaCircleNotch } from 'react-icons/fa'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`
export const IconLoading = styled(FaCircleNotch)`
  animation: ${rotate} 1s linear infinite;
  color: #3498db;
`
export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #7890f4;
`
export const Form = styled.div`
  display: flex;
  max-width: 80%;
  max-height: 90%;
`
export const LoginImage = styled.img`
  width: 60%;
  background: #fff;
  border-radius: 10px 0 0 10px;
`
export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #e8eefe;
  border-radius: 0 10px 10px 0;
  width: 40%;
  padding: 3% 2%;
  color: #fff;

  form {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
  }
  h1 {
    font-weight: 400;
    font-size: 28px;
    color: #7890f4;
    text-align: center;
    margin: 3% 0;
  }
`
export const Label = styled.p`
  font-weight: 500;
  line-height: 14px;
  color: #7890f4;
  margin: 15px 0 5px;
`
export const Input = styled.input`
  height: 38px;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border: ${props => (props.error ? '2px solid #cc1717' : 'none')};
  padding-left: 10px;
  font-size: 15px;
  color: #313131;
`
export const SignInlink = styled.p`
  font-weight: 300;
  text-align: end;
  line-height: 16px;
  color: #5052ff;
  font-size: 16px;

  a {
    cursor: pointer;
    text-decoration: none;
    margin-left: 10px;
    color: #5052ff;

    &:hover {
      color: #fe7569;
      text-decoration: underline;
    }
  }
`
