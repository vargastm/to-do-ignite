import { Container } from "./styles";

export function Body() {
  return (
    <Container>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>Criar</button>
    </Container>
  )
}