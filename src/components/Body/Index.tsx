import { ClipboardText, PlusCircle, Trash } from "phosphor-react"
import { useState } from "react"
import { Container, Content } from "./styles"

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function Body() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  
  function handleCreateNewTask() {
    if (!newTaskTitle) return
    
    const newTask = {
      id: Math.random(),
      title: newTaskTitle,
      isComplete: false
    }

    setTasks(oldState => [...oldState, newTask])
    setNewTaskTitle('')
  }

  function handleToggleTaskCompletion(id: number) {
    const newTasks = tasks.map(task => task.id === id ? {
      ...task,
      isComplete: !task.isComplete
    } : task)

    setTasks(newTasks)
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter(task => task.id !== id)
    setTasks(filteredTasks)
  }

  return (
    <Container>
      <div>
        <input 
          type="text" 
          placeholder="Adicione uma nova tarefa"
          onChange={(e) => setNewTaskTitle(e.target.value)}
          value={newTaskTitle}
        />
        <button onClick={handleCreateNewTask}>Criar<PlusCircle size={16} /></button>
      </div>
      <Content>
        <header>
          <div>
            Tarefas Criadas
            <span>0</span>
          </div>
          <div>
            Concluidas
            <span>0</span>
          </div>
        </header>

        {tasks.length <= 0 ? (
          <div>
            <ClipboardText size={72} />
            <span>Você ainda não tem tarefas cadastradas</span>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
          ) : (
          <ul>
            {tasks.map(task => (
              <li key={task.id}>
                <div className={task.isComplete ? 'completed' : ''} data-testid="task" >
                  <label className="checkbox-container">
                    <input 
                      type="checkbox"
                      readOnly
                      checked={task.isComplete}
                      onClick={() => handleToggleTaskCompletion(task.id)}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <p>{task.title}</p>
                </div>

                <button type="button" data-testid="remove-task-button" onClick={() => handleRemoveTask(task.id)}>
                  <Trash size={16}/>
                </button>
              </li>
            ))}
          </ul>
        )}
      </Content>
    </Container>
  )
}