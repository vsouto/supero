import { createSelector } from 'reselect'

const getTasks = state => state.tasks

export const getAllTasks = createSelector(
  [getTasks],
  tasks => (
    tasks
  )
)
