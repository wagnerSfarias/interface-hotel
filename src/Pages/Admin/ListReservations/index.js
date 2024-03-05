import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Empty } from '../../../components'
import { useUser } from '../../../hooks/UserContext'
import api from '../../../service/api'
import formatDate from '../../../utils/formatDate'
import { Container } from '../EditUnits/styles'
import Row from './row'

export default function ListReservations() {
  const [reservations, setReservations] = useState([])
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(true)
  const { logout } = useUser()
  const history = useHistory()

  useEffect(() => {
    async function loadReservations() {
      try {
        const response = await api.get('/reservations', {
          validateStatus: () => true
        })

        if (response.status === 200) {
          setTimeout(() => {
            setReservations(response.data)
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
        toast.error('Falha no sistema! Tente novamente.')
        setLoading(false)
      }
    }
    loadReservations()
  }, [logout, history])

  function createData(reservation) {
    const diffInMs =
      new Date(reservation.check_out) - new Date(reservation.check_in)
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24)

    return {
      id: reservation.id,
      name: reservation.user.name,
      bedroom: reservation.bedroom.name,
      checkIn: formatDate(reservation.check_in),
      checkOut: formatDate(reservation.check_out),
      address: reservation.bedroom.unidade.name,
      days: diffInDays === 0 ? 1 : diffInDays,
      price:
        diffInDays === 0
          ? reservation.bedroom.price
          : reservation.bedroom.price * diffInDays
    }
  }

  useEffect(() => {
    const newReservations = reservations.map(reservation =>
      createData(reservation)
    )

    setRows(newReservations)
  }, [reservations])

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>ID Reserva</TableCell>
              <TableCell>Hóspede</TableCell>
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
      {loading && <Empty isAdmin loading />}

      {!loading && rows.length === 0 && (
        <Empty isAdmin>Nenhum histórico de reservas foi encontrado.</Empty>
      )}
    </Container>
  )
}
