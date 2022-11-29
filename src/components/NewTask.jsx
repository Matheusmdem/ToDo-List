import styles from './NewTask.module.css'
import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Task } from './Task'
import tasksEmpty from '../assets/Clipboard.svg'


export function NewTask() {
  const [tasks, setTasks] = useState(['Primeiro projeto ReactJS'])

  const [newTaskText, setNewTaskText] = useState('')

  const [tasksCompleted, setTasksCompleted] = useState([])

  function handleNewTask(e) {
    e.preventDefault()

    setTasks([...tasks, newTaskText])

    setNewTaskText('')
  }

  function handleNewTaskChange(e) {
    setNewTaskText(e.target.value)
  }

  function deleteTask(taskToDelete) {
    const taskDeleted = tasks.filter(task => {
      return task !== taskToDelete
    })

    setTasks(taskDeleted)

  }

  function handleTasksCompleted(e) {
    const listOfTasks = e.currentTarget.querySelectorAll('[name="checkbox"]')

    const countTasksCompleted = [...listOfTasks].filter(task => {
      return task.checked
    })

    setTasksCompleted(countTasksCompleted)
  }

  const isNewTaskEmpty = newTaskText.length === 0;

  return (
    <div>
      <form className={styles.form} onSubmit={handleNewTask}>
        <textarea
          className={styles.textarea}
          placeholder='Adicione uma nova tarefa'
          onChange={handleNewTaskChange}
          value={newTaskText}
          required
        />
        <button
          className={styles.button}
          type="submit"
          disabled={isNewTaskEmpty}
        >
          Criar
          <PlusCircle size={20} />
        </button>
      </form>

      <section>
        <header className={styles.header}>
          <strong className={styles.created}>
            Tarefas criadas
            <span className={styles.counter}>
              {tasks.length}
            </span>
          </strong>
          <strong className={styles.done}>
            Concluidas
            <span className={styles.counter}>
              <span>
                {tasksCompleted.length}
              </span>
              <span>
                de
              </span>
              <span>
                {tasks.length}
              </span>
            </span>
          </strong>
        </header>
        <div className={tasks.length === 0 ? styles.tasksEmpty : styles.tasksFull}>
          <img src={tasksEmpty} alt="Icone Tarefa Vazia" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>

        <div onChange={handleTasksCompleted}>
          {tasks.map(task => {
            return (
              <Task
                key={task}
                content={task}
                onDeleteTask={deleteTask}
                onClick={handleTasksCompleted}
              />
            )
          })}
        </div>
      </section>
    </div>

  )
}