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
import React, { useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./AboutPage.css";
import {
  AboutSection,
  TabBtns,
  Tab,
  AboutContents,
  AboutContent,
  AboutME,
  ContentInner,
  AboutTxt,
  MyPic,
  MySkills,
  ToolIcons,
  ToolIcon,
} from "./AboutPage.styled";

import BasicLayout from "../../layouts/BasicLayout";

const AboutPage = () => {
  // 현재 활성화된 탭을 관리하는 상태
  const [activeTab, setActiveTab] = useState(1);

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

  // 탭 클릭 핸들러
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <BasicLayout>
      <AboutSection>
        <TabBtns>
          <Tab
            className={activeTab === 1 ? "active" : ""}
            onClick={() => handleTabClick(1)}
          >
            <div>
              <span>About me</span>
            </div>
          </Tab>
          <Tab
            className={activeTab === 2 ? "active" : ""}
            onClick={() => handleTabClick(2)}
          >
            <div>
              <span>My skills</span>
            </div>
          </Tab>
        </TabBtns>
        <AboutContents>
          <AboutContent style={{ display: activeTab === 1 ? "block" : "none" }}>
            <AboutME>
              <ContentInner>
                <AboutTxt>
                  <h4>About me</h4>
                  <p>
                    공부하며 만들어본 작업의 결과물들을 담았습니다.
                    <br /> 부족한 부분들이 많지만 꾸준히 채워가며 그 경험을
                    바탕으로 성장하는 사람이 되고 싶습니다. 스스로에게 한계를
                    두지 않고 끊임없이 성장하는 개발자가 되겠습니다.
                  </p>
                </AboutTxt>
                <MyPic></MyPic>
              </ContentInner>
            </AboutME>
          </AboutContent>
          <AboutContent style={{ display: activeTab === 2 ? "block" : "none" }}>
            <MySkills>
              <ContentInner>
                <h4>My skill</h4>
                <ToolIcons>
                  {iconsList.map((iconName, idx) => {
                    let imageUrl = require(`../../assets/images/Section/About/${iconName}-icon.png`);
                    return <ToolIcon key={idx} $imgUrl={imageUrl} />;
                  })}
                </ToolIcons>
              </ContentInner>
            </MySkills>
          </AboutContent>
        </AboutContents>
      </AboutSection>
    </BasicLayout>
  );
};

export default AboutPage;
