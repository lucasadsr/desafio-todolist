import styles from './NewTaskForm.module.css'
import { PlusCircle } from 'phosphor-react'

export function NewTaskForm() {
  return (
    <form className={styles.form}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        required
      />
      <button type='submit'>
        Criar
        <PlusCircle size={22} />
      </button>
    </form>
  )
}