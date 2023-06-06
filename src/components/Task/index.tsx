import { Task as TaskInterface } from '../../App'
import styles from './Task.module.css'
import { Trash } from 'phosphor-react'

type TaskProps = TaskInterface

export function Task({ isCompleted, description, id }: TaskProps) {
  return (
    <div className={styles.task}>
      <div className={styles.wrapper}>
        <button className={`${styles.customRadio} ${isCompleted ? styles.completed : ''}`} />
        <p className={`${isCompleted ? styles.completed : ''}`}>{description}</p>
      </div>
      <button className={styles.trashButton}>
        <Trash size={24} />
      </button>
    </div>
  )
}