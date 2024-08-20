import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const ProjectSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: start;
  width: 90%;
  height: 70%;
  border: 2px solid;
  border-radius: 2px;
  background: #5a8fcf; //파란 하늘색.
  margin-top: 4%;
  padding: 1rem;
`;

export const SlideSection = styled.article`
  border: 2px solid;
  border-radius: 2px;
  width: 100%;
  height: 100%;
  font-family: "Yomogi", sans-serif;
`;

// Swiper 스타일
export const SlideWrap = styled(Swiper)`
  width: 100%;
  height: 100%;

  .swiper-pagination {
    bottom: 20px;
    text-align: center;
  }

  .swiper-pagination-bullet {
    background: #5a8fcf;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    opacity: 1;
    border: 1px solid #000;
  }

  .swiper-pagination-bullet-active {
    background: #333;
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
    text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
      -1px 1px 0 #000;
  }
`;

// SwiperSlide 스타일
export const Slide = styled(SwiperSlide)`
  display: flex;
  box-sizing: border-box;
  border: 1px solid lightgray;
  background-size: 8% 8%, 2px 2px;
  background-color: #f9f9f9;
  background-image: linear-gradient(#e4e4e4 1px, transparent 1px);
  width: 100%;
  height: 100%;
  line-height: 160%;
`;
