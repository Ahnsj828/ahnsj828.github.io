import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaGithub } from "react-icons/fa";

// Icon styles
export const PhoneIcon = styled(FaPhoneAlt)`
  font-size: 3.5rem;
  color: #1b201c;
`;

export const MailIcon = styled(FaEnvelope)`
  font-size: 3.5rem;
  color: #1b201c;
`;

export const GithubIcon = styled(FaGithub)`
  font-size: 3.5rem;
  color: #1b201c;
`;

// Section styles
export const ContactSection = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 70%;
  margin-top: 3%;
`;

// Image container styles
export const ContactImgs = styled.article`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 81%;
  margin-bottom: 3%;
`;

export const ContactnBg = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
  object-fit: cover;
  z-index: 1;
`;

export const ContactCar = styled.img`
  position: absolute;
  bottom: 11%;
  right: -5%;
  width: 21%;
  height: auto;
  z-index: 2;
`;

export const ContactGrass = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
  z-index: 3;
`;

// Icon container styles
export const ContactICons = styled.ul`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  gap: 3rem;
  z-index: 5;
  width: 25rem;
  height: 6rem;
`;

// Icon item styles
export const ContactICon = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 5.5rem;
  height: 5.3rem;
  background: #de9db8;
  border-radius: 10%;
  box-shadow: inset 0px 0px 10px rgba(39, 20, 2, 0.8);

  &:hover {
    box-shadow: 0 0 5px #de9db8, 0 0 10px #de9db8, 0 0 50px #de9db8,
      0 0 500px #de9db8;
    ${PhoneIcon}, ${MailIcon}, ${GithubIcon} {
      color: #fff;
    }
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: inherit;
`;

export const IConTxt = styled.span`
  display: ${(props) => (props.$show ? "block" : "none")};
  position: absolute;
  bottom: -5rem; /* Increase this value to move text down further */
  left: 50%;
  transform: translateX(-50%); /* Center the text horizontally */
  width: max-content; /* Adjust the width based on content */
  font: normal 1.5rem/1 "Kcc-Ganpan";
  background: #fff7e1;
  background-image: linear-gradient(#e4e4e4 1px, transparent 1px);
  background-size: 30% 30%, 2px 2px;
  background-color: rgba(249, 249, 249, 0.8);
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.9);
  padding: 1rem;
  opacity: 1;
  transition: opacity 0.3s;

  &::before {
    content: "";
    position: absolute;
    top: -20px; /* Position the arrow */
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 20px solid rgba(249, 249, 249, 0.8);
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.9);
  }
`;
