import { api } from './api'

export const getTodos = async () => {
  const { data } = await api.get('/todos')
  return data
}

export const postTodo = async (todo) => {
  await api.post('/todos', todo)
}

export const updateTodo = async (id) => {
  await api.put(`/todos/${id}`, {complete: true})
}