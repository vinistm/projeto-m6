import { Container } from "./style";

const ProductDetails = () => {
  return (
    <Container>
      <main>
        <img src="image.png" alt="product" />
        <div>
          <h2>Título do produto</h2>
          <div>
            <span></span>
            <span></span>
            <button>Comprar</button>
          </div>
          <span></span>
        </div>
        <div>
          <h3>Descrição</h3>
          <p></p>
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
      </main>
      <aside>
        <div>
          <h3>Fotos</h3>
          <div>
            <img src="" alt="icon" />
            <img src="" alt="icon" />
            <img src="" alt="icon" />
            <img src="" alt="icon" />
            <img src="" alt="icon" />
            <img src="" alt="icon" />
          </div>
        </div>
        <div>
          <img src="" alt="" />
          <h4>Nome do Usuario</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            assumenda perferendis, qui aperiam quas cum. Ad, incidunt
            praesentium sunt facere voluptas similique cum deserunt vitae
            ratione vel dolor, ducimus ab.
          </p>
          <button>Ver todos os anúncios</button>
        </div>
      </aside>
    </Container>
  );
};

export default ProductDetails;
