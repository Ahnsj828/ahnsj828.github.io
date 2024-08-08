import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

export const ProjectSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: start;
  margin-top: 5%;
  width: 75%;
  height: 65%;
  background: #6f7fd7;

  .splide__slide img {
    width: 100%;
    height: auto;
    display: block;
  }

  .splide__pagination {
    bottom: 10px;
    text-align: center;
  }

  .splide__pagination__page {
    background: #fff;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin: 0 3px;
  }

  .splide__pagination__page--active {
    background: #000;
  }

  .splide__arrow {
    background: #000;
    color: #fff;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  .splide__arrow--prev {
    left: 10px;
  }

  .splide__arrow--next {
    right: 10px;
  }
`;

export const SlideWrap = styled(Swiper)`
  width: 100%;
  height: 100%;
`;

export const SlideInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

// import styled from "styled-components";

// export const ProjectSection = styled.section`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: 5%;
//   width: 75%;
//   height: 65%;
//   // vh 단위로 높이 조정
//   background: #6f7fd7;
//   position: relative;
// `;

// export const FlickityCarousel = styled.div`
//   width: 100%;
//   height: 100%;
//   // 부모 컨테이너의 높이와 맞춤
//   position: relative;
//   // 버튼 위치 조정을 위해 relative 설정

//   .flickity-prev-next-button {
//     background-color: #ffffff;
//     // 버튼 배경 색상
//     border-radius: 10%;
//     // 버튼 모서리 둥글게
//     width: 40px;
//     height: 40px;
//     border: none;
//     outline: none;
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
//     //버튼에 그림자 추가
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     // 버튼 위치 조정
//     position: absolute;

//     &:before {
//       color: #000000;
//       //버튼 내 화살표 색상
//       font-size: 16px;
//       //화살표 크기
//     }
//   }

//  //이전 버튼 위치 조정
//   .flickity-prev-next-button.previous {
//     left: 10px;
//     //왼쪽에서의 거리
//     top: 50%;
//     // 세로 중앙 정렬
//     transform: translateY(-50%);
//     //정확한 중앙 정렬
//   }

//   // 다음 버튼 위치 조정
//   .flickity-prev-next-button.next {
//     right: 10px;
//     //오른쪽에서의 거리
//     top: 50%;
//     // 세로 중앙 정렬
//     transform: translateY(-50%);
//     //정확한 중앙 정렬 //
//   }

//   .flickity-page-dots {
//     bottom: 10px;
//     //페이지 도트 위치
//     .dot {
//       background-color: #ffffff;
//       // 도트 색상
//       width: 12px;
//       // 도트 크기
//       height: 12px;
//       border-radius: 50%;
//     }
//     .dot.is-selected {
//       background-color: #000000;
//       //선택된 도트 색상
//     }
//   }
// `;

// export const Slide = styled.div`
//   width: 100%;
//   height: 100%; // 슬라이드 높이를 부모 컨테이너에 맞춤
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background: #fff; // 슬라이드 배경 색상
//   border-radius: 10px; // 슬라이드 모서리 둥글게
//   font-size: 24px; // 슬라이드 텍스트 크기
//   color: #333; // 슬라이드 텍스트 색상
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); // 슬라이드 그림자
// `;
