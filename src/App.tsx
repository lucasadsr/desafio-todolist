import styles from './App.module.css'
import { Header } from './components/Header'
import { NewTaskForm } from './components/NewTaskForm'
import './global.css'

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <NewTaskForm />
      </div>
    </div>
  )
}

export default App
