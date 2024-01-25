import ReactSelect from 'react-select'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 10% 0;

  form {
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
export const ReactSelectStyle = styled(ReactSelect)`
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  .css-13cymwt-control {
    cursor: pointer;
  }
`
export const Carousel = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 120px;
  grid-auto-columns: 120px;
  grid-template-rows: 100px;
  gap: 7px;

  @media screen and (max-width: 768px) {
    grid-auto-flow: row;
    grid-template-columns: 250px;
    grid-template-rows: 150px;
    grid-auto-rows: 150px;
  }
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
  min-height: 80px;

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
