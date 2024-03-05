import React from 'react'
import { IconButton, ListItem, Stack, Tooltip, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import InfoRoundedIcon from '@mui/icons-material/InfoRounded'
import { useStyles } from './task-list-item.styles'
import useActionsTs from '../../hooks/use-actions.ts'
import { Task } from '../../types/task.interface'

export const TaskListItem = ({ name, id, createdAt, completed }: Task) => {
  const { toggleTask, deleteTask } = useActionsTs()
  const styles = useStyles({ isCompleted: completed })

  const handleToggle = (taskId: number) => {
    toggleTask({ id: taskId })
  }

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }
    return date.toLocaleDateString('en-US', options)
  }

  return (
    <ListItem sx={styles.root}>
      <Stack width="80%">
        <Typography onClick={() => handleToggle(id)} variant="h6" sx={styles.title}>
          {name}
        </Typography>
      </Stack>
      <Stack alignItems="flex-end">
        <Stack direction="row" gap={1}>
          <IconButton edge="end" color="error" size="small" onClick={() => deleteTask({ id })}>
            <DeleteIcon fontSize="medium" />
          </IconButton>
        </Stack>
        <Tooltip title="Created date" sx={styles.date} arrow>
          <Typography color="grey.600" onClick={() => handleToggle(id)}>
            <InfoRoundedIcon sx={{ width: 15 }} color="disabled" />
            {formatDate(new Date(createdAt))}
          </Typography>
        </Tooltip>
      </Stack>
    </ListItem>
  )
}
