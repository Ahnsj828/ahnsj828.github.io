import React from "react";
import {
  ProjectContent,
  ProjectPic,
  ProjectTitle,
  ProjectTxt,
  SlideInner,
} from "./ProjectCard.styled";

const ProjectCard = ({ project }) => {
  return (
    <SlideInner>
      <ProjectTitle>
        <h4>Yeogi Clone Coding</h4>
      </ProjectTitle>
      <ProjectContent>
        <ProjectPic></ProjectPic>
        <ProjectTxt>
          <p>{project.title}</p>
          <p>{project.text}</p>
        </ProjectTxt>
      </ProjectContent>
    </SlideInner>
  );
};

export default ProjectCard;
