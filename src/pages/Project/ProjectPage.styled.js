import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

// ProjectSection 스타일
export const ProjectSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: start;
  margin-top: 5%;
  width: 75%;
  height: 65%;
  background: #5a8fcf; //파란 하늘색.
`;

// Swiper 스타일
export const SlideWrap = styled(Swiper)`
  width: 100%;
  height: 100%;

  .swiper-pagination {
    bottom: 10px;
    text-align: center;
  }

  .swiper-pagination-bullet {
    background: #fff;
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  .swiper-pagination-bullet-active {
    background: #000;
  }

  .swiper-button-next,
  .swiper-button-prev {
    background-color: #ffffff;
    border-radius: 10%;
    width: 40px;
    height: 40px;
    border: none;
    outline: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    color: #000000;
    font-size: 16px;
  }
`;

// SwiperSlide 스타일
export const Slide = styled(SwiperSlide)`
  width: 100%;
  height: 100%;
`;

// SlideInner 스타일
export const SlideInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;
