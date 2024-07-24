import styled from "styled-components";

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
  height: 80%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;

export const HomeImgs = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeBg = styled.img`
  width: 45%;
  height: auto; /* 원하는 높이로 설정 */
  object-fit: cover; /* 이미지가 너비에 맞게 높이가 조정되도록 함 */
`;

export const HomeTitles = styled.div``;
