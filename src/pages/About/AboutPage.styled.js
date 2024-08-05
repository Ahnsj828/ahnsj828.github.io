import styled from "styled-components";
export const AboutContain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 100vh;
`;

export const AboutSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: start;
  margin-top: 5%;
  width: 85%;
  height: 70%;
`;

export const MyPic = styled.article`
  width: 33%;
  height: 100%;
  margin-right: 2%;
  border-radius: 5%;
  background: gray;
`;

export const AboutMe = styled.article`
  width: 65%;
  height: 100%;
  display: flex;
  border-radius: 30px;
  overflow: hidden;
`;

export const ToolIconBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5%;
  width: 40%;
  height: 100%;
  background: wheat;
  gap: 10%;
`;

export const ToolIconTitle = styled.p`
  width: 90%;
  /* height: 100%; */
  line-height: 40px;
  /* border: 1px solid #f00; */
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  b {
    padding-left: 0.3rem;
    color: #ff5d2c;
  }
`;

export const ToolIcons = styled.span`
  width: 90%;
  height: calc(100% - 40px);
  height: 100%;
  /* border: 1px solid greenyellow; */
  display: flex;
  flex-wrap: wrap;
  gap: 10%;
  padding-bottom: 8.65rem;
`;

// < props로 전달하는 방법 >
// export const ToolIcon = styled.div`
//   width: 30px;
//   height: 30px;
//   background-image: url(${(props) => props.$HTML});
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
// `;

export const ToolIcon = styled.div`
  /* width: 50px; */
  display: inline-block;
  height: 50px;
  height: 3.125rem;
  height: 65px;
  height: 4.0625rem;
  width: 4.0625rem;
  background: url(${(props) => props.$imgUrl}) center/contain no-repeat;
  /* margin-right: 1%; */

  /* 기본 비율 (1:1) */
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
`;
// &:nth-child(3) {
//   margin-right: 3rem;
// }
// // sass
// &:nth-child(9) {
//   margin-right: 3rem;
// }
//  github

export const ToolIntroduce = styled.div`
  width: 60%;
  height: 100%;
  background: cadetblue;
`;
