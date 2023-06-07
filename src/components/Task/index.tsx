import { Task as TaskInterface } from '../../App'
import styles from './Task.module.css'
import { Trash } from 'phosphor-react'

interface TaskProps extends TaskInterface {
  handleToggleStatus: (taskId: string) => void;
  handleDeleteTask: (taskId: string) => void;
}

export function Task({ isCompleted, description, id, handleToggleStatus, handleDeleteTask }: TaskProps) {
  return (
    <div className={styles.task}>
      <div className={styles.wrapper}>
        <button
          className={`${styles.customRadio} ${isCompleted ? styles.completed : ''}`}
          onClick={() => handleToggleStatus(id)}
        />
        <p className={`${isCompleted ? styles.completed : ''}`}>{description}</p>
      </div>
      <button
        className={styles.trashButton}
        onClick={() => handleDeleteTask(id)}
      >
        <Trash size={24} />
      </button>
    </div>
  )
}