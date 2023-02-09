import { Trash } from 'phosphor-react';
import { ITasks } from '../App';
import styles from './Tasks.module.css'

interface Props{
  task: ITasks;
  onDeleteTasks: (taskId: string) => void;
  handleChecked: (taskId:string) => void
}

export function Tasks({task, onDeleteTasks, handleChecked}: Props) {
  return (
    <div className={`${task.isCompleted ? styles.taskWrapperChecked : styles.taskWrapper}`}>
      
      <div className={styles.taskBox}>
        <input 
        type="checkbox" 
        checked={task.isCompleted} 
        onChange={() => handleChecked(task.id)}
        />

        <p>
          {task.content}
        </p>
        
        <button onClick={() => onDeleteTasks(task.id)}><Trash /></button>
      </div>

    </div>
  )
}