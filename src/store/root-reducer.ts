import { combineReducers } from '@reduxjs/toolkit'
import { taskReducer } from './task/tasks.slice'

export const rootReducer = combineReducers({
  tasks: taskReducer,
})
