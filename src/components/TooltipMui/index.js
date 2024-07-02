import { styled } from '@mui/material/styles'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import PropTypes from 'prop-types'
import React from 'react'

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: '#305369'
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#305369',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    color: '#FFF',
    fontSize: 14
  }
}))

export function TooltipMui({ children, ...rest }) {
  return <LightTooltip {...rest}>{children}</LightTooltip>
}

TooltipMui.propTypes = {
  children: PropTypes.node
}
