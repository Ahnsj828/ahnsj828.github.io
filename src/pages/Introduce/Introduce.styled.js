import styled from "styled-components";
export const IntroContain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 100vh;
`;

export const IntroSection = styled.section`
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
`;

export const ToolIconTitle = styled.p`
  width: 90%;
  /* height: 100%; */
  line-height: 40px;
  border: 1px solid #f00;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  b {
    padding-left: 0.3rem;
    color: #ff5d2c;
  }
`;

export const ToolIcons = styled.span`
  width: 100%;
  height: calc(100% - 40px);
  border: 1px solid greenyellow;
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
  width: auto; // 너비는 자동 조절
  height: 50px; // 높이를 50px로 고정
  background: url(${(props) => props.$imgUrl}) center/contain no-repeat;
  background-size: contain; // 이미지 비율에 맞춰서 조절
`;

export const ToolIntroduce = styled.div`
  width: 60%;
  height: 100%;
  background: cadetblue;
`;
