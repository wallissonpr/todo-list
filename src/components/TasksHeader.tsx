import { ClipboardText } from 'phosphor-react'
import { ITasks } from '../App'
import { Tasks } from './Tasks'
import styles from './TasksHeader.module.css'

interface Props {
  tasks: ITasks[]
  onDeleteTasks: (taskId:string) => void
  handleChecked: (taskId:string) => void
}

export function TaskHeader({tasks, onDeleteTasks, handleChecked}: Props) {
  const createdTasks = tasks.length
  const finishedTasks = tasks.filter(tasks => tasks.isCompleted).length

  return (
    <div className={styles.taskHeaderWrapper}>
      <header>
        <div className={styles.createdTaskHeader}>
          <p>Tarefas criadas</p><strong>{createdTasks}</strong>
        </div>

        <div className={styles.finishedTaskHeader}>
          <p>Concluídas</p><strong>{finishedTasks} de {createdTasks}</strong>
        </div>
      </header>


      <main>
        {createdTasks === 0 && (
          <section className={styles.emptyTasks}>
            <ClipboardText size={56}/>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </section>
        )}

        {tasks.map((tasks) => 
          <Tasks key={tasks.id} task={tasks} onDeleteTasks={onDeleteTasks} handleChecked={handleChecked}/>
        )}
      </main>
    </div>
  )
}