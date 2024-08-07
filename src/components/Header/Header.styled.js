import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  background: #fff7e1;
  position: fixed;
  display: flex;
  align-items: start;
  top: 0;
  left: 0;
  width: 100%;
  /* height: 115px; */
  z-index: 10;
`;

export const BgTop = styled.article`
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

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 40px;
  /* height: 85px; */
`;

export const Logo = styled(Link)`
  margin-left: 10%;
  font-family: "Kcc-Ganpan";

  b {
    width: 100px;
    font-size: 3rem;
    line-height: 4rem;
    color: #201c14;
    cursor: pointer;
  }
  span {
    padding-left: 0.3rem;
    font-family: "Kcc-Ganpan";
    font-size: 4rem;
    line-height: 2rem;
    height: auto;
    display: inline-block;
    cursor: pointer;
    color: #ff5d2c;
  }
`;

// MenuContainer = .menu = ul = nav
export const MenuContainer = styled.ul`
  display: flex;
  align-items: center;
  margin-right: 10%;
  gap: 10px;
`;

// MenuHome = li
export const MenuItem = styled.li`
  position: relative;
  font: normal 1.2rem/1 Kcc-Ganpan;
  padding: 0 23px;
  text-transform: uppercase;
  cursor: pointer;
  font-size: ${({ $active }) => ($active ? "1.4rem" : "1.2rem")};
  font-family: "Kcc-Ganpan";
  color: ${({ $active }) => ($active ? "#ff5d2c" : "#352e1f")};
  margin: ${({ $active }) => ($active ? "0 15px" : "0px")};
  &::before,
  &::after {
    content: "";
    position: absolute;
    transition: transform 0.3s ease-out, opacity 0.3s;
  }
  span {
    &::before,
    &::after {
      content: "";
      position: absolute;
      transition: transform 0.3s ease-out 0.15s, opacity 0s 0.05s;
    }
  }
  &::before,
  & span::before {
    top: calc(50% - 0.3em);
    width: 0.5em;
    height: 0.5em;
    transform: translate3d(-0.6em, 0, 0) rotate(45deg);
    border-right: 0.15em solid #ff5d2c;
    border-top: 0.15em solid #ff5d2c;
    opacity: ${({ $active }) => ($active ? 1 : 0)};
    left: ${({ $active }) => ($active ? "0.3em" : "-0.1em")};
  }
  &::after,
  & span::after {
    bottom: calc(50% - 0.35em);
    width: 0.5em;
    height: 0.5em;
    transform: translate3d(0.6em, 0, 0) rotate(45deg);
    border-left: 0.15em solid #ff5d2c;
    border-bottom: 0.15em solid #ff5d2c;
    opacity: ${({ $active }) => ($active ? 1 : 0)};
    right: ${({ $active }) => ($active ? "0.3em" : "-0.1em")};
  }
  &:hover::before,
  &:hover span::before {
    transform: translate3d(0, 0, 0) rotate(45deg);
    opacity: 1;
  }
  &:hover::after,
  &:hover span::after {
    transform: translate3d(0, 0, 0) rotate(45deg);
    opacity: 1;
  }
`;

// Span = span;
export const Span = styled.span`
  &::before,
  &::after {
    content: "";
    position: absolute;
    -webkit-transition: -webkit-transform 0.3s ease-out 0.15s, opacity 0s 0.05s;
    transition: transform 0.3s ease-out 0.15s, opacity 0s 0.05s;
  }
`;
