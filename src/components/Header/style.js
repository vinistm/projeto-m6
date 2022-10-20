import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 10vh;
  position: relative;
  border-bottom: 2px solid var(--grey-6);
`;

export const MenuContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;

  span {
    line-height: 1px;
    font-weight: 600;
    font-size: 18px;
    font-family: "Inter";
  }

  @media (max-width: 700px) {
    width: 30%;
  }
`;

export const FigureContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;

  img {
    width: 60%;
    max-width: 200px;
    min-width: 130px;
  }

  @media (max-width: 700px) {
    width: 60%;
  }
`;

export const Menu = styled.div`
  position: absolute;
  left: 0;
  top: 10vh;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  height: 60vh;
  width: 100vw;

  box-shadow: 0px 34px 70px 15px #4242421f;

  div {
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    width: 100%;
    height: 60%;
  }

  div:first-of-type {
    border-bottom: 2px solid var(--grey-6);
  }

  @media (min-width: 700px) {
    position: initial;

    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;

    box-shadow: none;

    div {
      flex-direction: row;
      height: 100%;
      align-items: center;
    }

    div:first-of-type {
      border-right: 2px solid var(--grey-6);
      border-bottom: none;
    }
  }
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 85%;
  height: 100%;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const DropDownNavBar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const CustomLink = styled.a`
  text-decoration: none;
  color: ${({ color }) => (color ? color : "var(--grey-2)")};
  font-family: "Inter";
  font-weight: 600;

  :active {
    color: ${({ color }) => (color ? color : "var(--grey-2)")};
  }

  :hover {
    cursor: pointer;
  }

  @media (max-width: 700px) {
    color: var(--grey-2);
  }
`;

export const TemporaryButton = styled.button`
  border: 1.5px solid var(--grey-4);
  background: var(--whiteFixed);
  padding: 0.4rem 0.5rem;
  border-radius: 4px;

  font-size: 1rem;
  font-family: "Inter";
  font-weight: 600;
`;
