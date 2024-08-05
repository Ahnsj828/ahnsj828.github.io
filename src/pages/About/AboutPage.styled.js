// import styled from "styled-components";

// export const AboutSection = styled.section`
//   display: flex;
//   justify-content: center;
//   align-items: start;
//   margin-top: 5%;
//   width: 85%;
//   height: 70%;
// `;

// export const MyPic = styled.article`
//   width: 33%;
//   height: 100%;
//   margin-right: 2%;
//   border-radius: 5%;
//   background: gray;
// `;

// export const AboutMe = styled.article`
//   width: 65%;
//   height: 100%;
//   display: flex;
//   border-radius: 30px;
//   overflow: hidden;
// `;

// // ToolIconBox => ToolsContain => ContentInner
// export const ToolsContain = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding: 5%;
//   width: 40%;
//   height: 100%;
//   border: 1px solid #000;
//   gap: 10%;
// `;

// export const ToolIconTitle = styled.p`
//   width: 90%;
//   /* height: 100%; */
//   line-height: 40px;
//   /* border: 1px solid #f00; */
//   font-size: 2.5rem;
//   font-weight: bold;
//   text-align: center;
//   b {
//     padding-left: 0.3rem;
//     color: #ff5d2c;
//   }
// `;

// export const ToolIcons = styled.span`
//   width: 90%;
//   height: calc(100% - 40px);
//   height: 100%;
//   /* border: 1px solid greenyellow; */
//   display: flex;
//   flex-wrap: wrap;
//   gap: 10%;
//   padding-bottom: 8.65rem;
// `;

// // < props로 전달하는 방법 >
// // export const ToolIcon = styled.div`
// //   width: 30px;
// //   height: 30px;
// //   background-image: url(${(props) => props.$HTML});
// //   background-position: center;
// //   background-repeat: no-repeat;
// //   background-size: cover;
// // `;

// export const ToolIcon = styled.div`
//   display: inline-block;
//   height: 50px;
//   height: 3.125rem;
//   height: 65px;
//   height: 4.0625rem;
//   width: 4.0625rem;
//   background: url(${(props) => props.$imgUrl}) center/contain no-repeat;
//   width: ${(props) => (props.$ratio ? `calc(${props.$ratio} * 50px)` : "50px")};

//   /* 각 이미지에 맞는 비율 설정 */
//   &:nth-child(1) {
//     width: calc(5rem * 4 / 5);
//   } /* firebase */
//   &:nth-child(7) {
//     width: calc(4.0625rem * 32 / 11);
//   } /* firebase */
//   &:nth-child(8) {
//     width: calc(3.2rem * 24 / 10);
//   } /* git */

//   /* 마우스 올렸을 때 이미지가 커지도록 설정 */
//   transition: transform 0.3s ease; /* 애니메이션 부드럽게 설정 */
//   &:hover {
//     transform: scale(1.1); /* 이미지 크기를 10% 확대 */
//     cursor: pointer;
//   }
//   &:nth-child(3):hover,
//   &:nth-child(5):hover {
//     transform: scale(1.2); /* 이미지 크기를 10% 확대 */
//   }
// `;

// // &:nth-child(3) {
// //   margin-right: 3rem;
// // }
// // // sass
// // &:nth-child(9) {
// //   margin-right: 3rem;
// // }
// //  github

// export const ToolIntroduce = styled.div`
//   width: 60%;
//   height: 100%;
//   border: 1px solid #000;
// `;

// ==========================================================

import styled from "styled-components";

export const AboutSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: start;
  margin-top: 5%;
  width: 85%;
  height: 70%;
`;

export const TabBtns = styled.nav`
  width: 100%;
  width: calc(100% - 1rem);
  padding: 2rem 0 0 0;
  margin: 0 0.5rem;
  overflow-x: auto;
  white-space: nowrap;
`;

export const Tab = styled.button`
  position: relative;
  display: inline-block;
  background: var(--background);
  border: 2px solid;
  border-width: 2px 0 0;
  border-radius: 6px 6px 0 0;
  margin-left: -35px;
  margin-right: 4rem;
  white-space: nowrap;
  text-transform: uppercase;
  font-family: "Patrick Hand";
  line-height: 0.8;
  cursor: pointer;

  &:focus span {
    border-radius: 0;
    border-bottom: 2px solid;
  }
  &:first-of-type {
    margin-left: 30px;
  }
  & div {
    position: relative;
    padding: 6px 5px;
    z-index: 10;
  }
  & span {
    position: relative;
    display: inline-block;
    min-width: 6rem;
    border: 2px solid transparent;
    border-radius: 5px;
    padding: 6px 15px 6px;
    font-size: 140%;
    color: #fff;
    z-index: 5;
  }
  &:before,
  &:after {
    position: absolute;
    content: "";
    top: -2px;
    height: 100%;
    width: 30px;
    border-top: 2px solid;
    border-radius: 8px 8px 0 0;
    background: var(--background);
  }
  &:before {
    transform: skew(25deg);
    border-radius: 0 8px 0 0;
    border-right: 2px solid;
    right: -16px;
  }
  &:after {
    transform: skew(-25deg);
    border-radius: 8px 0 0 0;
    border-left: 2px solid;
    left: -16px;
  }
  &.active {
    position: relative;
    z-index: 50;
  }
  &.active span {
    background: white;
    border: 2px solid;
    border-radius: 5px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    color: black;
  }
  &.active:focus span {
    outline: 1px solid rgba(255, 255, 255, 0.7);
  }
  &:nth-of-type(1),
  .tab-content ul li:nth-of-type(1) {
    --background: #640d6b;
  }
  &:nth-of-type(2),
  .tab-content ul li:nth-of-type(2) {
    --background: #b51b75;
  }
  &:nth-of-type(3),
  .tab-content ul li:nth-of-type(3) {
    --background: #af4d98;
  }
  &:nth-of-type(4),
  .tab-content ul li:nth-of-type(4) {
    --background: #d66ba0;
  }
  &:nth-of-type(5),
  .tab-content ul li:nth-of-type(5) {
    --background: #e5a9a9;
  }
  &:nth-of-type(6),
  .tab-content ul li:nth-of-type(6) {
    --background: #6cb6bb;
  }
  &:nth-of-type(7),
  .tab-content ul li:nth-of-type(7) {
    --background: #4d5daf;
  }
`;

export const AboutContainer = styled.section`
  position: relative;
  border: 2px solid;
  border-radius: 2px;
  width: 100%;
  top: -2px;
  left: -2px;
  z-index: 1;
`;

export const AboutContents = styled.ul``;

export const AboutContent = styled.li`
  transition: all 0.3s;
  z-index: 1;
  display: none;
  background: var(--background);
  border-radius: 2px;
  padding: 1rem;
  font-family: "Yomogi", sans-serif;
  &:target {
    visibility: visible;
    opacity: 1;
  }
  &:nth-child(1) {
    visibility: visible;
    opacity: 1;
  }
`;

export const AboutME = styled.article`
  display: flex;
  min-height: 20rem;
  border: 2px solid;
  background-size: 8% 8%, 2px 2px;
  background-color: #f9f9f9;
  background-image: linear-gradient(#e4e4e4 1px, transparent 1px);
  padding: 1.5rem;
  line-height: 160%;
`;

export const ContentInner = styled.span`
  padding: 20px;
  padding-right: 40px;
  h4 {
    padding: 5px;
    padding-bottom: 25px;
    text-decoration: underline;
    text-transform: uppercase;
    font-size: 40px;
  }
`;

export const MySkills = styled.article`
  display: flex;
  min-height: 20rem;
  border: 2px solid;
  background-size: 8% 8%, 2px 2px;
  background-color: #f9f9f9;
  background-image: linear-gradient(#e4e4e4 1px, transparent 1px);
  padding: 1.5rem;
  line-height: 160%;
`;

export const ToolIconTitle = styled.p``;

export const ToolIcons = styled.span``;

export const ToolIcon = styled.div``;
