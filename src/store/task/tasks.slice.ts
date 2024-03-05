import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilterType, TasksState } from '../../types/task.interface'

const initialState: TasksState = {
  tasks: [],
  filter: 'all',
  searchTerm: '',
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
        createdAt: new Date(),
      }
      state.tasks.push(newTask)
    },
    toggleTask: (state, action: PayloadAction<{ id: number }>) => {
      const task = state.tasks.find((taskItem) => taskItem.id === action.payload.id)
      if (task) {
        task.completed = !task.completed
      }
    },
    setFilter: (state, action: PayloadAction<FilterType>) => {
      state.filter = action.payload
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload
    },
    deleteTask: (state, action: PayloadAction<{ id: number }>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id)
    },
  },
})

export const { reducer: taskReducer, actions: taskActions } = tasksSlice
