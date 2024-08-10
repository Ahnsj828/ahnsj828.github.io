import React from "react";
import {
  ProjectSection,
  SlideSection,
  SlideWrap,
  Slide,
} from "./ProjectPage.styled";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import SlideCard from "../../components/SlideCard/SlideCard.js";
import list from "../../assets/data/list.js";

const ProjectPage = () => {
  // 'pj' 타입의 데이터만 필터링
  const projectList = list.filter((item) => item.type === "pj");

  return (
    <ProjectSection>
      <SlideSection>
        <SlideWrap
          slidesPerView={1}
          grabCursor={true}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {projectList.map((item) => (
            <Slide key={item.id}>
              <SlideCard list={item} />
            </Slide>
          ))}
        </SlideWrap>
      </SlideSection>
    </ProjectSection>
  );
};

export default ProjectPage;
