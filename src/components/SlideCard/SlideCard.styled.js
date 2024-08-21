import styled from "styled-components";

// SlideInner 스타일
export const SlideInner = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem 5rem;
`;

export const SlideTitle = styled.div`
  text-transform: uppercase;
  font-size: 40px;
  font-size: 2.5em;
  font-weight: bold;
  box-shadow: inset 0 -20px 0 #f8a05f; // 밝은 오렌지색
  margin: 1rem 0.3125rem 2.5rem 1rem;
  padding-left: 0.3rem;
  width: ${(props) => props.width || "auto"};
`;

export const SlideContent = styled.div`
  display: flex;
  width: 100%;
  height: 85%;
`;

export const Monitor = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 47%;
  height: 72%;
  background-image: url(${(props) => props.$bgImage}); /* Transient prop 사용 */
  background-size: 100% 100%; /* 이미지 비율 유지 */
  background-repeat: no-repeat; /* 이미지 반복 안 함 */
  background-position: center; /* 이미지 중앙 정렬 */
  padding-top: 0.5%;
  /* border: 1px solid #f00; */
`;

export const Video = styled.video`
  width: 93%;
  height: auto;
  position: absolute;
  z-index: 1;
  padding-top: 2%;
`;

export const Slideintro = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 51.5%;
  height: 100%;
  padding-top: 1%;
  margin-left: 1%;
  gap: 1rem;
  /* border: 1px solid green; */
`;

export const SlideTxt = styled.div`
  /* border: 1px solid #f00; */
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

export const UseTools = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
`;

export const UseTool = styled.span`
  border: 1px solid #393939;
  color: #393939;
  font-family: "IM_Hyemin-Bold";
  font-size: 1rem;
  line-height: 2rem;
  letter-spacing: 0.1rem;
  word-break: keep-all;

  box-shadow: inset 0 -3px 0 #f8a05f; // 밝은 오렌지색

  border: 1px solid #f8a05f;
  border: 1px solid #393939;
  box-shadow: inset 0 -3px 0 #393939;

  margin: 0.25rem; /* 항목 간의 간격 */
  padding: 0.3rem 0.8rem; /* 내부 여백 */
  background-color: #fff; /* 배경색 (필요에 따라 변경) */
  border-radius: 0.25rem; /* 모서리 둥글기 */
  white-space: nowrap; /* 텍스트가 줄 바꿈되지 않도록 설정 */
`;

export const Introduce = styled.div`
  color: #393939;
  font-family: "IM_Hyemin-Bold";
  font-size: 1.3rem;
  line-height: 2rem;
  letter-spacing: 0.1rem;
  word-break: keep-all;
`;

export const Links = styled.div`
  margin-top: auto; /* 상단 여백을 자동으로 설정하여 밑으로 위치시킴 */
  display: flex;
  gap: 0.5rem;
`;

export const PageLink = styled.img`
  width: 50px; /* 예시 크기, 필요에 따라 조정 */
  height: auto;
  cursor: pointer;
`;
