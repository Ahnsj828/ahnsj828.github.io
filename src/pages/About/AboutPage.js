// < map함수 활용 하는 방법 >
import React from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./AboutPage.css";
import {
  AboutContain,
  AboutSection,
  MyPic,
  AboutMe,
  ToolIconBox,
  ToolIconTitle,
  ToolIcons,
  ToolIcon,
  ToolIntroduce,
} from "./AboutPage.styled";

import BasicLayout from "../../layouts/BasicLayout";

const AboutPage = () => {
  const iconsList = [
    "html5",
    "css3",
    "sass",
    "javascript",
    "react",
    "typescript",
    "firebase",
    "git",
    "github",
    "figma",
    "illustrator",
    "photoshop",
  ];

  return (
    <BasicLayout>
      <AboutContain>
        <AboutSection>
          <MyPic></MyPic>
          <AboutMe>
            <ToolIconBox>
              <ToolIconTitle>
                My Skill<b>.</b>
              </ToolIconTitle>
              <ToolIcons>
                {iconsList.map((iconName, idx) => {
                  let imageUrl = require("../../assets/images/Section/Introduce/" +
                    `${iconName}-icon` +
                    ".png");
                  return <ToolIcon key={idx} $imgUrl={imageUrl} />;
                })}
              </ToolIcons>
            </ToolIconBox>
            <ToolIntroduce></ToolIntroduce>
          </AboutMe>
        </AboutSection>
      </AboutContain>
    </BasicLayout>
  );
};

export default AboutPage;
