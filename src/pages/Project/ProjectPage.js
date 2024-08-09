import React from "react";
// import { styled } from "styled-components";

import {
  ProjectSection,
  SlideSection,
  SlideWrap,
  Slide,
} from "./ProjectPage.styled";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import ProjectCard from "./component/projectCard/ProjectCard";
import projectList from "../../assets/data/projectList.js";

// import { SwiperSlide } from "swiper/react";

// import "./styles.css";

const ProjectPage = () => {
  console.log(projectList);
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
          {projectList.map((project) => (
            // <Slide key={project.id}>
            //   <ProjectCard project={project} />
            // </Slide>
            <Slide>
              <ProjectCard project={project} />
            </Slide>
          ))}
        </SlideWrap>
      </SlideSection>
    </ProjectSection>
  );
};

export default ProjectPage;
