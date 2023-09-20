import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 90%;
  padding: 0 15%;

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
`
export const Label = styled.p``
export const Input = styled.input`
  height: 40px;
  background: #fff;
  border: none;
  border: ${props => (props.error ? '1px solid #cc1717' : 'none')};
  width: 100%;
  min-width: 280px;
  padding-left: 10px;
  font-size: 16px;
  border-radius: 5px;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
`
export const LabelUpload = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 2px dashed #305369;
  border-radius: 5px;
  padding: 10px;
  width: 80%;

  input {
    opacity: 0;
    width: 1px;
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
