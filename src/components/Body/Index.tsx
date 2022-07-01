import { Container, Input } from "./styles";

export function Body() {
  return (
    <Container>
      <Input type="text" placeholder="Adicione uma nova tarefa"/>
      <button>Criar</button>
    </Container>
  )
}