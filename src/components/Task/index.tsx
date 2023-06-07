import { Task as TaskInterface } from '../../App'
import styles from './Task.module.css'
import { Trash } from 'phosphor-react'

interface TaskProps extends TaskInterface {
  handleToggleStatus: (taskId: string) => void;
}

export function Task({ isCompleted, description, id, handleToggleStatus }: TaskProps) {
  return (
    <div className={styles.task}>
      <div className={styles.wrapper}>
        <button
          className={`${styles.customRadio} ${isCompleted ? styles.completed : ''}`}
          onClick={() => handleToggleStatus(id)}
        />
        <p className={`${isCompleted ? styles.completed : ''}`}>{description}</p>
      </div>
      <button className={styles.trashButton}>
        <Trash size={24} />
      </button>
    </div>
  )
}