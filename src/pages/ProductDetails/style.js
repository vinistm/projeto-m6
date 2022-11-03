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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: 700px) {
  }
`;
export const Aside = styled.aside`
  width: 45%;
`;
export const ProductCover = styled.img`
  width: 100%;
`;
export const ProductDetail = styled.div``;

export const Card = styled.div`
  width: 95%;
  padding: 5%;
  background-color: var(--whiteFixed);

  border-radius: 4px;
`;
