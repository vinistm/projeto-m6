import styled from "styled-components";

export const Container = styled.div`
  /* background: linear-gradient(blue white); */
  background-color: var(--grey-7);
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`;

export const Main = styled.main`
  margin-top: 5%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
  }
`;
export const Aside = styled.aside`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Comments = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductCover = styled.img`
  width: 100%;
  margin: 10% 0;
`;

export const Card = styled.div`
  width: 95%;
  min-height: 355px;
  padding: 28px;
  margin-top: 3%;
  background-color: var(--whiteFixed);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 6px;

  h2,
  h3,
  h4 {
    color: var(--grey-1);
    font-weight: 600;
    font-family: "Lexend", sans-serif;
    font-size: 20px;
  }
`;

export const ProductDetail = styled(Card)`
  div {
    display: flex;
    align-items: center;

    span {
      background-color: var(--brand-4);
      color: var(--brand-1);

      font-weight: 600;
      font-size: 15px;
      font-family: "Inter", sans-serif;

      padding: 8px;
      margin-right: 10px;
      border-radius: 4px;
    }
  }

  span {
    color: var(--grey-1);
    font-weight: 600;
    font-size: 17px;
  }
`;

export const Description = styled(Card)`
  p {
    color: var(--grey-2);
    font-size: 16px;
    text-align: justify;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    line-height: 30px;
  }
`;

export const Galery = styled(Card)`
  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    align-content: space-around;

    height: 190px;
    figcaption {
      width: 30%;
      padding: 20px 10px;
      background-color: var(--grey-7);
      border-radius: 6px;
    }
    img {
      width: 100%;
    }
  }
`;

export const UserInfo = styled(Card)`
  align-items: center;

  p {
    color: var(--grey-2);
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    font-family: "Inter";
  }
`;
