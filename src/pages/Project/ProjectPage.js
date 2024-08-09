import React from "react";
// import { styled } from "styled-components";

import {
  ProjectSection,
  SlideSection,
  SlideWrap,
  Slide,
  SlideInner,
  ProjectTitle,
  ProjectPic,
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
      <SlideSection>
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
              <ProjectTitle>
                <h4>Yeogi Clone Coding</h4>
                <p>여기어때 클론코딩</p>
              </ProjectTitle>
              <ProjectPic></ProjectPic>
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
      </SlideSection>
    </ProjectSection>
  );
};

export default ProjectPage;
