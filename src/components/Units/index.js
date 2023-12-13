import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import api from '../../service/api'
import { SubTitle } from '../index'
import { ContainerUnits, Button } from './styles'

export function Units() {
  const [units, setUnits] = useState([])

  useEffect(() => {
    async function loadUnits() {
      try {
        const { data } = await api.get('/units')
        setUnits(data)
      } catch (err) {
        toast.error('Falha no sistema! Tente novamente. ')
      }
    }
    loadUnits()
  }, [])

  return (
    <>
      <SubTitle>Unidades</SubTitle>
      <ContainerUnits>
        {units &&
          units.map(unit => (
            <Button
              key={unit.id}
              to={{
                pathname: '/quartos',
                state: { unitId: unit.id, name: unit.name }
              }}
            >
              <img src={unit.url} alt={`imagem unidade ${unit.name}`} />
              <p>{unit.name}</p>
            </Button>
          ))}
      </ContainerUnits>
    </>
  )
}
