import { Container, MainContainer } from "./style";

function Card({ imageUrl, title, description, anunciante, price, year, km }) {
  return (
    <MainContainer>
      <Container>
        <div className="card-image">
          <img src={imageUrl} alt="" />
        </div>
        <div className="card-container">
          <p>{title}</p>
          <p>{description}</p>
          <div className="anunciante">
            <p>{anunciante}</p>
          </div>
          <div className="details">
            <p>{km}</p>
            <p>{year}</p>
            <p>{price}</p>
          </div>
        </div>
      </Container>
    </MainContainer>
  );
}
export default Card;
