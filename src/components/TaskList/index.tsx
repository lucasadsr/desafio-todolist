import styles from './TaskList.module.css'
import { Task as TaskInterface } from '../../App';
import { Task } from '../Task';

interface TaskListProps {
  tasks: TaskInterface[];
  handleToggleStatus: (taskId: string) => void;
  handleDeleteTask: (taskId: string) => void;
}

export function TaskList({ tasks, handleToggleStatus, handleDeleteTask }: TaskListProps) {
  const completedTasks = tasks.filter(task => task.isCompleted).length

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.item}>
          <p className={styles.createdTasks}>Tarefas Criadas</p>
          <span className={styles.number}>{tasks.length}</span>
        </div>
        <div className={styles.item}>
          <p className={styles.completedTasks}>Concluídas</p>
          <span className={styles.number}>{completedTasks}/{tasks.length}</span>
        </div>
      </div>

      <div className={styles.tasks}>
        {tasks.map(task => {
          return (
            <Task
              key={task.id}
              description={task.description}
              isCompleted={task.isCompleted}
              id={task.id}
              handleToggleStatus={handleToggleStatus}
              handleDeleteTask={handleDeleteTask}
            />
          )
        })}
      </div>
    </section>
  )
}