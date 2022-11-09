import {
  Aside,
  Background,
  Card,
  Comment,
  Comments,
  CommentsTitle,
  Container,
  Description,
  Galery,
  Main,
  ProductCover,
  ProductDetail,
  UserInfo,
} from "./style";
import { useVeicules } from "../../providers/veicules";
import { useEffect } from "react";
import { format } from "../../utils/formatter";
import { Button } from "../../components/Button";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { getVeicule, selectedVeicule } = useVeicules();
  const { product_id } = useParams();

  useEffect(() => {
    getVeicule(product_id);
  }, []);

  return (
    <Background>
      <div className="blue-cover"></div>
      <Container>
        <Main>
          <Card>
            {/*Imagem meramente ilustraiva e temporária */}
            <ProductCover
              src="https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2021-cruze-premier/colorizer/01-images/colorizer-cinza-satin-steel.jpg?imwidth=960"
              alt="product"
            />
          </Card>
          <ProductDetail>
            <h2>{selectedVeicule.title}</h2>
            {/* <div className="details-wrapper"> */}
            <div className="tags-wrapper">
              <span> {selectedVeicule.year} </span>
              <span> {selectedVeicule.km} KM</span>
            </div>
            <span className="value">{format(selectedVeicule.value)}</span>
            {/* </div> */}
            <Button backGround="var(--brand-1)" textColor="var(--whiteFixed)">
              Comprar
            </Button>
          </ProductDetail>
          <Description>
            <h3>Descrição</h3>
            <p>{selectedVeicule.description}</p>
          </Description>
        </Main>
        <Aside>
          <Galery>
            <h3>Fotos</h3>
            <div>
              <figcaption>
                <img
                  src="https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2021-cruze-premier/colorizer/01-images/colorizer-cinza-satin-steel.jpg"
                  alt="icon"
                />
              </figcaption>
              <figcaption>
                <img
                  src="https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2021-cruze-premier/colorizer/01-images/colorizer-cinza-satin-steel.jpg"
                  alt="icon"
                />
              </figcaption>
              <figcaption>
                <img
                  src="https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2021-cruze-premier/colorizer/01-images/colorizer-cinza-satin-steel.jpg"
                  alt="icon"
                />
              </figcaption>
              <figcaption>
                <img
                  src="https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2021-cruze-premier/colorizer/01-images/colorizer-cinza-satin-steel.jpg"
                  alt="icon"
                />
              </figcaption>
              <figcaption>
                <img
                  src="https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2021-cruze-premier/colorizer/01-images/colorizer-cinza-satin-steel.jpg"
                  alt="icon"
                />
              </figcaption>
              <figcaption>
                <img
                  src="https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2021-cruze-premier/colorizer/01-images/colorizer-cinza-satin-steel.jpg"
                  alt="icon"
                />
              </figcaption>
            </div>
          </Galery>
          <UserInfo>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt=""
            />
            <h4>Nome do Usuario</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores assumenda perferendis, qui aperiam quas cum. Ad,
              incidunt praesentium sunt facere voluptas similique cum deserunt
              vitae ratione vel dolor, ducimus ab.
            </p>
            <Button backGround="var(--brand-1)" textColor="var(--whiteFixed)">
              Ver todos os anúncios
            </Button>
          </UserInfo>
        </Aside>
        <Comments>
          <CommentsTitle>Comentários</CommentsTitle>
          <Comment>
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="icon"
              />
              <h6>Nome do usuario</h6>
              <div className="grey-dot"></div>
              <span>Há n dias</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              beatae neque eum soluta illum saepe, rem velit. Cum, in, pariatur,
              optio eum voluptatum fuga repellendus eos unde animi voluptates
              voluptas.
            </p>
          </Comment>
          <Comment>
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="icon"
              />
              <h6>Nome do usuario</h6>
            </div>
            <div>
              <textarea></textarea>
              <button>Comentar</button>
            </div>
            <div>
              <span>Opção 1</span>
              <span>Opção 2</span>
              <span>Opção 3</span>
            </div>
          </Comment>
        </Comments>
      </Container>
    </Background>
  );
};

export default ProductDetails;
