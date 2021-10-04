import { VFC } from 'react'
import { useAppDispatch } from '../app/hook'
import { deleteTask, doneTask } from '../slices/taskSlice'
import { Task } from '../types'

interface Props {
  task: Task
}

export const TaskItem: VFC<Props> = ({ task }) => {
  const dispatch = useAppDispatch()
  return (
    <div style={task.done ? { textDecoration: 'line-through' } : {}}>
      {task.id} {task.title}
      <button onClick={() => dispatch(doneTask(task))}>done</button>
      <button onClick={() => dispatch(deleteTask(task))}>delete</button>
    </div>
  )
}
