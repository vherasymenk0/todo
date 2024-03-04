import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TasksState } from '../../types/task.interface'

const initialState: TasksState = {
  tasks: [],
  filter: 'all',
  searchTerm: '',
  sort: 'current',
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ name: string }>) => {
      const newTask = {
        id: Date.now(),
        name: action.payload.name,
        completed: false,
      }
      state.tasks.push(newTask)
    },
    toggleTask: (state, action: PayloadAction<{ id: number }>) => {
      const task = state.tasks.find((task) => task.id === action.payload.id)
      if (task) {
        task.completed = !task.completed
      }
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload
    },
    setSort: (state, action: PayloadAction<'current' | 'completed'>) => {
      state.sort = action.payload
    },
  },
})

export const { reducer: taskReducer, actions: taskActions } = tasksSlice
