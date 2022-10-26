import { Trash, CheckCircle } from "phosphor-react";
import { useState } from "react";
import styles from './Task.module.css'

export function Task({ content, onDeleteTask, onClick }) {
  const [taskCompleted, setTaskCompleted] = useState(false)

  const [tasksCompleted, setTasksCompleted] = useState([])

  function handleTaskCompleted(e) {
    setTaskCompleted(e.target.checked)
  }

  function handleDeleteTask() {
    onDeleteTask(content)
    handleTasksCompleted()
  }

  function handleTasksCompleted(e) {
    const listOfTasks = e.currentTarget.querySelectorAll('[name="checkbox"]')

    const countTasksCompleted = [...listOfTasks].filter(task => {
      return task.checked
    })

    setTasksCompleted(countTasksCompleted)

    onClick(tasksCompleted)
  }

  return (
    <article className={styles.article}>
      <input
        type="checkbox"
        onChange={handleTaskCompleted}
        name="checkbox"
      />

      <p className={taskCompleted ? styles.isCompleted : styles.notCompleted}>
        {content}
      </p>
      <button
        className={styles.trash}
        onClick={handleDeleteTask}
      >
        <Trash />
      </button>
    </article>
  )
}