import React from "react";
import { styled } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

// import { ProjectSection } from "./ProjectPage.styled";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import BasicLayout from "../../layouts/BasicLayout";

// import "./styles.css";

const ProjectPage = () => {
  return (
    <BasicLayout>
      <ProjectSection>
        <SlideWrap
          slidesPerView={1}
          grabCursor={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          <Slide>
            <p>1111</p>
          </Slide>
          <Slide>
            <p>2222</p>
          </Slide>
          <Slide>
            <p>3333</p>
          </Slide>
          <Slide>
            <p>4444</p>
          </Slide>
          <Slide>
            <p>5555</p>
          </Slide>
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
  /* margin-bottom: 50px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  } */
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Slide = styled(SwiperSlide)`
  width: 100%;
  height: 300px;
  border: 1px solid #f00;
  background-color: teal !important; /* !important 사용 */
  display: flex;
  justify-content: center;
  align-items: center;
`;
