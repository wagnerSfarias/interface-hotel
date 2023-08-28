import PropTypes from 'prop-types'
import React, { createContext, useContext, useState, useEffect } from 'react'
const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState()

  const putUserData = async data => {
    setUserData(data)
    await localStorage.setItem('userData:hotel', JSON.stringify(data))
  }

  const logout = async () => {
    await localStorage.removeItem('userData:hotel')
  }

  useEffect(() => {
    const loadUserData = async () => {
      const userInfo = await localStorage.getItem('userData:hotel')

      if (userInfo) {
        setUserData(JSON.parse(userInfo))
      }
    }
    loadUserData()
  }, [])

  return (
    <UserContext.Provider value={{ putUserData, userData, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used with UserContext')
  }
  return context
}

UserProvider.propTypes = {
  children: PropTypes.node
}
