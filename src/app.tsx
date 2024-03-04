import * as React from 'react'
import { CssBaseline, ThemeProvider, Typography } from '@mui/material'
import { theme } from './theme'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography>Todo app</Typography>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
