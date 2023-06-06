import styles from './Task.module.css'
import { Trash } from 'phosphor-react'

export function Task() {
  return (
    <div className={styles.task}>
      <button className={styles.customRadio} value='' />
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <button className={styles.trashButton}>
        <Trash size={24} />
      </button>
    </div>
  )
}