import styled from 'styled-components'

export const ModalContentAdmin = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 80vh;
  width: 40%;
  background: #dadbf5;
  overflow-x: hidden;
  overflow-y: auto;

  @media screen and (max-width: 970px) {
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    width: 60%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`

export const Container = styled.div`
  width: 100%;
  height: 90%;
  padding: 15%;

  form {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    color: #305369;
    font-weight: 500;

    h2 {
      font-weight: 400;
      margin-bottom: 10px;
    }
  }

  @media screen and (max-width: 970px) {
    padding: 10% 0;

    h2 {
      font-size: 22px;
    }
  }
`
export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`
export const Label = styled.p``
export const Input = styled.input`
  height: 40px;
  background: #fff;
  border: none;
  border: ${props =>
    props.error || props.errorExist ? '1px solid #cc1717' : 'none'};
  width: 100%;
  padding-left: 10px;
  font-size: 16px;
  border-radius: 5px;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
`
export const LabelUpload = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #305369;
  border-radius: 5px;
  padding: 1px;
  font-size: 25px;
  width: 60%;
  min-height: 80px;
  height: 150px;

  &:hover {
    opacity: 0.8;
  }
  input {
    opacity: 0;
    width: 1px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }
`
export const Button = styled.button`
  width: 60%;
  border: none;
  height: 40px;
  background: #fe7569;
  cursor: pointer;
  color: #fff;
  font-size: 18px;
  border-radius: 5px;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`
