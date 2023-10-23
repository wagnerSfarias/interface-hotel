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

import {
  ModalCreateUnit,
  ModalEditUnit,
  ButtonAdmin
} from '../../../components'
import api from '../../../service/api'
import { Container, ImgUnit, EditIcon } from './styles'

Modal.setAppElement('#root')

export default function EditUnits() {
  const [units, setUnits] = useState([])
  const [createModal, setCreateModal] = useState(false)
  const [detail, setDetail] = useState([])
  const [editModal, setEditModal] = useState(false)

  async function loadUnits() {
    try {
      const { data } = await api.get('/units')
      setUnits(data)
    } catch (err) {
      toast.error('Falha no sistema! Tente novamente. ')
    }
  }

  useEffect(() => {
    loadUnits()
  }, [])

  function openModalCreate() {
    setCreateModal(true)
  }

  async function closeModal() {
    setEditModal(false)
    setCreateModal(false)

    loadUnits()
  }

  function editUnit(detail) {
    setDetail(detail)
    setEditModal(true)
  }

  return (
    <>
      <ButtonAdmin onClick={openModalCreate} text="Adicionar nova unidade">
        Adicionar nova unidade
      </ButtonAdmin>
      <Container>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell>Endereço</TableCell>
                <TableCell>Imagem</TableCell>
                <TableCell>Editar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {units &&
                units.map(unit => (
                  <TableRow
                    key={unit.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {unit.name}
                    </TableCell>
                    <TableCell>{unit.address}</TableCell>
                    <TableCell>
                      <ImgUnit src={unit.url} alt="imagem-unidade" />
                    </TableCell>
                    <TableCell>
                      <EditIcon onClick={() => editUnit(unit)} />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        {createModal && (
          <ModalCreateUnit isOpen={createModal} onRequestClose={closeModal} />
        )}
        {editModal && (
          <ModalEditUnit
            isOpen={editModal}
            onRequestClose={closeModal}
            details={detail}
          />
        )}
      </Container>
    </>
  )
}
