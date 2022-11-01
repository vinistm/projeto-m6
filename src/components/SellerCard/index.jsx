import { Container, MainContainer} from "./style";

function SellerCard() {
  return (
    <MainContainer>
      <Container>
        <div className="card-container">
          <div className="seller-info">
            <p>Samuel Leão</p>
            <p>anunciante</p>
          </div>
          <div className="description">
            <p>Lorem Ipsum</p>
          </div>
          <button> Criar anúncio</button>
        </div>
      </Container>
    </MainContainer>
  );
}
export default SellerCard;
