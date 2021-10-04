import { useState, ChangeEvent, FormEvent } from 'react'
import { TaskItem } from './components/TaskItem'
import { addTask } from './slices/taskSlice'
import { useAppDispatch, useAppSelector } from './app/hook'

function App() {
  const tasks = useAppSelector((state) => state.tasks.tasks)
  const count = useAppSelector((state) => state.tasks.count)
  const dispatch = useAppDispatch()

  const [inputTitle, setInputTitle] = useState('')
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value)
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(addTask(inputTitle))
    setInputTitle('')
  }

  return (
    <>
      <p>count: {count}</p>
      <form onSubmit={handleSubmit}>
        <input value={inputTitle} onChange={handleChange} type="text" />
        <button type="submit">add</button>
      </form>
      {tasks.map((task) => (
        <TaskItem task={task} />
      ))}
    </>
  )
}

export default App
