import { useState } from "react";
import logo from "../../assets/logo.svg";
import {
  CustomLink,
  DropDownNavBar,
  FigureContainer,
  HeaderContainer,
  Menu,
  MenuContainer,
  NavBar,
} from "./style";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavContent = () => {
    return (
      <Menu>
        <div>
          <CustomLink href="localhost:5000">Carros</CustomLink>
          <CustomLink href="localhost:5000">Motos</CustomLink>
          <CustomLink href="localhost:5000">Leilão</CustomLink>
        </div>
        <div>
          <CustomLink href="localhost:5000">Fazer Login</CustomLink>
          <CustomLink href="localhost:5000">Cadastrar</CustomLink>
        </div>
      </Menu>
    );
  };

  return (
    <HeaderContainer>
      <FigureContainer>
        <img src={logo} alt="logo" />
      </FigureContainer>
      <MenuContainer>
        <NavBar>
          <NavContent />
        </NavBar>
        <DropDownNavBar>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "X" : "---"}
          </button>
          {isOpen && <NavContent isOpen={isOpen} />}
        </DropDownNavBar>
      </MenuContainer>
    </HeaderContainer>
  );
};

export default Header;
