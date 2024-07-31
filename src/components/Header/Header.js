import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
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

const Header = () => {
  const navigate = useNavigate();
  // const location = useLocation();
  const [activeMenu, setActiveMenu] = useState();

  const handleMenuClick = (menu, path) => {
    setActiveMenu(menu);
    navigate(path);
  };

  // GSAP을 사용하여 로고 애니메이션 적용
  useEffect(() => {
    gsap.from(".logo-back", { opacity: 0, duration: 1, delay: 0.5 });
  }, []);

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
          Ahn
          <span className="logo-back">.</span>
        </Logo>
        <MenuContainer>
          <MenuItem
            $active={activeMenu === "home"}
            onClick={() => handleMenuClick("home", "/")}
          >
            <Span>Home</Span>
          </MenuItem>
          <MenuItem
            $active={activeMenu === "introduce"}
            onClick={() => handleMenuClick("introduce", "/introduce")}
          >
            <Span>introduce</Span>
          </MenuItem>
          <MenuItem
            $active={activeMenu === "project"}
            onClick={() => handleMenuClick("project", "/project")}
          >
            <Span>project</Span>
          </MenuItem>
          <MenuItem
            $active={activeMenu === "example"}
            onClick={() => handleMenuClick("example", "/example")}
          >
            <Span>example</Span>
          </MenuItem>
          <MenuItem
            $active={activeMenu === "contact"}
            onClick={() => handleMenuClick("contact", "/contact")}
          >
            <Span>contact</Span>
          </MenuItem>
        </MenuContainer>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
