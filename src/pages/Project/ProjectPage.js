import React from "react";
// import { styled } from "styled-components";

import {
  ProjectSection,
  SlideWrap,
  Slide,
  SlideInner,
} from "./ProjectPage.styled";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

// import { SwiperSlide } from "swiper/react";

// import "./styles.css";

const ProjectPage = () => {
  return (
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
          <SlideInner>
            <p>1111</p>
          </SlideInner>
        </Slide>
        <Slide>
          <SlideInner>
            <p>2222</p>
          </SlideInner>
        </Slide>
        <Slide>
          <SlideInner>
            <p>3333</p>
          </SlideInner>
        </Slide>
        <Slide>
          <SlideInner>
            <p>4444</p>
          </SlideInner>
        </Slide>
        <Slide>
          <SlideInner>
            <p>5555</p>
          </SlideInner>
        </Slide>
      </SlideWrap>
    </ProjectSection>
  );
};

export default ProjectPage;
