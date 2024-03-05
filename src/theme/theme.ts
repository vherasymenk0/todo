import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#3B71CA',
    },
    secondary: {
      main: '#4F4F4F',
    },
    error: {
      main: '#DC4C64',
    },
    // eslint-disable-next-line id-blacklist
    info: {
      main: '#54B4D3',
    },
    grey: {
      '600': '#757575',
    },
    success: {
      main: '#2AB18D',
    },
  },
})
