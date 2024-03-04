interface Task {
  id: number
  name: string
  completed: boolean
}

export interface TasksState {
  tasks: Task[]
  filter: string
  searchTerm: string
  sort: 'current' | 'completed'
}
