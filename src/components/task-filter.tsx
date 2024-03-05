import React from 'react'
import useActionsTs from '../hooks/use-actions.ts'
import { useTypedSelector } from '../hooks/use-typed-selector'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { FilterType } from '../types/task.interface'

export const TaskFilter = () => {
  const { setFilter } = useActionsTs()
  const { filter } = useTypedSelector((state) => state.tasks)

  const handleAlignment = (__: React.MouseEvent<HTMLElement>, newFilter: FilterType) => {
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
