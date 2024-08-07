import styled from "styled-components";

// < styled components >
export const MainSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: start;
  width: 80%;
  /* height: 80%; */
  /* align-items: center; */
  /* margin-top: 3%;
  padding-left: 10%; */
  position: relative;
  margin-top: 3%;
  margin-left: 10%;
`;

export const MainImgs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  /* height: 100%; */
`;

export const MainBg = styled.img`
  width: 54%;
  height: auto;
  object-fit: cover;
  display: inline-block;
`;

export const MainImg = styled.img`
  width: 11%; /* 원하는 너비로 조절 */
  height: auto; /* 비율에 맞게 높이 자동 조정 */
  position: absolute;
  bottom: 0;
  right: 10%;
`;

// // HomeSky = noite
// export const HomeSky = styled.div``;

// // Star = constelacao
// export const Star = styled.div``;

// // Moon = lua
// export const Moon = styled.div``;

// // MoonShape = textura
// export const MoonShape = styled.div``;

// // Meteoro = chuvaMeteoro
// export const Meteoro = styled.div``;

export const MainTitles = styled.div`
  width: 30%;
  height: 100%;
  padding-top: 14%;
  padding-left: 0.3%;
`;

export const MainTitle = styled.div`
  width: 100%;
  /* height: auto; */
  height: 100%;
  font-size: 6rem;
  line-height: 5rem;
  letter-spacing: 0.05rem;
  font-family: "Road-Rage", sans-serif;
`;
