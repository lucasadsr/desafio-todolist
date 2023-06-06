import styles from './App.module.css'
import { Header } from './components/Header'
import { NewTaskForm } from './components/NewTaskForm'
import { TaskList } from './components/TaskList';
import './global.css'

import { v4 as uuidv4 } from 'uuid';

const tasks = [
  {
    id: uuidv4(),
    description: "Beber água",
  },
  {
    id: uuidv4(),
    description: "Beber água",
  },
  {
    id: uuidv4(),
    description: "Beber água",
  },
]

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <NewTaskForm />
        <TaskList />
      </div>
    </div>
  )
}

export default App
