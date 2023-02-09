import { useState } from 'react';
import styles from '/src/App.module.css'
import { Header } from './components/Header';
import './global.css'
import { InputTasks } from './components/InputTasks';
import { TaskHeader } from './components/TasksHeader';
import { v4 as uuid } from 'uuid';


export interface ITasks {
  id: string;
  content: string;
  isCompleted: boolean;
}

export function App() {

  const [tasks, setTasks] = useState<ITasks[]>([]);

  function addTask(taskContent: string) {
    setTasks([...tasks, {
      id: uuid(),
      content: taskContent,
      isCompleted: false
    }]);
  }

  function deleteTasksById(taskId: string) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  }

  function handleChecked(taskId: string) {
    const newTasks = [...tasks]
    newTasks.forEach(task => {
      if (task.id === taskId) {
        task.isCompleted = !task.isCompleted;
      }
    });
    setTasks(newTasks);
  }

  return (
    <div >
      <Header />
      <div className={styles.wrapper}>
        <header>
          <InputTasks onAddTask={addTask}/>
        </header>

        <main>
          <TaskHeader tasks={tasks} onDeleteTasks={deleteTasksById} handleChecked={handleChecked}/>
        </main>

      </div>


    </div>
  )
}
