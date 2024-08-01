import styled from "styled-components";

// < styled components >
export const HomeContain = styled.div`
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

export const HomeSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  /* height: 80%; */
  /* align-items: center; */
  /* margin-top: 3%;
  padding-left: 10%; */
  margin-top: 3%;
  margin-left: 13%;
  border: 1px solid #f00;
`;

export const HomeImgs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  /* height: 100%; */
  border: 1px solid #f00;
`;

export const HomeBg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: inline-block;
`;

export const HomeImg = styled.img`
  width: 30%; /* 원하는 너비로 조절 */
  height: auto; /* 비율에 맞게 높이 자동 조정 */
  /* position: absolute;
  bottom: 0;
  right: 0; */
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

export const HomeTitles = styled.div`
  width: 30%;
  height: 100%;
  padding-top: 10%;
  padding-left: 0.3%;
  border: 1px solid #f00;
`;

export const HomeTitle = styled.div`
  width: 100%;
  /* height: auto; */
  height: 100%;
  font-size: 6rem;
  line-height: 5rem;
  letter-spacing: 0.05rem;
  font-family: "Road-Rage", sans-serif;
`;
