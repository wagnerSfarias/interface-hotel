import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'

import { ModalCreateUnit, ModalEditUnit } from '../../../components'
import api from '../../../service/api'
import { Container, ButtonAdd, ImgUnit, EditIcon } from './styles'

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
    } catch (err) {}
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

  function editProduct(product) {
    setDetail(product)
    setEditModal(true)
  }

  return (
    <>
      <ButtonAdd onClick={openModalCreate}>Adicionar nova unidade</ButtonAdd>
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
                units.map(product => (
                  <TableRow
                    key={product.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {product.name}
                    </TableCell>
                    <TableCell>{product.address}</TableCell>
                    <TableCell>
                      <ImgUnit src={product.url} alt="imagem-unidade" />
                    </TableCell>
                    <TableCell>
                      <EditIcon onClick={() => editProduct(product)} />
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
