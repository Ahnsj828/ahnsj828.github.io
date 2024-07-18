// import React from "react";
// import { Link } from "react-router-dom";
// import "./Header.css";
// import DesktopLT from "../assets/images/Background_files/DesktopLT.png";
// import DesktopRT from "../assets/images/Background_files/DesktopRT.png";

// const Header = () => {
//   return (
//     <header>
//       <article className="bg-top">
//         <div className="bg-LT">
//           <img src={DesktopLT} alt="bg-LT" />
//         </div>
//         <div className="bg-RT">
//           <img src={DesktopRT} alt="bg-RT" />
//         </div>
//       </article>
//       <div className="header">
//         <Link to="/">
//           <h1 className="logo">
//             Ahn
//             <span className="logo-back">.</span>
//           </h1>
//         </Link>
//         <ul className="menu">
//           <li className="menu-on menu-off">
//             <Link to="/">
//               <span>Home</span>
//             </Link>
//           </li>
//           <li className="menu-on menu-off">
//             <Link to="/introduce">
//               <span>Introduce</span>
//             </Link>
//           </li>
//           <li className="menu-on menu-off">
//             <Link to="/project">
//               <span>Project</span>
//             </Link>
//           </li>
//           <li className="menu-on menu-off">
//             <Link to="/example">
//               <span>Example</span>
//             </Link>
//           </li>
//           <li className="menu-on menu-off">
//             <Link to="/contact">
//               <span>Contact</span>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Header;

// =================================================

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Header.css";
// import DesktopLT from "../assets/images/Background_files/DesktopLT.png";
// import DesktopRT from "../assets/images/Background_files/DesktopRT.png";

// const Header = () => {
//   const [activeMenu, setActiveMenu] = useState("/");

//   const handleClick = (to) => {
//     setActiveMenu(to);
//   };

//   return (
//     <header>
//       <article className="bg-top">
//         <div className="bg-LT">
//           <img src={DesktopLT} alt="bg-LT" />
//         </div>
//         <div className="bg-RT">
//           <img src={DesktopRT} alt="bg-RT" />
//         </div>
//       </article>
//       <div className="header">
//         <Link to="/" onClick={() => handleClick("/")}>
//           <h1 className="logo">
//             Ahn
//             <span className="logo-back">.</span>
//           </h1>
//         </Link>
//         <ul className="menu">
//           <li className={activeMenu === "/" ? "menu-on" : "menu-off"}>
//             <Link to="/" onClick={() => handleClick("/")}>
//               <span>Home</span>
//             </Link>
//           </li>
//           <li className={activeMenu === "/introduce" ? "menu-on" : "menu-off"}>
//             <Link to="/introduce" onClick={() => handleClick("/introduce")}>
//               <span>Introduce</span>
//             </Link>
//           </li>
//           <li className={activeMenu === "/project" ? "menu-on" : "menu-off"}>
//             <Link to="/project" onClick={() => handleClick("/project")}>
//               <span>Project</span>
//             </Link>
//           </li>
//           <li className={activeMenu === "/example" ? "menu-on" : "menu-off"}>
//             <Link to="/example" onClick={() => handleClick("/example")}>
//               <span>Example</span>
//             </Link>
//           </li>
//           <li className={activeMenu === "/contact" ? "menu-on" : "menu-off"}>
//             <Link to="/contact" onClick={() => handleClick("/contact")}>
//               <span>Contact</span>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Header;

// ===================================================

import React, { useState } from "react";
import "./Header.css";
import DesktopLT from "../assets/images/Background_files/DesktopLT.png";
import DesktopRT from "../assets/images/Background_files/DesktopRT.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState();
  const navigate = useNavigate();

  const handleMenuClick = (menu, path) => {
    setActiveMenu(menu);
    navigate(path);
  };

  // const homeNavigate = useNavigate();

  // const handleMenuClick = (menu, path) => {
  //   setActiveMenu(menu);
  //   navigate(path);
  // };

  return (
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
          <MenuHome
            active={activeMenu === "home"}
            onClick={() => handleMenuClick("home", "/")}
          >
            <Span>Home</Span>
          </MenuHome>

          <MenuIntroduce
            active={activeMenu === "introduce"}
            onClick={() => handleMenuClick("introduce", "/introduce")}
          >
            <Span>Introduce</Span>
          </MenuIntroduce>

          <MenuProject
            active={activeMenu === "project"}
            onClick={() => handleMenuClick("project", "/project")}
          >
            <Span>Project</Span>
          </MenuProject>

          <MenuExample
            active={activeMenu === "example"}
            onClick={() => handleMenuClick("example", "/example")}
          >
            <Span>Example</Span>
          </MenuExample>

          <MenuContact
            active={activeMenu === "contact"}
            onClick={() => handleMenuClick("contact", "/contact")}
          >
            <Span>Contact</Span>
          </MenuContact>
        </MenuContainer>
      </HeaderContainer>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  background: #fff7e1;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: end;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 115px;
  z-index: 10;
  transition: all 0.5s ease;
`;

const Article = styled.article`
  padding: 0;
  .bg-LT,
  .bg-RT {
    position: fixed;
    z-index: -10;
  }
  .bg-LT {
    top: 0;
    left: 0;
  }
  .bg-RT {
    top: 0;
    right: 0;
  }
`;

const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 40px;
  height: 85px;
  z-index: 10;
  transition: all 0.5s ease;
`;
const Logo = styled.h1`
  margin-left: 10%;
  font-family: "Kcc-Ganpan";
  font-size: 3rem;
  font: normal 3rem/-0.3 "Kcc-Ganpan";
  color: #201c14;
  cursor: pointer;
  .logo-back {
    color: #ff5d2c;
  }
`;

// MenuContainer = .menu = ul = nav
const MenuContainer = styled.ul`
  display: flex;
  align-items: center;
  margin-right: 10%;
  margin-bottom: 10px;
  gap: 10px;
`;
// MenuHome = li
const MenuHome = styled.li`
  position: relative;
        font: normal 1.2rem/1 Kcc-Ganpan;
        color: #352e1f;
        padding: 0 23px;
        text-transform: uppercase;
        cursor: pointer;
        &::before,
        &::after {
          content: "";
          position: absolute;
          -webkit-transition: -webkit-transform 0.3s ease-out, opacity 0.3s;
          transition: transform 0.3s ease-out, opacity 0.3s;
        }
        span {
          &::before,
          &::after {
            content: "";
            position: absolute;
            -webkit-transition: -webkit-transform 0.3s ease-out 0.15s,
              opacity 0s 0.05s;
            transition: transform 0.3s ease-out 0.15s, opacity 0s 0.05s;
          }
        }
        &::before,
        & span::before {
          top: -webkit-calc(50% - 0.3em);
          top: calc(50% - 0.3em);
          left: -0.1em;
          width: 0.5em;
          height: 0.5em;
          opacity: 0;
          -webkit-transform: translate3d(-0.6em, 0, 0) rotate(45deg);
          transform: translate3d(-0.6em, 0, 0) rotate(45deg);
        }
        &::after,
        & span::after {
          bottom: -webkit-calc(50% - 0.35em);
          bottom: calc(50% - 0.35em);
          right: -0.1em;
          width: 0.5em;
          height: 0.5em;
          opacity: 0;
          -webkit-transform: translate3d(0.6em, 0, 0) rotate(45deg);
          transform: translate3d(0.6em, 0, 0) rotate(45deg);
        }
        &:hover {
          overflow: visible;
        }
        &:hover::before,
        &:hover span::before {
          -webkit-transform: translate3d(0, 0, 0) rotate(45deg);
          transform: translate3d(0, 0, 0) rotate(45deg);
          opacity: 1;
        }
        &:hover::after,
        &:hover span::after {
          -webkit-transform: translate3d(0, 0, 0) rotate(45deg);
          transform: translate3d(0, 0, 0) rotate(45deg);
          opacity: 1;
        }
  &::before,
  & span::before {
    border-right: 0.15em solid #ff5d2c;
    border-top: 0.15em solid #ff5d2c;
    opacity: ${({ active }) => (active ? 1 : 0)};
    left: ${({ active }) => (active ? "0.3em" : 0)};
  }

  &::after,
  & span::after {
    border-left: 0.15em solid #ff5d2c;
    border-bottom: 0.15em solid #ff5d2c;
     opacity: ${({ active }) => (active ? 1 : 0)};
    right: ${({ active }) => (active ? "0.3em" : 0)};
  }
  }

  font-size: ${({ active }) => (active ? "1.3rem" : "1.2rem")};
  font-family: "Kcc-Ganpan";
  color: ${({ active }) => (active ? "#ff5d2c" : "#352e1f")};
  margin: ${({ active }) => (active ? "0 15px" : "0px")};
`;

const MenuIntroduce = styled.li`
  position: relative;
  font: normal 1.2rem/1 Kcc-Ganpan;
  color: #352e1f;
  padding: 0 23px;
  text-transform: uppercase;
  cursor: pointer;
  &::before,
  &::after {
    content: "";
    position: absolute;
    -webkit-transition: -webkit-transform 0.3s ease-out, opacity 0.3s;
    transition: transform 0.3s ease-out, opacity 0.3s;
  }
  span {
    &::before,
    &::after {
      content: "";
      position: absolute;
      -webkit-transition: -webkit-transform 0.3s ease-out 0.15s,
        opacity 0s 0.05s;
      transition: transform 0.3s ease-out 0.15s, opacity 0s 0.05s;
    }
  }
  &::before,
  & span::before {
    top: -webkit-calc(50% - 0.3em);
    top: calc(50% - 0.3em);
    left: -0.1em;
    width: 0.5em;
    height: 0.5em;
    opacity: 0;
    -webkit-transform: translate3d(-0.6em, 0, 0) rotate(45deg);
    transform: translate3d(-0.6em, 0, 0) rotate(45deg);
  }
  &::after,
  & span::after {
    bottom: -webkit-calc(50% - 0.35em);
    bottom: calc(50% - 0.35em);
    right: -0.1em;
    width: 0.5em;
    height: 0.5em;
    opacity: 0;
    -webkit-transform: translate3d(0.6em, 0, 0) rotate(45deg);
    transform: translate3d(0.6em, 0, 0) rotate(45deg);
  }
  &:hover {
    overflow: visible;
  }
  &:hover::before,
  &:hover span::before {
    -webkit-transform: translate3d(0, 0, 0) rotate(45deg);
    transform: translate3d(0, 0, 0) rotate(45deg);
    opacity: 1;
  }
  &:hover::after,
  &:hover span::after {
    -webkit-transform: translate3d(0, 0, 0) rotate(45deg);
    transform: translate3d(0, 0, 0) rotate(45deg);
    opacity: 1;
  }
  &::before,
  & span::before {
    border-right: 0.15em solid #ff5d2c;
    border-top: 0.15em solid #ff5d2c;
    opacity: ${({ active }) => (active ? 1 : 0)};
    left: ${({ active }) => (active ? "0.3em" : 0)};
  }

  &::after,
  & span::after {
    border-left: 0.15em solid #ff5d2c;
    border-bottom: 0.15em solid #ff5d2c;
     opacity: ${({ active }) => (active ? 1 : 0)};
    right: ${({ active }) => (active ? "0.3em" : 0)};
  }
  }

  font-size: ${({ active }) => (active ? "1.3rem" : "1.2rem")};
  font-family: "Kcc-Ganpan";
  color: ${({ active }) => (active ? "#ff5d2c" : "#352e1f")};
  margin: ${({ active }) => (active ? "0 15px" : "0px")};
`;

const MenuProject = styled.li`
  position: relative;
  font: normal 1.2rem/1 Kcc-Ganpan;
  color: #352e1f;
  padding: 0 23px;
  text-transform: uppercase;
  cursor: pointer;
  &::before,
  &::after {
    content: "";
    position: absolute;
    -webkit-transition: -webkit-transform 0.3s ease-out, opacity 0.3s;
    transition: transform 0.3s ease-out, opacity 0.3s;
  }
  span {
    &::before,
    &::after {
      content: "";
      position: absolute;
      -webkit-transition: -webkit-transform 0.3s ease-out 0.15s,
        opacity 0s 0.05s;
      transition: transform 0.3s ease-out 0.15s, opacity 0s 0.05s;
    }
  }
  &::before,
  & span::before {
    top: -webkit-calc(50% - 0.3em);
    top: calc(50% - 0.3em);
    left: -0.1em;
    width: 0.5em;
    height: 0.5em;
    opacity: 0;
    -webkit-transform: translate3d(-0.6em, 0, 0) rotate(45deg);
    transform: translate3d(-0.6em, 0, 0) rotate(45deg);
  }
  &::after,
  & span::after {
    bottom: -webkit-calc(50% - 0.35em);
    bottom: calc(50% - 0.35em);
    right: -0.1em;
    width: 0.5em;
    height: 0.5em;
    opacity: 0;
    -webkit-transform: translate3d(0.6em, 0, 0) rotate(45deg);
    transform: translate3d(0.6em, 0, 0) rotate(45deg);
  }
  &:hover {
    overflow: visible;
  }
  &:hover::before,
  &:hover span::before {
    -webkit-transform: translate3d(0, 0, 0) rotate(45deg);
    transform: translate3d(0, 0, 0) rotate(45deg);
    opacity: 1;
  }
  &:hover::after,
  &:hover span::after {
    -webkit-transform: translate3d(0, 0, 0) rotate(45deg);
    transform: translate3d(0, 0, 0) rotate(45deg);
    opacity: 1;
  }
  &::before,
  & span::before {
    border-right: 0.15em solid #ff5d2c;
    border-top: 0.15em solid #ff5d2c;
    opacity: ${({ active }) => (active ? 1 : 0)};
    left: ${({ active }) => (active ? "0.3em" : 0)};
  }

  &::after,
  & span::after {
    border-left: 0.15em solid #ff5d2c;
    border-bottom: 0.15em solid #ff5d2c;
     opacity: ${({ active }) => (active ? 1 : 0)};
    right: ${({ active }) => (active ? "0.3em" : 0)};
  }
  }

  font-size: ${({ active }) => (active ? "1.3rem" : "1.2rem")};
  font-family: "Kcc-Ganpan";
  color: ${({ active }) => (active ? "#ff5d2c" : "#352e1f")};
  margin: ${({ active }) => (active ? "0 15px" : "0px")};
`;

const MenuExample = styled.li`
  position: relative;
  font: normal 1.2rem/1 Kcc-Ganpan;
  color: #352e1f;
  padding: 0 23px;
  text-transform: uppercase;
  cursor: pointer;
  &::before,
  &::after {
    content: "";
    position: absolute;
    -webkit-transition: -webkit-transform 0.3s ease-out, opacity 0.3s;
    transition: transform 0.3s ease-out, opacity 0.3s;
  }
  span {
    &::before,
    &::after {
      content: "";
      position: absolute;
      -webkit-transition: -webkit-transform 0.3s ease-out 0.15s,
        opacity 0s 0.05s;
      transition: transform 0.3s ease-out 0.15s, opacity 0s 0.05s;
    }
  }
  &::before,
  & span::before {
    top: -webkit-calc(50% - 0.3em);
    top: calc(50% - 0.3em);
    left: -0.1em;
    width: 0.5em;
    height: 0.5em;
    opacity: 0;
    -webkit-transform: translate3d(-0.6em, 0, 0) rotate(45deg);
    transform: translate3d(-0.6em, 0, 0) rotate(45deg);
  }
  &::after,
  & span::after {
    bottom: -webkit-calc(50% - 0.35em);
    bottom: calc(50% - 0.35em);
    right: -0.1em;
    width: 0.5em;
    height: 0.5em;
    opacity: 0;
    -webkit-transform: translate3d(0.6em, 0, 0) rotate(45deg);
    transform: translate3d(0.6em, 0, 0) rotate(45deg);
  }
  &:hover {
    overflow: visible;
  }
  &:hover::before,
  &:hover span::before {
    -webkit-transform: translate3d(0, 0, 0) rotate(45deg);
    transform: translate3d(0, 0, 0) rotate(45deg);
    opacity: 1;
  }
  &:hover::after,
  &:hover span::after {
    -webkit-transform: translate3d(0, 0, 0) rotate(45deg);
    transform: translate3d(0, 0, 0) rotate(45deg);
    opacity: 1;
  }
  &::before,
  & span::before {
    border-right: 0.15em solid #ff5d2c;
    border-top: 0.15em solid #ff5d2c;
    opacity: ${({ active }) => (active ? 1 : 0)};
    left: ${({ active }) => (active ? "0.3em" : 0)};
  }

  &::after,
  & span::after {
    border-left: 0.15em solid #ff5d2c;
    border-bottom: 0.15em solid #ff5d2c;
     opacity: ${({ active }) => (active ? 1 : 0)};
    right: ${({ active }) => (active ? "0.3em" : 0)};
  }
  }

  font-size: ${({ active }) => (active ? "1.3rem" : "1.2rem")};
  font-family: "Kcc-Ganpan";
  color: ${({ active }) => (active ? "#ff5d2c" : "#352e1f")};
  margin: ${({ active }) => (active ? "0 15px" : "0px")};
`;

const MenuContact = styled.li`
  position: relative;
  font: normal 1.2rem/1 Kcc-Ganpan;
  color: #352e1f;
  padding: 0 23px;
  text-transform: uppercase;
  cursor: pointer;
  &::before,
  &::after {
    content: "";
    position: absolute;
    -webkit-transition: -webkit-transform 0.3s ease-out, opacity 0.3s;
    transition: transform 0.3s ease-out, opacity 0.3s;
  }
  span {
    &::before,
    &::after {
      content: "";
      position: absolute;
      -webkit-transition: -webkit-transform 0.3s ease-out 0.15s,
        opacity 0s 0.05s;
      transition: transform 0.3s ease-out 0.15s, opacity 0s 0.05s;
    }
  }
  &::before,
  & span::before {
    top: -webkit-calc(50% - 0.3em);
    top: calc(50% - 0.3em);
    left: -0.1em;
    width: 0.5em;
    height: 0.5em;
    opacity: 0;
    -webkit-transform: translate3d(-0.6em, 0, 0) rotate(45deg);
    transform: translate3d(-0.6em, 0, 0) rotate(45deg);
  }
  &::after,
  & span::after {
    bottom: -webkit-calc(50% - 0.35em);
    bottom: calc(50% - 0.35em);
    right: -0.1em;
    width: 0.5em;
    height: 0.5em;
    opacity: 0;
    -webkit-transform: translate3d(0.6em, 0, 0) rotate(45deg);
    transform: translate3d(0.6em, 0, 0) rotate(45deg);
  }
  &:hover {
    overflow: visible;
  }
  &:hover::before,
  &:hover span::before {
    -webkit-transform: translate3d(0, 0, 0) rotate(45deg);
    transform: translate3d(0, 0, 0) rotate(45deg);
    opacity: 1;
  }
  &:hover::after,
  &:hover span::after {
    -webkit-transform: translate3d(0, 0, 0) rotate(45deg);
    transform: translate3d(0, 0, 0) rotate(45deg);
    opacity: 1;
  }
  &::before,
  & span::before {
    border-right: 0.15em solid #ff5d2c;
    border-top: 0.15em solid #ff5d2c;
    opacity: ${({ active }) => (active ? 1 : 0)};
    left: ${({ active }) => (active ? "0.3em" : 0)};
  }

  &::after,
  & span::after {
    border-left: 0.15em solid #ff5d2c;
    border-bottom: 0.15em solid #ff5d2c;
     opacity: ${({ active }) => (active ? 1 : 0)};
    right: ${({ active }) => (active ? "0.3em" : 0)};
  }
  }

  font-size: ${({ active }) => (active ? "1.3rem" : "1.2rem")};
  font-family: "Kcc-Ganpan";
  color: ${({ active }) => (active ? "#ff5d2c" : "#352e1f")};
  margin: ${({ active }) => (active ? "0 15px" : "0px")};
`;
// Span = span;
const Span = styled.span`
  &::before,
  &::after {
    content: "";
    position: absolute;
    -webkit-transition: -webkit-transform 0.3s ease-out 0.15s, opacity 0s 0.05s;
    transition: transform 0.3s ease-out 0.15s, opacity 0s 0.05s;
  }
`;
