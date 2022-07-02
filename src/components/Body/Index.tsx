import { PlusCircle } from "phosphor-react";
import { Container } from "./styles";

export function Body() {
  return (
    <Container>
      <input type="text" placeholder="Adicione uma nova tarefa"/>
      <button>Criar<PlusCircle size={16} /></button>
    </Container>
  )
}