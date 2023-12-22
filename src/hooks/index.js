import PropTypes from 'prop-types'
import React from 'react'

import { MenuProvider } from './MenuContext'
import { UserProvider } from './UserContext'

const AppProvider = ({ children }) => (
  <UserProvider>
    <MenuProvider>{children}</MenuProvider>
  </UserProvider>
)

AppProvider.propTypes = {
  children: PropTypes.node
}

export default AppProvider
