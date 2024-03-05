import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import React from 'react'
import { useTypedSelector } from '../hooks/use-typed-selector'

export const TaskStatistics = () => {
  const { tasks } = useTypedSelector((state) => state.tasks)
  const completedTasks = tasks.filter((task) => task.completed).length
  const uncompletedTasks = tasks.length - completedTasks

  return (
    <Box display="inline-flex" gap={1}>
      <Typography variant="body2" color="secondary.main" mb={2}>
        Completed:{' '}
        <Typography variant="body2" color="success.main" display="inline-flex">
          <b>{completedTasks}</b>
        </Typography>
      </Typography>
      <Typography variant="body2" color="secondary.main" mb={2}>
        | Uncompleted: <b>{uncompletedTasks}</b>
      </Typography>
    </Box>
  )
}
