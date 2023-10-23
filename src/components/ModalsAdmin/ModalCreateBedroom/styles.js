import ReactSelect from 'react-select'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 90%;

  form {
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
export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  div {
    display: flex;
    align-items: center;
    background: #fff;
    padding-left: 2%;
    border-radius: 5px;
    box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  }
`
export const Input = styled.input`
  height: 40px;
  background: #fff;
  border: none;
  border: ${props => (props.error ? '1px solid #cc1717' : 'none')};
  width: 100%;
  padding-left: 10px;
  font-size: 16px;
  border-radius: 5px;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
`
export const ReactSelectStyle = styled(ReactSelect)`
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  .css-13cymwt-control {
    cursor: pointer;
  }
`

export const Carousel = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 120px));
  grid-template-rows: 80px;
  gap: 2%;
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
