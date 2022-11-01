import { Container, MainContainer } from "./styles";

function Card({ imageUrl, title, description, anunciante, price, year, km }) {
  return (
    <MainContainer>
      <Container>
        <div className="card-image">
          <img src={imageUrl} alt="" />
        </div>
        <div className="card-container">
          <p>Título</p>
          <p>Descrição</p>
          <div className="anunciante">
            <p>Anunciante</p>
          </div>
          <div className="details">
            <p>km</p>
            <p>year</p>
            <p>price</p>
          </div>
        </div>
      </Container>
    </MainContainer>
  );
}
export default Card;
