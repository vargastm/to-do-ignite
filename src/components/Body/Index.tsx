import { ClipboardText, PlusCircle } from "phosphor-react";
import { Container, Content } from "./styles";

export function Body() {
  return (
    <Container>
      <div>
        <input type="text" placeholder="Adicione uma nova tarefa"/>
        <button>Criar<PlusCircle size={16} /></button>
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
        <div>
          <ClipboardText size={72} />
          <span>Você ainda não tem tarefas cadastradas</span>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </Content>
    </Container>
  )
}