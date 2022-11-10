import styled from "styled-components";

export const Background = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  overflow-y: scroll;
  overflow-x: clip;
  background-color: var(--grey-7);

  .blue-cover {
    position: absolute;
    background-color: var(--brand-1);
    height: 65vh;
    width: 100%;
    top: 0;
  }
`;

export const Container = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 1;

  @media (min-width: 700px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 80%;
    padding: 40px;
  }
`;

export const Main = styled.section`
  margin-top: 5%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    width: 65%;
    margin: 0;
  }
`;
export const Aside = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    width: 35%;
  }
`;

export const Comments = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  padding: 14px;

  @media (min-width: 700px) {
    width: 65%;
  }
`;

export const ProductCover = styled.img`
  width: 60%;
  margin: 10% auto;
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

  @media (min-width: 700px) {
    margin: 0;
    padding: 0 28px;
    min-height: 290px;

    :not(:last-child) {
      margin-bottom: 16px;
    }
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

  @media (min-width: 700px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;

    h2 {
      width: 100%;
    }

    .tags-wrapper,
    .value {
      width: 50%;
    }

    .value {
      text-align: right;
    }
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

  img {
    border-radius: 100%;
    width: 60%;
  }

  @media (min-width: 700px) {
    padding: 28px;
    height: 600px;
  }
`;

export const Comment = styled(Card)`
  margin: 0;
  background-color: var(--whiteFixed);
  min-height: 190px;
  width: 100%;

  div {
    display: flex;
    align-items: center;
  }

  div :not(:last-child) {
    margin-right: 8px;
  }

  h6 {
    font-family: "Inter";
    font-weight: 500;
    font-size: 14px;
    color: var(--grey-1);
  }

  span {
    font-family: "Inter";
    font-weight: 400;
    font-size: 12px;
    color: var(--grey-3);
  }

  .grey-dot {
    background-color: var(--grey-4);
    border-radius: 100%;
    width: 4px;
    height: 4px;
  }

  img {
    width: 50px;
  }

  p {
    color: var(--grey-2);
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    font-family: "Inter";
    text-align: justify;
  }
`;

export const CommentsTitle = styled.h3`
  background-color: var(--whiteFixed);
  color: var(--grey-1);
  font-weight: 600;
  font-family: "Lexend", sans-serif;
  font-size: 20px;
  padding: 5px 20px;
  border-radius: 6px 6px 0 0;
`;

export const UserComment = styled(Card)``;
