import { Card, Container, Main } from "./style";
import { useVeicules } from "../../providers/veicules";
import { useEffect } from "react";

const ProductDetails = () => {
  const { getVeicule, selectedVeicule } = useVeicules();

  useEffect(() => {
    getVeicule(1);
  }, []);

  return (
    <Container>
      <Main>
        <Card>
          {/*Imagem meramente ilustraiva e temporária */}
          <img
            src="https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2021-cruze-premier/colorizer/01-images/colorizer-cinza-satin-steel.jpg?imwidth=960"
            alt="product"
          />
        </Card>
        <Card>
          <h2>{selectedVeicule.title}</h2>
          <div>
            <span></span>
            <span></span>
            <button>Comprar</button>
          </div>
          <span></span>
        </Card>
        <Card>
          <h3>Descrição</h3>
          <p>{selectedVeicule.description}</p>
        </Card>
      </Main>
      <aside>
        <Card>
          <h3>Fotos</h3>
          <div>
            <img src="" alt="icon" />
            <img src="" alt="icon" />
            <img src="" alt="icon" />
            <img src="" alt="icon" />
            <img src="" alt="icon" />
            <img src="" alt="icon" />
          </div>
        </Card>
        <Card>
          <img src="" alt="" />
          <h4>Nome do Usuario</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            assumenda perferendis, qui aperiam quas cum. Ad, incidunt
            praesentium sunt facere voluptas similique cum deserunt vitae
            ratione vel dolor, ducimus ab.
          </p>
          <button>Ver todos os anúncios</button>
        </Card>
      </aside>
      <section>
        <Card>
          <h3>Comentários</h3>
          <div>
            <div>
              <img src="" alt="icon" />
              <h6>Nome do usuario</h6>
              <span>Há n dias</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              beatae neque eum soluta illum saepe, rem velit. Cum, in, pariatur,
              optio eum voluptatum fuga repellendus eos unde animi voluptates
              voluptas.
            </p>
          </div>
        </Card>
        <Card>
          <div>
            <img src="" alt="icon" />
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
        </Card>
      </section>
    </Container>
  );
};

export default ProductDetails;
