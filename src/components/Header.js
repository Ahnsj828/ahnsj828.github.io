// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import DesktopLT from "../assets/images/Background_files/DesktopLT.png";
// import DesktopRT from "../assets/images/Background_files/DesktopRT.png";

// const Header = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [activeMenu, setActiveMenu] = useState(
//     getActiveMenu(location.pathname)
//   );

//   // 경로를 기반으로 활성 메뉴를 설정하는 함수
//   function getActiveMenu(pathname) {
//     if (pathname === "/") return "home";
//     else if (pathname === "/introduce") return "introduce";
//     else if (pathname === "/project") return "project";
//     else if (pathname === "/example") return "example";
//     else if (pathname === "/contact") return "contact";
//     return "home"; // 기본적으로 home을 활성화 상태로 설정
//   }

//   const handleMenuClick = (menu, path) => {
//     setActiveMenu(menu);
//     navigate(path);
//   };

//   return (
//     <Container>
//       <Article>
//         <div className="bg-LT">
//           <img src={DesktopLT} alt="bg-LT" />
//         </div>
//         <div className="bg-RT">
//           <img src={DesktopRT} alt="bg-RT" />
//         </div>
//       </Article>
//       <HeaderContainer>
//         <Logo
//           active={activeMenu === "home"}
//           onClick={() => handleMenuClick("home", "/")}
//         >
//           Ahn
//           <span className="logo-back">.</span>
//         </Logo>
//         <MenuContainer>
//           <MenuHome
//             active={activeMenu === "home"}
//             onClick={() => handleMenuClick("home", "/")}
//           >
//             <Span>Home</Span>
//           </MenuHome>

//           <MenuIntroduce
//             active={activeMenu === "introduce"}
//             onClick={() => handleMenuClick("introduce", "/introduce")}
//           >
//             <Span>Introduce</Span>
//           </MenuIntroduce>

//           <MenuProject
//             active={activeMenu === "project"}
//             onClick={() => handleMenuClick("project", "/project")}
//           >
//             <Span>Project</Span>
//           </MenuProject>

//           <MenuExample
//             active={activeMenu === "example"}
//             onClick={() => handleMenuClick("example", "/example")}
//           >
//             <Span>Example</Span>
//           </MenuExample>

//           <MenuContact
//             active={activeMenu === "contact"}
//             onClick={() => handleMenuClick("contact", "/contact")}
//           >
//             <Span>Contact</Span>
//           </MenuContact>
//         </MenuContainer>
//       </HeaderContainer>
//     </Container>
//   );
// };

// export default Header;

// const Container = styled.header`
//   background: #fff7e1;
//   position: fixed;
//   display: flex;
//   justify-content: space-between;
//   align-items: end;
//   align-items: center;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 115px;
//   z-index: 10;
//   transition: all 0.5s ease;
// `;

// const Article = styled.article`
//   padding: 0;
//   .bg-LT,
//   .bg-RT {
//     position: fixed;
//     z-index: -10;
//   }
//   .bg-LT {
//     top: 0;
//     left: 0;
//   }
//   .bg-RT {
//     top: 0;
//     right: 0;
//   }
// `;

// const HeaderContainer = styled.div`
//   position: fixed;
//   display: flex;
//   justify-content: space-between;
//   top: 0;
//   left: 0;
//   width: 100%;
//   padding-top: 40px;
//   height: 85px;
//   z-index: 10;
//   transition: all 0.5s ease;
// `;
// const Logo = styled.h1`
//   margin-left: 10%;
//   font-family: "Kcc-Ganpan";
//   font-size: 3rem;
//   font: normal 3rem/-0.3 "Kcc-Ganpan";
//   color: #201c14;
//   cursor: pointer;
//   .logo-back {
//     color: #ff5d2c;
//   }
// `;

// // MenuContainer = .menu = ul = nav
// const MenuContainer = styled.ul`
//   display: flex;
//   align-items: center;
//   margin-right: 10%;
//   margin-bottom: 10px;
//   gap: 10px;
// `;

// // MenuHome = li
// const MenuHome = styled.li`
//   position: relative;
//   font: normal 1.2rem/1 Kcc-Ganpan;
//   padding: 0 23px;
//   text-transform: uppercase;
//   cursor: pointer;
//   font-size: ${({ active }) => (active ? "1.3rem" : "1.2rem")};
//   font-family: "Kcc-Ganpan";
//   color: ${({ active }) => (active ? "#ff5d2c" : "#352e1f")};
//   margin: ${({ active }) => (active ? "0 15px" : "0px")};
//   &::before,
//   &::after {
//     content: "";
//     position: absolute;
//     -webkit-transition: -webkit-transform 0.3s ease-out, opacity 0.3s;
//     transition: transform 0.3s ease-out, opacity 0.3s;
//   }
//   span {
//     &::before,
//     &::after {
//       content: "";
//       position: absolute;
//       -webkit-transition: -webkit-transform 0.3s ease-out 0.15s,
//         opacity 0s 0.05s;
//       transition: transform 0.3s ease-out 0.15s, opacity 0s 0.05s;
//     }
//   }
//   &::before,
//   & span::before {
//     top: -webkit-calc(50% - 0.3em);
//     top: calc(50% - 0.3em);
//     width: 0.5em;
//     height: 0.5em;
//     -webkit-transform: translate3d(-0.6em, 0, 0) rotate(45deg);
//     transform: translate3d(-0.6em, 0, 0) rotate(45deg);
//     border-right: 0.15em solid #ff5d2c;
//     border-top: 0.15em solid #ff5d2c;
//     opacity: ${({ active }) => (active ? 1 : 0)};
//     left: ${({ active }) => (active ? "0.3em" : "-0.1em")};
//   }
//   &::after,
//   & span::after {
//     bottom: -webkit-calc(50% - 0.35em);
//     bottom: calc(50% - 0.35em);
//     width: 0.5em;
//     height: 0.5em;
//     -webkit-transform: translate3d(0.6em, 0, 0) rotate(45deg);
//     transform: translate3d(0.6em, 0, 0) rotate(45deg);
//     border-left: 0.15em solid #ff5d2c;
//     border-bottom: 0.15em solid #ff5d2c;
//     opacity: ${({ active }) => (active ? 1 : 0)};
//     right: ${({ active }) => (active ? "0.3em" : "-0.1em")};
//   }
//   &:hover {
//     overflow: visible;
//   }
//   &:hover::before,
//   &:hover span::before {
//     -webkit-transform: translate3d(0, 0, 0) rotate(45deg);
//     transform: translate3d(0, 0, 0) rotate(45deg);
//     opacity: 1;
//   }
//   &:hover::after,
//   &:hover span::after {
//     -webkit-transform: translate3d(0, 0, 0) rotate(45deg);
//     transform: translate3d(0, 0, 0) rotate(45deg);
//     opacity: 1;
//   }
// `;

// const MenuIntroduce = styled.li`
//   position: relative;
//   font: normal 1.2rem/1 Kcc-Ganpan;
//   padding: 0 23px;
//   text-transform: uppercase;
//   cursor: pointer;
//   font-size: ${({ active }) => (active ? "1.3rem" : "1.2rem")};
//   font-family: "Kcc-Ganpan";
//   color: ${({ active }) => (active ? "#ff5d2c" : "#352e1f")};
//   margin: ${({ active }) => (active ? "0 15px" : "0px")};
//   &::before,
//   &::after {
//     content: "";
//     position: absolute;
//     -webkit-transition: -webkit-transform 0.3s ease-out, opacity 0.3s;
//     transition: transform 0.3s ease-out, opacity 0.3s;
//   }
//   span {
//     &::before,
//     &::after {
//       content: "";
//       position: absolute;
//       -webkit-transition: -webkit-transform 0.3s ease-out 0.15s,
//         opacity 0s 0.05s;
//       transition: transform 0.3s ease-out 0.15s, opacity 0s 0.05s;
//     }
//   }
//   &::before,
//   & span::before {
//     top: -webkit-calc(50% - 0.3em);
//     top: calc(50% - 0.3em);
//     width: 0.5em;
//     height: 0.5em;
//     -webkit-transform: translate3d(-0.6em, 0, 0) rotate(45deg);
//     transform: translate3d(-0.6em, 0, 0) rotate(45deg);
//     border-right: 0.15em solid #ff5d2c;
//     border-top: 0.15em solid #ff5d2c;
//     opacity: ${({ active }) => (active ? 1 : 0)};
//     left: ${({ active }) => (active ? "0.3em" : "-0.1em")};
//   }
//   &::after,
//   & span::after {
//     bottom: -webkit-calc(50% - 0.35em);
//     bottom: calc(50% - 0.35em);
//     width: 0.5em;
//     height: 0.5em;
//     -webkit-transform: translate3d(0.6em, 0, 0) rotate(45deg);
//     transform: translate3d(0.6em, 0, 0) rotate(45deg);
//     border-left: 0.15em solid #ff5d2c;
//     border-bottom: 0.15em solid #ff5d2c;
//     opacity: ${({ active }) => (active ? 1 : 0)};
//     right: ${({ active }) => (active ? "0.3em" : "-0.1em")};
//   }
//   &:hover {
//     overflow: visible;
//   }
//   &:hover::before,
//   &:hover span::before {
//     -webkit-transform: translate3d(0, 0, 0) rotate(45deg);
//     transform: translate3d(0, 0, 0) rotate(45deg);
//     opacity: 1;
//   }
//   &:hover::after,
//   &:hover span::after {
//     -webkit-transform: translate3d(0, 0, 0) rotate(45deg);
//     transform: translate3d(0, 0, 0) rotate(45deg);
//     opacity: 1;
//   }
// `;

// const MenuProject = styled.li`
//   position: relative;
//   font: normal 1.2rem/1 Kcc-Ganpan;
//   padding: 0 23px;
//   text-transform: uppercase;
//   cursor: pointer;
//   font-size: ${({ active }) => (active ? "1.3rem" : "1.2rem")};
//   font-family: "Kcc-Ganpan";
//   color: ${({ active }) => (active ? "#ff5d2c" : "#352e1f")};
//   margin: ${({ active }) => (active ? "0 15px" : "0px")};
//   &::before,
//   &::after {
//     content: "";
//     position: absolute;
//     -webkit-transition: -webkit-transform 0.3s ease-out, opacity 0.3s;
//     transition: transform 0.3s ease-out, opacity 0.3s;
//   }
//   span {
//     &::before,
//     &::after {
//       content: "";
//       position: absolute;
//       -webkit-transition: -webkit-transform 0.3s ease-out 0.15s,
//         opacity 0s 0.05s;
//       transition: transform 0.3s ease-out 0.15s, opacity 0s 0.05s;
//     }
//   }
//   &::before,
//   & span::before {
//     top: -webkit-calc(50% - 0.3em);
//     top: calc(50% - 0.3em);
//     width: 0.5em;
//     height: 0.5em;
//     -webkit-transform: translate3d(-0.6em, 0, 0) rotate(45deg);
//     transform: translate3d(-0.6em, 0, 0) rotate(45deg);
//     border-right: 0.15em solid #ff5d2c;
//     border-top: 0.15em solid #ff5d2c;
//     opacity: ${({ active }) => (active ? 1 : 0)};
//     left: ${({ active }) => (active ? "0.3em" : "-0.1em")};
//   }
//   &::after,
//   & span::after {
//     bottom: -webkit-calc(50% - 0.35em);
//     bottom: calc(50% - 0.35em);
//     width: 0.5em;
//     height: 0.5em;
//     -webkit-transform: translate3d(0.6em, 0, 0) rotate(45deg);
//     transform: translate3d(0.6em, 0, 0) rotate(45deg);
//     border-left: 0.15em solid #ff5d2c;
//     border-bottom: 0.15em solid #ff5d2c;
//     opacity: ${({ active }) => (active ? 1 : 0)};
//     right: ${({ active }) => (active ? "0.3em" : "-0.1em")};
//   }
//   &:hover {
//     overflow: visible;
//   }
//   &:hover::before,
//   &:hover span::before {
//     -webkit-transform: translate3d(0, 0, 0) rotate(45deg);
//     transform: translate3d(0, 0, 0) rotate(45deg);
//     opacity: 1;
//   }
//   &:hover::after,
//   &:hover span::after {
//     -webkit-transform: translate3d(0, 0, 0) rotate(45deg);
//     transform: translate3d(0, 0, 0) rotate(45deg);
//     opacity: 1;
//   }
// `;

// const MenuExample = styled.li`
//   position: relative;
//   font: normal 1.2rem/1 Kcc-Ganpan;
//   padding: 0 23px;
//   text-transform: uppercase;
//   cursor: pointer;
//   font-size: ${({ active }) => (active ? "1.3rem" : "1.2rem")};
//   font-family: "Kcc-Ganpan";
//   color: ${({ active }) => (active ? "#ff5d2c" : "#352e1f")};
//   margin: ${({ active }) => (active ? "0 15px" : "0px")};
//   &::before,
//   &::after {
//     content: "";
//     position: absolute;
//     -webkit-transition: -webkit-transform 0.3s ease-out, opacity 0.3s;
//     transition: transform 0.3s ease-out, opacity 0.3s;
//   }
//   span {
//     &::before,
//     &::after {
//       content: "";
//       position: absolute;
//       -webkit-transition: -webkit-transform 0.3s ease-out 0.15s,
//         opacity 0s 0.05s;
//       transition: transform 0.3s ease-out 0.15s, opacity 0s 0.05s;
//     }
//   }
//   &::before,
//   & span::before {
//     top: -webkit-calc(50% - 0.3em);
//     top: calc(50% - 0.3em);
//     width: 0.5em;
//     height: 0.5em;
//     -webkit-transform: translate3d(-0.6em, 0, 0) rotate(45deg);
//     transform: translate3d(-0.6em, 0, 0) rotate(45deg);
//     border-right: 0.15em solid #ff5d2c;
//     border-top: 0.15em solid #ff5d2c;
//     opacity: ${({ active }) => (active ? 1 : 0)};
//     left: ${({ active }) => (active ? "0.3em" : "-0.1em")};
//   }
//   &::after,
//   & span::after {
//     bottom: -webkit-calc(50% - 0.35em);
//     bottom: calc(50% - 0.35em);
//     width: 0.5em;
//     height: 0.5em;
//     -webkit-transform: translate3d(0.6em, 0, 0) rotate(45deg);
//     transform: translate3d(0.6em, 0, 0) rotate(45deg);
//     border-left: 0.15em solid #ff5d2c;
//     border-bottom: 0.15em solid #ff5d2c;
//     opacity: ${({ active }) => (active ? 1 : 0)};
//     right: ${({ active }) => (active ? "0.3em" : "-0.1em")};
//   }
//   &:hover {
//     overflow: visible;
//   }
//   &:hover::before,
//   &:hover span::before {
//     -webkit-transform: translate3d(0, 0, 0) rotate(45deg);
//     transform: translate3d(0, 0, 0) rotate(45deg);
//     opacity: 1;
//   }
//   &:hover::after,
//   &:hover span::after {
//     -webkit-transform: translate3d(0, 0, 0) rotate(45deg);
//     transform: translate3d(0, 0, 0) rotate(45deg);
//     opacity: 1;
//   }
// `;

// const MenuContact = styled.li`
//   position: relative;
//   font: normal 1.2rem/1 Kcc-Ganpan;
//   padding: 0 23px;
//   text-transform: uppercase;
//   cursor: pointer;
//   font-size: ${({ active }) => (active ? "1.3rem" : "1.2rem")};
//   font-family: "Kcc-Ganpan";
//   color: ${({ active }) => (active ? "#ff5d2c" : "#352e1f")};
//   margin: ${({ active }) => (active ? "0 15px" : "0px")};
//   &::before,
//   &::after {
//     content: "";
//     position: absolute;
//     -webkit-transition: -webkit-transform 0.3s ease-out, opacity 0.3s;
//     transition: transform 0.3s ease-out, opacity 0.3s;
//   }
//   span {
//     &::before,
//     &::after {
//       content: "";
//       position: absolute;
//       -webkit-transition: -webkit-transform 0.3s ease-out 0.15s,
//         opacity 0s 0.05s;
//       transition: transform 0.3s ease-out 0.15s, opacity 0s 0.05s;
//     }
//   }
//   &::before,
//   & span::before {
//     top: -webkit-calc(50% - 0.3em);
//     top: calc(50% - 0.3em);
//     width: 0.5em;
//     height: 0.5em;
//     -webkit-transform: translate3d(-0.6em, 0, 0) rotate(45deg);
//     transform: translate3d(-0.6em, 0, 0) rotate(45deg);
//     border-right: 0.15em solid #ff5d2c;
//     border-top: 0.15em solid #ff5d2c;
//     opacity: ${({ active }) => (active ? 1 : 0)};
//     left: ${({ active }) => (active ? "0.3em" : "-0.1em")};
//   }
//   &::after,
//   & span::after {
//     bottom: -webkit-calc(50% - 0.35em);
//     bottom: calc(50% - 0.35em);
//     width: 0.5em;
//     height: 0.5em;
//     -webkit-transform: translate3d(0.6em, 0, 0) rotate(45deg);
//     transform: translate3d(0.6em, 0, 0) rotate(45deg);
//     border-left: 0.15em solid #ff5d2c;
//     border-bottom: 0.15em solid #ff5d2c;
//     opacity: ${({ active }) => (active ? 1 : 0)};
//     right: ${({ active }) => (active ? "0.3em" : "-0.1em")};
//   }
//   &:hover {
//     overflow: visible;
//   }
//   &:hover::before,
//   &:hover span::before {
//     -webkit-transform: translate3d(0, 0, 0) rotate(45deg);
//     transform: translate3d(0, 0, 0) rotate(45deg);
//     opacity: 1;
//   }
//   &:hover::after,
//   &:hover span::after {
//     -webkit-transform: translate3d(0, 0, 0) rotate(45deg);
//     transform: translate3d(0, 0, 0) rotate(45deg);
//     opacity: 1;
//   }
// `;

// // Span = span;
// const Span = styled.span`
//   &::before,
//   &::after {
//     content: "";
//     position: absolute;
//     -webkit-transition: -webkit-transform 0.3s ease-out 0.15s, opacity 0s 0.05s;
//     transition: transform 0.3s ease-out 0.15s, opacity 0s 0.05s;
//   }
// `;

// =====================================================================

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { StyleSheetManager } from "styled-components"; // StyleSheetManager import 추가
import DesktopLT from "../assets/images/Background_files/DesktopLT.png";
import DesktopRT from "../assets/images/Background_files/DesktopRT.png";
import {
  Container,
  Article,
  HeaderContainer,
  Logo,
  MenuContainer,
  MenuItem,
  Span,
} from "./Header.styled";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(
    getActiveMenu(location.pathname)
  );

  // 경로를 기반으로 활성 메뉴를 설정하는 함수
  function getActiveMenu(pathname) {
    if (pathname === "/") return "home";
    else if (pathname === "/introduce") return "introduce";
    else if (pathname === "/project") return "project";
    else if (pathname === "/example") return "example";
    else if (pathname === "/contact") return "contact";
    return "home"; // 기본적으로 home을 활성화 상태로 설정
  }

  const handleMenuClick = (menu, path) => {
    setActiveMenu(menu);
    navigate(path);
  };

  // Menu 항목들을 하나의 styled-component로 대체
  const Menu = ({ active, onClick, children }) => (
    <MenuItem active={active ? 1 : 0} onClick={onClick}>
      <Span>{children}</Span>
    </MenuItem>
  );

  // 각 Menu 항목을 정의
  const MenuHome = ({ active, onClick }) => (
    <Menu active={active} onClick={() => handleMenuClick("home", "/")}>
      Home
    </Menu>
  );

  const MenuIntroduce = ({ active, onClick }) => (
    <Menu
      active={active}
      onClick={() => handleMenuClick("introduce", "/introduce")}
    >
      Introduce
    </Menu>
  );

  const MenuProject = ({ active, onClick }) => (
    <Menu
      active={active}
      onClick={() => handleMenuClick("project", "/project")}
    >
      Project
    </Menu>
  );

  const MenuExample = ({ active, onClick }) => (
    <Menu
      active={active}
      onClick={() => handleMenuClick("example", "/example")}
    >
      Example
    </Menu>
  );

  const MenuContact = ({ active, onClick }) => (
    <Menu
      active={active}
      onClick={() => handleMenuClick("contact", "/contact")}
    >
      Contact
    </Menu>
  );

  return (
    <StyleSheetManager shouldForwardProp={(prop) => !["active"].includes(prop)}>
      {/* shouldForwardProp으로 active prop 필터링 설정 */}
      <Container>
        <Article>
          <div className="bg-LT">
            <img src={DesktopLT} alt="bg-LT" />
          </div>
          <div className="bg-RT">
            <img src={DesktopRT} alt="bg-RT" />
          </div>
        </Article>
        <HeaderContainer>
          <Logo
            active={activeMenu === "home"}
            onClick={() => handleMenuClick("home", "/")}
          >
            Ahn
            <span className="logo-back">.</span>
          </Logo>
          <MenuContainer>
            <MenuHome active={activeMenu === "home"} />
            <MenuIntroduce active={activeMenu === "introduce"} />
            <MenuProject active={activeMenu === "project"} />
            <MenuExample active={activeMenu === "example"} />
            <MenuContact active={activeMenu === "contact"} />
          </MenuContainer>
        </HeaderContainer>
      </Container>
    </StyleSheetManager>
  );
};

export default Header;
