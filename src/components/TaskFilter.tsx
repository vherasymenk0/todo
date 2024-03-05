import React from 'react'
import useActions from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { FilterType } from '../types/task.interface'

export const TaskFilter = () => {
  const { setFilter } = useActions()
  const { filter } = useTypedSelector((state) => state.tasks)

  const handleAlignment = (_: React.MouseEvent<HTMLElement>, newFilter: FilterType) => {
    if (newFilter) setFilter(newFilter)
  }

  return (
    <>
      <ToggleButtonGroup
        value={filter}
        onChange={handleAlignment}
        exclusive
        fullWidth
        size="small"
        color="primary"
      >
        <ToggleButton value="all">All</ToggleButton>
        <ToggleButton value="completed">Completed</ToggleButton>
        <ToggleButton value="current">Current</ToggleButton>
      </ToggleButtonGroup>
    </>
  )
}
