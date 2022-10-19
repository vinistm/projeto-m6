import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 10vh;
  position: relative;
  border-bottom: 2px solid grey;
`;

export const MenuContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;

  @media (max-width: 700px) {
    width: 30%;
  }
`;

export const FigureContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;

  img {
    width: 80%;
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

  height: 40vh;
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
    border-bottom: 2px solid grey;
  }
  /*
  div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 50%;
  } */
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 85%;

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
  color: black;

  :active {
    color: black;
  }

  :hover {
    cursor: pointer;
  }
`;
