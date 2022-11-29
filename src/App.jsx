import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { NewTask } from './components/NewTask'


export function App() {

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <NewTask />
      </main>

    </>
  )
}


