import styles from './TaskList.module.css'
import { Task as TaskInterface } from '../../App';
import { Task } from '../Task';

interface TaskListProps {
  tasks: TaskInterface[];
  handleToggleStatus: (taskId: string) => void;
}

export function TaskList({ tasks, handleToggleStatus }: TaskListProps) {
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

      <div className={styles.tasks}>
        {tasks.map(task => {
          return (
            <Task key={task.id} description={task.description} isCompleted={task.isCompleted} id={task.id} handleToggleStatus={handleToggleStatus} />
          )
        })}
      </div>
    </section>
  )
}