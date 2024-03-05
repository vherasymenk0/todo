import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import * as React from 'react'
import { Divider, Paper, Typography } from '@mui/material'
import { TaskInput } from '../components/task-input'
import { SearchBar } from '../components/search-bar'
import { TaskStatistics } from '../components/task-statistics'
import { TaskFilter } from '../components/task-filter'
import { TaskList } from '../components/task-list'

export const TodoView = () => {
  return (
    <Box
      component="main"
      display="flex"
      flexDirection="column"
      sx={{ backgroundColor: '#fff', height: '100vh' }}
    >
      <Container maxWidth="md" sx={{ my: 6 }}>
        <Typography color="primary.main" textAlign="center" variant="h3">
          My Todo-s
        </Typography>
        <Paper
          variant="outlined"
          sx={{
            backgroundColor: '#eff1f2',
            borderRadius: 2,
            padding: { xs: 3, md: 5 },
            mt: 4,
          }}
        >
          <SearchBar />
          <Divider variant="fullWidth" sx={{ my: 4 }} />
          <TaskStatistics />
          <TaskInput />
          <TaskFilter />
          <TaskList />
        </Paper>
      </Container>
    </Box>
  )
}
