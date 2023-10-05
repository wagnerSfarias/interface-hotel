import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { toast } from 'react-toastify'

import { ModalCreateBedroom, ButtonAdmin } from '../../../components'
import api from '../../../service/api'
import Row from './row'
import { Container } from './styles'

Modal.setAppElement('#root')

export default function EditBedroom() {
  const [bedrooms, setBedrooms] = useState([])
  const [rows, setRows] = useState([])
  const [createModal, setCreateModal] = useState(false)

  async function loadBedrooms() {
    try {
      const { data } = await api.get('/bedrooms')

      setBedrooms(data)
    } catch (err) {
      toast.error('Falha no sistema! Tente novamente. ')
    }
  }
  useEffect(() => {
    loadBedrooms()
  }, [])

  function createData(bedroom) {
    return {
      id: bedroom.id.toString(),
      name: bedroom.name,
      price: bedroom.price,
      qtd_people: bedroom.qtd_people,
      unit_name: bedroom.unidade.name,
      url: bedroom.url,
      url_l: bedroom.url_l,
      url_r: bedroom.url_r
    }
  }

  useEffect(() => {
    const newBedroom = bedrooms.map(bedroom => createData(bedroom))

    setRows(newBedroom)
  }, [bedrooms])

  function openModalCreate() {
    setCreateModal(true)
  }
  async function closeModal() {
    setCreateModal(false)

    loadBedrooms()
  }

  return (
    <>
      <ButtonAdmin onClick={openModalCreate} text="Adicionar novo quarto">
        Adicionar novo quarto
      </ButtonAdmin>
      <Container>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Quarto</TableCell>
                <TableCell>Preço</TableCell>
                <TableCell>Unidade</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <Row key={row.id} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      {createModal && (
        <ModalCreateBedroom isOpen={createModal} onRequestClose={closeModal} />
      )}
    </>
  )
}
