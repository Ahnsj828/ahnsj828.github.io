// // < map함수 활용 하는 방법 >
// import React from "react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "./AboutPage.css";
// import {
//   AboutSection,
//   MyPic,
//   AboutMe,
//   ToolIconBox,
//   ToolIconTitle,
//   ToolIcons,
//   ToolIcon,
//   ToolIntroduce,
// } from "./AboutPage.styled";

// import BasicLayout from "../../layouts/BasicLayout";

// const AboutPage = () => {
//   const iconsList = [
//     "html5",
//     "css3",
//     "sass",
//     "javascript",
//     "react",
//     "typescript",
//     "firebase",
//     "git",
//     "github",
//     "figma",
//     "illustrator",
//     "photoshop",
//   ];

//   return (
//     <BasicLayout>
//       <AboutSection>
//         <MyPic></MyPic>
//         <AboutMe>
//           <ToolIconBox>
//             <ToolIconTitle>
//               My Skill<b>.</b>
//             </ToolIconTitle>
//             <ToolIcons>
//               {iconsList.map((iconName, idx) => {
//                 // let imageUrl = require("../../assets/images/Section/Introduce/" +
//                 let imageUrl = require("../../assets/images/Section/About/" +
//                   `${iconName}-icon` +
//                   ".png");
//                 return <ToolIcon key={idx} $imgUrl={imageUrl} />;
//               })}
//             </ToolIcons>
//           </ToolIconBox>
//           <ToolIntroduce></ToolIntroduce>
//         </AboutMe>
//       </AboutSection>
//     </BasicLayout>
//   );
// };

// export default AboutPage;

// < map함수 활용 하는 방법 >
import React from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./AboutPage.css";
import {
  AboutSection,
  TabBtns,
  Tab,
  AboutContainer,
  AboutContents,
  AboutContent,
  AboutME,
  ContentInner,
  MySkills,
  ToolIconTitle,
  ToolIcons,
  ToolIcon,
} from "./AboutPage.styled";

import BasicLayout from "../../layouts/BasicLayout";

const AboutPage = () => {
  return (
    <BasicLayout>
      <AboutSection>
        <TabBtns>
          <Tab>
            <div>
              <span>About me</span>
            </div>
          </Tab>
          <Tab>
            <div>
              <span>My skills</span>
            </div>
          </Tab>
        </TabBtns>
        <AboutContainer>
          <AboutContents>
            <AboutContent>
              <AboutME>
                <ContentInner>
                  <h4>About me</h4>
                  <p></p>
                </ContentInner>
              </AboutME>
            </AboutContent>
            <AboutContent>
              <MySkills>
                <ContentInner>
                  <ToolIconTitle></ToolIconTitle>
                  <ToolIcons>
                    <ToolIcon></ToolIcon>
                  </ToolIcons>
                </ContentInner>
              </MySkills>
            </AboutContent>
          </AboutContents>
        </AboutContainer>
      </AboutSection>
    </BasicLayout>
  );
};

export default AboutPage;
// tab-inner   =>  AboutSection
// tab-btn     =>

// tab-content =>
