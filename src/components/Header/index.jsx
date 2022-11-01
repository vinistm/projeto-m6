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
  TemporaryButton,
} from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

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
          <CustomLink color="var(--brand-1)" href="localhost:5000">
            Fazer Login
          </CustomLink>
          <TemporaryButton href="localhost:5000">Cadastrar</TemporaryButton>
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
          {isOpen ? (
            <span onClick={() => setIsOpen(!isOpen)}>
              <FaTimes />
            </span>
          ) : (
            <span onClick={() => setIsOpen(!isOpen)}>
              <GiHamburgerMenu />
            </span>
          )}
          {isOpen && <NavContent isOpen={isOpen} />}
        </DropDownNavBar>
      </MenuContainer>
    </HeaderContainer>
  );
};

export default Header;
