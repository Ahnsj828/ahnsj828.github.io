import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

// ProjectSection 스타일
export const ProjectSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: start;
  width: 75%;
  height: 65%;
  border: 2px solid;
  border-radius: 2px;
  background: #5a8fcf; //파란 하늘색.
  margin-top: 3%;
  padding: 1rem;
`;

export const SlideSection = styled.article`
  width: 100%;
  height: 100%;
  border: 2px solid;
  border-radius: 2px;
  font-family: "Yomogi", sans-serif;
`;

// Swiper 스타일
export const SlideWrap = styled(Swiper)`
  width: 100%;
  height: 100%;

  .swiper-pagination {
    bottom: 20px; // 페이지네이션 위치 조정
    text-align: center;
  }

  /* 2. 두번째 방법 */
  .swiper-pagination-bullet {
    background: #5a8fcf; // 2. 흰색
    width: 14px;
    height: 14px;
    border-radius: 50%;
    opacity: 1;
    border: 1px solid #000;
  }

  .swiper-pagination-bullet-active {
    background: #333; // 2. 검정색
  }

  .swiper-button-next,
  .swiper-button-prev {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    color: #5a8fcf;
    font-size: 2rem;
    font-weight: bold;
    text-shadow: 1px 1px 0 #000,
      // 수평, 수직, 블러 없는 검정색 그림자
      -1px -1px 0 #000,
      1px -1px 0 #000, -1px 1px 0 #000;
  }
`;

// SwiperSlide 스타일
export const Slide = styled(SwiperSlide)`
  box-sizing: border-box;
  display: flex;
  border: 1px solid lightgray;
  background-size: 8% 8%, 2px 2px;
  background-color: #f9f9f9;
  background-image: linear-gradient(#e4e4e4 1px, transparent 1px);
  // min-height: 100%;
  width: 100%;
  height: 100%;
  line-height: 160%;
`;

// SlideInner 스타일
export const SlideInner = styled.div`
  display: flex;
  padding: 1.25rem;
  padding: 2.75rem;
  padding-right: 2.5rem;
`;

export const ProjectTitle = styled.div`
  width: auto;
  margin-right: 5%;
  height: 100%;
  h4 {
    width: auto;
    margin: 0.3125rem;
    margin-bottom: 2rem;
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

export const ProjectPic = styled.div`
  width: 35%;
  height: 100%;
  background-color: gray;
  border-radius: 5%;
  overflow: hidden;
`;
