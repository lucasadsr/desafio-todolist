import { Task } from '../Task'
import styles from './TaskList.module.css'

export function TaskList() {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.item}>
          <p className={styles.createdTasks}>Tarefas Criadas</p>
          <span className={styles.number}>0</span>
        </div>
        <div className={styles.item}>
          <p className={styles.completedTasks}>Concluídas</p>
          <span className={styles.number}>0</span>
        </div>
      </div>

      {/* Tasks */}
      <Task />
    </section>
  )
}