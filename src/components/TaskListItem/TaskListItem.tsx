import React from 'react'
import { IconButton, ListItem, Stack, Tooltip, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import InfoRoundedIcon from '@mui/icons-material/InfoRounded'
import { useStyles } from './TaskListItem.styles'
import useActions from '../../hooks/useActions'
import { Task } from '../../types/task.interface'

export const TaskListItem = ({ name, id, createdAt, completed }: Task) => {
  const { toggleTask, deleteTask } = useActions()
  const styles = useStyles({ isCompleted: completed })

  const handleToggle = (id: number) => {
    toggleTask({ id })
  }

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }
    const formattedDate = date.toLocaleDateString('en-US', options)
    return formattedDate
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
