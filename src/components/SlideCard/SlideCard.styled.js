import styled from "styled-components";

// SlideInner 스타일
export const SlideInner = styled.div`
  /* display: flex; */
  padding: 1.25rem;
  padding: 3rem 5rem;
  /* padding-right: 2.5rem; */
  width: 100%;
  height: 100%;
`;

export const SlideTitle = styled.div`
  /* border: 1px solid #f00; */
  /* width: auto; */
  margin-right: 5%;
  /* height: 20%; */
  margin: 0.3125rem;
  /* margin-bottom: 1rem; */
  /* margin-bottom: 2.5rem; */
  box-shadow: inset 0 -20px 0 #f8a05f; //  밝은 오렌지색
  text-transform: uppercase;
  font-size: 40px;
  font-size: 2.5em;
  font-weight: bold;
  margin-bottom: 5%;

  padding-left: 0.3rem;
  /* width: 16rem;
  padding-left: 0.5%;
  &:nth-child(2) {
    width: 40%;
    padding-left: 0.5%;
  } */
  width: ${(props) => props.width || "auto"}; /* 동적 width */
  /* padding-left: ${(props) => props.paddingLeft || "1rem"}; */
  p {
    color: #393939;
    font-family: "IM_Hyemin-Bold";
    font-size: 1.5rem;
    line-height: 2.5rem;
    letter-spacing: 0.1rem;
    word-break: keep-all;
  }
`;

export const SlideContent = styled.div`
  /* border: 1px solid darkcyan; */
  display: flex;
  /* align-items: center; */
  width: 100%;
  height: 80%;
`;

export const SlideVideo = styled.span`
  padding-top: 1%;
  display: inline-block;
  /* border: 1px solid blue; */
  width: 50%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: gray; */
  /* border-radius: 5%; */
  overflow: hidden;
  position: relative;

  /* width: 100%; */
  /* height: auto; */
  overflow: hidden;

  video {
    width: 80%;
    height: auto;
    width: auto;
    height: 73.5%;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1; /* Monitor를 비디오 위에 배치 */
    padding-top: 2%;
  }
`;

export const Monitor = styled.img`
  width: auto;
  height: 100%;
  object-fit: contain; /* 이미지 비율 유지 */
`;

export const Slideintro = styled.span`
  /* border: 1px solid #f00; */
  width: 50%;
  margin-left: 2%;
  height: 100%;
  padding: 1%;

  display: flex;
  flex-direction: column; /* 세로 방향으로 정렬 */
  gap: 1rem; /* 요소 간의 간격 */
  align-items: flex-end;
  h4 {
    width: auto;
    /* margin: 0.3125rem;
    margin-bottom: 2rem; */
    box-shadow: inset 0 -20px 0 #f8a05f; //  밝은 오렌지색
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

export const UseTools = styled.div`
  display: flex;
  flex-wrap: wrap; /* 줄 바꿈을 허용 */
  gap: 0.7rem; /* 항목 간의 간격 */
`;

export const UseTool = styled.span`
  border: 1px solid #393939;
  border: 1px solid #efefef;
  color: #393939;
  font-family: "IM_Hyemin-Bold";
  font-size: 1.5rem;
  line-height: 2.5rem;
  letter-spacing: 0.1rem;
  word-break: keep-all;

  box-shadow: inset 0 -3px 0 #f8a05f; //  밝은 오렌지색

  border: 1px solid #f8a05f;
  border: 1px solid #393939;
  box-shadow: inset 0 -3px 0 #393939;

  margin: 0.25rem; /* 항목 간의 간격 */
  padding: 0.3rem 0.8rem; /* 내부 여백 */
  background-color: #fff; /* 배경색 (필요에 따라 변경) */
  border-radius: 0.25rem; /* 모서리 둥글기 */
  white-space: nowrap; /* 텍스트가 줄 바꿈되지 않도록 설정 */

  /* padding: 0.2rem 0.5rem; */

  /* padding: 0.01rem;
  border: none;
  background: none;
  border-radius: 0;
  box-shadow: inset 0 -0.2rem 0 #f8a05f; */
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
