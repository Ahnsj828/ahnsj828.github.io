import React from "react";
import { styled } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

// import { ProjectSection } from "./ProjectPage.styled";

import BasicLayout from "../../layouts/BasicLayout";

import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

const ProjectPage = () => {
  return (
    <BasicLayout>
      <ProjectSection>
        <SlideWrap
          slidesPerView={1}
          spaceBetween={30}
          grabCursor={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          // className="mySwiper"
        >
          <Slides>
            <p>1111</p>
          </Slides>
          <Slides>
            <p>2222</p>
          </Slides>
          <Slides>
            <p>3333</p>
          </Slides>
          <Slides>
            <p>4444</p>
          </Slides>
          <Slides>
            <p>5555</p>
          </Slides>
        </SlideWrap>
      </ProjectSection>
    </BasicLayout>
  );
};

export default ProjectPage;

const ProjectSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: start;
  margin-top: 5%;
  width: 85%;
  height: 70%;
`;

const SlideWrap = styled(Swiper)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 50px;
  border: 1px solid #000;
  gap: 15px;
  margin-bottom: 50px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Slides = styled(SwiperSlide)`
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: #ddd;
  width: 100%;
  height: 300px;
  border: 1px solid #f00;
`;
