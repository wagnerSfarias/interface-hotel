import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import {
  ModalCreateBedroom,
  ButtonAdmin,
  ModalEditBedroom,
  Empty
} from '../../../components'
import { useUser } from '../../../hooks/UserContext'
import api from '../../../service/api'
import Row from './row'
import { Container } from './styles'

export default function EditBedroom() {
  const [bedrooms, setBedrooms] = useState([])
  const [detail, setDetail] = useState([])
  const [rows, setRows] = useState([])
  const [editModal, setEditModal] = useState(false)
  const [createModal, setCreateModal] = useState(false)
  const [loading, setLoading] = useState(true)
  const { logout } = useUser()
  const history = useHistory()

  const loadBedrooms = useCallback(async () => {
    try {
      const response = await api.get('/bedrooms', {
        validateStatus: () => true
      })
      if (response.status === 200 || response.status === 201) {
        setTimeout(() => {
          setBedrooms(response.data)
          setLoading(false)
        }, 2000)
      } else if (response.status === 401) {
        logout()
        toast.error('Ocorreu um erro na sua autenticação! Tente novamente.')
        setTimeout(() => {
          history.push('/login')
        }, 2000)
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Falha no sistema! Tente novamente. ')
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadBedrooms()
  }, [loadBedrooms])

  function createData(bedroom) {
    return {
      id: bedroom.id.toString(),
      name: bedroom.name,
      price: bedroom.price,
      qtd_people: bedroom.qtd_people,
      unit_name: bedroom.unidade.name,
      images: [
        { url: bedroom.url },
        { url: bedroom.url_l },
        { url: bedroom.url_r }
      ],
      select: bedroom.unidade
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
    setEditModal(false)
    loadBedrooms()
  }
  function editBedroom(bedroom) {
    setDetail(bedroom)
    setEditModal(true)
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
                <Row key={row.id} row={row} edit={editBedroom} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {loading && <Empty loading isAdmin />}

        {!loading && bedrooms.length === 0 && (
          <Empty isAdmin>Nenhum quarto foi encontrado.</Empty>
        )}
      </Container>
      {createModal && (
        <ModalCreateBedroom isOpen={createModal} onRequestClose={closeModal} />
      )}
      {editModal && (
        <ModalEditBedroom
          isOpen={editModal}
          onRequestClose={closeModal}
          details={detail}
        />
      )}
    </>
  )
}
