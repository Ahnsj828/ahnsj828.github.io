import styled from "styled-components";
export const IntroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 100%;
  height: 100vh;
  max-width: 80%;
  max-height: 80vh;
  margin: auto; */
  width: 80vw;
  /* max-width: 80vw; */
  height: 100vh;
  overflow-x: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MyPic = styled.article`
  width: 50%;
  height: 100%;
`;

export const AboutMe = styled.article`
  width: 50%;
  height: 100%;
`;
