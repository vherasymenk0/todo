export interface Task {
  id: number
  name: string
  completed: boolean
  createdAt: Date
}

export type FilterType = 'current' | 'completed' | 'all'

export interface TasksState {
  tasks: Task[]
  filter: FilterType
  searchTerm: string
}
