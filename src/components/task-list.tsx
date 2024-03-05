import React from 'react'
import { useTypedSelector } from '../hooks/use-typed-selector'
import { List } from '@mui/material'
import { TaskListItem } from './task-list-item'

export const TaskList = () => {
  const { tasks, filter, searchTerm } = useTypedSelector((state) => state.tasks)

  const filteredTasks = tasks.filter((task) => {
    const matchesFilter =
      filter === 'all' ||
      (filter === 'completed' && task.completed) ||
      (filter === 'current' && !task.completed)

    const matchesSearchTerm = task.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearchTerm
  })

  return (
    <>
      <List dense sx={{ maxHeight: 400, overflowY: 'auto', mt: 4 }}>
        {filteredTasks.map((task, idx) => (
          <TaskListItem key={task.id + idx} {...task} />
        ))}
      </List>
    </>
  )
}
