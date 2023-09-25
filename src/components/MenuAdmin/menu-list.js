import { FaCalendarCheck, FaHotel, FaBed } from 'react-icons/fa'

import paths from '../../constants/paths'

const listOptions = [
  {
    id: 1,
    label: 'Reservas',
    link: paths.Reservations,
    icon: FaCalendarCheck
  },
  {
    id: 2,
    label: 'Unidades',
    link: paths.EditUnits,
    icon: FaHotel
  },
  {
    id: 3,
    label: 'Quartos',
    link: paths.EditBedroom,
    icon: FaBed
  }
]

export default listOptions
