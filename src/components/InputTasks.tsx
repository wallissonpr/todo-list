import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import styles from './InputTasks.module.css'

interface Props {
  onAddTask: (taskContent: string) => void;
}

export function InputTasks({ onAddTask }: Props) {

  const [content, setContent] = useState('')

  function handleNewTask(event: FormEvent) {
    event.preventDefault();

    onAddTask(content);
    setContent('');
  }

  function handleNewTaskChange(event:ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setContent(event.target.value);
  }
  
  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity('Este Campo é Obrigatório');
  }

  const isNewTaskTextEmpty = content.length === 0

  return (
    <main className={styles.inputTasks}>
      <form className={styles.formTasks} onSubmit={handleNewTask}>
        <input 
        placeholder="Adicione uma nova tarefa" 
        onChange={handleNewTaskChange}
        value={content}
        onInvalid={handleNewTaskInvalid}
        required
        />
        <button type='submit' disabled = {isNewTaskTextEmpty} >Criar <PlusCircle size={20}/></button>
      </form>
  </main>
  )
}