import styled from "styled-components";

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 70%;
  height: 70%;
`;

export const TabBtns = styled.nav`
  width: calc(100% - 1rem);
  margin: 0 0.5rem;
  overflow-x: auto;
  white-space: nowrap;
`;

export const Tab = styled.button`
  display: inline-block;
  position: relative;
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
  div {
    position: relative;
    padding: 6px 5px;
    z-index: 10;
    span {
      position: relative;
      display: inline-block;
      min-width: 6rem;
      border: 2px solid transparent;
      border-radius: 5px;
      padding: 6px 15px;
      font-size: 140%;
      color: #fff;
      z-index: 5;
    }
  }
  &:before,
  &:after {
    position: absolute;
    content: "";
    top: -2px;
    width: 30px;
    height: 100%;
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
  &:nth-of-type(1) {
    --background: #c85eaf; /* #640d6b보다 밝은 색상 */
  }
  &:nth-of-type(2) {
    --background: #6f7fd7; /* #b51b75보다 밝은 색상 */
  }
`;

export const AboutContents = styled.ul`
  position: relative;
  top: -2px;
  left: -2px;
  z-index: 1;
  border: 2px solid;
  border-radius: 2px;
  width: 100%;
  height: 90%;
`;

export const AboutContent = styled.li`
  transition: all 0.3s;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: var(--background);
  border-radius: 2px;
  padding: 1rem;
  font-family: "Yomogi", sans-serif;
  &:target {
    visibility: visible;
    opacity: 1;
  }
  &:nth-of-type(1) {
    --background: #c85eaf;
  }
  &:nth-of-type(2) {
    --background: #6f7fd7;
  }
`;

export const AboutME = styled.article`
  display: flex;
  min-height: 20rem;
  height: 100%;
  border: 2px solid;
  background-size: 8% 8%, 2px 2px;
  background-color: #f9f9f9;
  background-image: linear-gradient(#e4e4e4 1px, transparent 1px);
  padding: 1.5rem;
  line-height: 160%;
`;

export const ContentInner = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.25rem;
  padding-right: 2.5rem;
  h4 {
    width: 30%;
    margin: 0.3125rem;
    margin-bottom: 2rem;
    /* box-shadow: inset 0 -20px 0 #bfffa1; // 형광 연두 */
    /* box-shadow: inset 0 -20px 0 rgba(255, 93, 44, 0.7); // 형광 연두 */
    /* box-shadow: inset 0 -20px 0 #ff8a66; // 형광 다홍 */
    /* box-shadow: inset 0 -20px 0 #ffcc00; // 노랑000 */
    /* box-shadow: inset 0 -20px 0 #ffb500; // 노랑2 */
    /* box-shadow: inset 0 -20px 0 #ff8c00; // 주황 */
    box-shadow: inset 0 -20px 0 #ffba67; // 주황2 000
    text-transform: uppercase;
    font-size: 40px;
    font-size: 2.5em;
    font-weight: bold;
    &:last-child {
      width: 51%;
    }
  }
  p {
    color: #393939;
    font-family: "IM_Hyemin-Bold";
    font-size: 1.5rem;
    line-height: 2.5rem;
    letter-spacing: 0.1rem;
    word-break: keep-all;
  }
`;

export const AboutTxt = styled.div`
  width: 60%;
  margin-right: 5%;
  height: 100%;
`;
export const MyPic = styled.img`
  width: 35%;
  height: 90%;
  /* background-color: gray; */
  border-radius: 5%;
  overflow: hidden;
  object-fit: cover;
`;

export const MySkills = styled.article`
  display: flex;
  height: 100%;
  min-height: 20rem;
  border: 2px solid;
  background-size: 8% 8%, 2px 2px;
  background-color: #f9f9f9;
  background-image: linear-gradient(#e4e4e4 1px, transparent 1px);
  padding: 1.5rem;
  line-height: 160%;
`;

export const SkillTitle = styled.div`
  width: 35%;
  /* margin-right: 5%; */
  height: 100%;
`;
// export const ToolIconTitle = styled.p`
//   width: 90%;
//   line-height: 40px;
//   font-size: 2.5rem;
//   font-weight: bold;
//   text-align: center;
//   b {
//     padding-left: 0.3rem;
//     color: #ff5d2c;
//   }
// `;

export const SkillAbout = styled.span`
  width: 65%;
  height: calc(100% - 40px);
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SkillIcons = styled.span`
  width: 100%;
  height: calc(100% - 40px);
  height: 100%;
  height: 45%;
  /* border: 1px solid greenyellow; */
  display: flex;
  flex-wrap: wrap;
  gap: 3%;
  /* display: grid; */
`;

export const SkillIcon = styled.div`
  display: inline-block;
  height: 50px;
  height: 3.125rem;
  height: 65px;
  height: 4.0625rem;
  width: 4.0625rem;
  background: url(${(props) => props.$imgUrl}) center/contain no-repeat;
  width: ${(props) => (props.$ratio ? `calc(${props.$ratio} * 50px)` : "50px")};

  /* 각 이미지에 맞는 비율 설정 */
  &:nth-child(1) {
    width: calc(5rem * 4 / 5);
  } /* firebase */
  &:nth-child(7) {
    width: calc(4.0625rem * 32 / 11);
  } /* firebase */
  &:nth-child(8) {
    width: calc(3.2rem * 24 / 10);
  } /* git */

  /* 마우스 올렸을 때 이미지가 커지도록 설정 */
  transition: transform 0.3s ease; /* 애니메이션 부드럽게 설정 */
  &:hover {
    transform: scale(1.1); /* 이미지 크기를 10% 확대 */
    cursor: pointer;
  }
  &:nth-child(3):hover,
  &:nth-child(5):hover {
    transform: scale(1.2); /* 이미지 크기를 10% 확대 */
  }
`;

export const SkillTxt = styled.div`
  width: 100%;
  /* border: 1px solid #f00; */
  height: 55%;
  padding: 2%;
  color: #393939;
  font-family: "IM_Hyemin-Bold";
  font-size: 1.3rem;
  line-height: 2.5rem;
  letter-spacing: 0.1rem;
  word-break: keep-all;
`;
