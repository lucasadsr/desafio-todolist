import styles from './App.module.css'
import { Header } from './components/Header'
import { NewTaskForm } from './components/NewTaskForm'
import { TaskList } from './components/TaskList';
import { useState } from 'react'
import './global.css'

export interface Task {
  id: string;
  description: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  function handleNewTask(task: Task) {
    setTasks(prevTasks => [...prevTasks, task])
  }

  function handleToggleStatus(taskId: string) {
    setTasks(tasks.map(task => (
      taskId === task.id ? { ...task, isCompleted: !task.isCompleted } : task
    )))
  }

  function handleDeleteTask(taskId: string) {
    setTasks(tasks.filter(task => (
      taskId !== task.id
    )))
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <NewTaskForm handleNewTask={handleNewTask} />
        <TaskList
          tasks={tasks}
          handleToggleStatus={handleToggleStatus}
          handleDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  )
}

export default App
