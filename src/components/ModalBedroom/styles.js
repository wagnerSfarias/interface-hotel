import Carousel from 'react-elastic-carousel'
import styled from 'styled-components'

import 'react-date-picker/dist/DatePicker.css'
import 'react-calendar/dist/Calendar.css'

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 90vh;
  overflow: auto;
  width: 60%;
  background: #fff;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
  @media screen and (max-width: 480px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  background-color: #305369;

  p {
    text-align: center;
    width: 80%;
    color: #fff;
    font-size: 20px;
  }
`
export const Back = styled.button`
  margin: 1% 2%;
  background-color: transparent;
  color: #fff;
  font-size: 30px;
  display: flex;
  align-items: center;
  border: 0;
  cursor: pointer;
`
export const ContainerCarousel = styled(Carousel)`
  width: 100%;
  max-height: 450px;
  height: 100%;

  @media screen and (max-width: 768px) {
    max-height: 400px;
  }

  .rec-carousel {
    margin: 0;
    position: relative;
  }
  .rec-slider-container {
    position: absolute;
    margin: 0;
    height: 100%;
  }
  .rec-arrow-left {
    position: absolute;
    left: 2%;
    color: red;
    z-index: 99;
  }
  .rec-arrow-right {
    position: absolute;
    right: 2%;
    color: red;
  }
  .rec.rec-arrow {
    background-color: #fe7569;
    color: #efefef;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border: none;
  }
  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }

  .rec-dot_active {
    background-color: #fe7569;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 1px 3px;
    width: 12px;
    height: 12px;
  }
`
export const Image = styled.img`
  width: 100%;
  max-height: 350px;
  height: 100%;

  @media screen and (max-width: 970px) {
    max-height: 290px;
  }
  @media screen and (max-width: 768px) {
    max-height: 260px;
  }
`
export const ContainerDates = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 2% 0;

  .react-date-picker__wrapper {
    border: none;
    border-bottom: 2px solid #305369;
    padding: 5px 10px;
    color: #305369;
  }
  .react-calendar__navigation__label {
    background-color: #305369;
    color: #fff;
  }
  .react-calendar__tile--active {
    background-color: #305369;
  }
`
export const Calendar = styled.div`
  p {
    margin: 5px 0;
    color: #305369;
    font-weight: 500;
    font-size: 20px;
    text-align: center;
  }
  @media screen and (max-width: 480px) {
    p {
      font-size: 18px;
    }
  }
`
export const Warn = styled.p`
  margin: 2%;
  color: #305369;
  font-weight: 500;

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`
export const WarnCancel = styled.p`
  margin: 2%;
  color: #305369;
  font-weight: 500;
  text-align: end;
  font-size: 14px;
`
export const Reservation = styled.button`
  width: 30%;
  height: 50px;
  background: #fe7569;
  border-radius: 10px;
  border: none;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  color: #fff;
  font-size: 18px;
  margin: 0 35%;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }

  @media screen and (max-width: 768px) {
    &:hover {
      opacity: 1;
    }
  }
`
