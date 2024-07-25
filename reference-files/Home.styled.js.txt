import styled from "styled-components";
// import createGlobalStyle from "styled-components";

// < styled components >
export const HomeContain = styled.div`
  width: 100%;
  max-width: 80%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  /* overflow: hidden; */
`;

export const HomeSection = styled.section`
  width: 100%;
  /* height: 80%; */
  display: flex;
  justify-content: center;
  /* align-items: center; */
  align-items: flex-end;
  margin-top: 3%;
  padding-left: 10%;
`;

export const HomeImgs = styled.div`
  width: 48%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeBg = styled.img`
  width: 100%;
  height: auto; /* 원하는 높이로 설정 */
  object-fit: cover; /* 이미지가 너비에 맞게 높이가 조정되도록 함 */
`;

// HomeSky = noite
export const HomeSky = styled.div``;

// Star = constelacao
export const Star = styled.div``;

// Moon = lua
export const Moon = styled.div``;

// MoonShape = textura
export const MoonShape = styled.div``;

// Meteoro = chuvaMeteoro
export const Meteoro = styled.div``;

export const HomeTitles = styled.div`
  width: 25%;
  height: 100%;
  padding-bottom: 2.5%;
  padding-left: 0.3%;
`;

export const HomeTitle = styled.div`
  width: 100%;
  height: 100%;
  font-family: "Road-Rage", sans-serif;
  font-size: 6rem;
  line-height: 5rem;
  letter-spacing: 0.05rem;
  margin-bottom: 0.7rem;
`;
