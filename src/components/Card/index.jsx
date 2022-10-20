import { Container } from "./styles";

import Button from "../Button";
function Card({onClick }) {
  return (
    <Container>
      <span>
      </span>
      <hr />
      <span>
      </span>
      <Button onClick={onClick}>Concluir</Button>
    </Container>
  );
}
export default Card;