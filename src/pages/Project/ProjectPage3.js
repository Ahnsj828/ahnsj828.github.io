import React from "react";
import Flickity from "react-flickity-component";
import { ProjectSection, FlickityCarousel, Slide } from "./ProjectPage.styled";

// Flickity 옵션
const flickityOptions = {
  initialIndex: 0,
  autoPlay: true,
  wrapAround: true,
  pageDots: true,
  prevNextButtons: true,
};

const ProjectPage = () => {
  return (
    <ProjectSection>
      <FlickityCarousel>
        <Flickity
          className={"carousel"}
          elementType={"div"}
          options={flickityOptions}
        >
          <Slide>Slide 1</Slide>
          <Slide>Slide 2</Slide>
          <Slide>Slide 3</Slide>
          {/* 추가적인 슬라이드를 여기에 넣을 수 있습니다 */}
        </Flickity>
      </FlickityCarousel>
    </ProjectSection>
  );
};

export default ProjectPage;
