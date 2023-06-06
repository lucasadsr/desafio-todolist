import styles from './NewTaskForm.module.css'
import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Task } from '../../App'
import { v4 as uuidv4 } from 'uuid';

interface NewTaskFormProps {
  handleNewTask: (task: Task) => void
}

export function NewTaskForm({ handleNewTask }: NewTaskFormProps) {
  const [newTaskText, setNewTaskText] = useState('')

  function handleNewTaskText(e: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(e.target.value)
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const newTask: Task = {
      id: uuidv4(),
      description: newTaskText,
      isCompleted: false,
    }

    setNewTaskText('')

    handleNewTask(newTask)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        required
        value={newTaskText}
        onChange={handleNewTaskText}
      />
      <button type='submit'>
        Criar
        <PlusCircle size={22} />
      </button>
    </form>
  )
}