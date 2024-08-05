import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DesktopLT from "../../assets/images/Background_files/DesktopLT.png";
import DesktopRT from "../../assets/images/Background_files/DesktopRT.png";
import {
  Container,
  BgTop,
  HeaderContainer,
  Logo,
  MenuContainer,
  MenuItem,
  Span,
} from "./Header.styled";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Project", path: "/project" },
  { name: "Example", path: "/example" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("");

  useEffect(() => {
    const pathToMenu = menuItems.reduce((acc, item) => {
      acc[item.path] = item.name;
      return acc;
    }, {});

    setActiveMenu(pathToMenu[location.pathname] || "");
  }, [location.pathname]);

  const handleMenuClick = (menu, path) => {
    setActiveMenu(menu);
    navigate(path);
  };

  return (
    <Container>
      <BgTop>
        <div className="bg-LT">
          <img src={DesktopLT} alt="bg-LT" />
        </div>
        <div className="bg-RT">
          <img src={DesktopRT} alt="bg-RT" />
        </div>
      </BgTop>
      <HeaderContainer>
        <Logo to="/">
          <b>Ahn</b>
          <span>.</span>
        </Logo>
        <MenuContainer>
          {menuItems.map(({ name, path }) => (
            <MenuItem
              key={path}
              $active={activeMenu === name}
              onClick={() => handleMenuClick(name, path)}
            >
              <Span>{name}</Span>
            </MenuItem>
          ))}
        </MenuContainer>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
