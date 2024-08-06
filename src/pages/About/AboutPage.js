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
  SkillTitle,
  SkillAbout,
  SkillIcons,
  SkillIcon,
  SkillTxt,
} from "./AboutPage.styled";

import BasicLayout from "../../layouts/BasicLayout";

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [hoveredSkill, setHoveredSkill] = useState("");

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

  const skillDescriptions = {
    html5:
      "웹 표준을 준수하고, 구조화 할 수 있으며, 그에 따라 적절한 시맨틱 태그를 사용하여 마크업 할 수 있습니다.",
    css3: "구조에 따라 어울리는 레이아웃으로 flex, grid 등을 사용하여 배치하고, 폰트와 색상 스타일을 적용할 수 있습니다. 미디어쿼리로 반응형 웹을 구현할 수 있습니다.",
    sass: "Sass를 사용하여 CSS의 유지 보수를 용이하게 하고, 코드의 재사용성을 높일 수 있습니다.",
    javascript:
      "JavaScript를 사용하여 웹 페이지에 동적인 기능을 추가하고, 클라이언트 사이드에서 데이터 처리를 할 수 있습니다.",
    react:
      "React를 사용하여 사용자 인터페이스를 구성하고, 컴포넌트 기반 개발로 효율적인 상태 관리를 할 수 있습니다.",
    typescript:
      "TypeScript를 사용하여 정적 타입 검사를 통해 코드의 안정성을 높일 수 있습니다.",
    firebase:
      "Firebase를 사용하여 실시간 데이터베이스, 인증, 호스팅 등 다양한 백엔드 서비스를 손쉽게 통합할 수 있습니다.",
    git: "Git을 사용하여 버전 관리를 수행하고, 협업과 변경 사항 추적을 효율적으로 관리할 수 있습니다.",
    github:
      "GitHub를 사용하여 코드 저장소를 호스팅하고, 협업을 위한 pull request와 issue tracking 기능을 사용할 수 있습니다.",
    figma:
      "Figma를 사용하여 UI/UX 디자인을 작성하고, 팀원과의 실시간 협업을 통해 디자인 작업을 진행할 수 있습니다.",
    illustrator:
      "Illustrator를 사용하여 벡터 그래픽을 디자인하고, 다양한 일러스트레이션 작업을 수행할 수 있습니다.",
    photoshop:
      "Photoshop을 사용하여 이미지 편집 및 다양한 디자인 작업을 수행할 수 있습니다.",
  };

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
                <SkillTitle>
                  <h4>My skill</h4>
                </SkillTitle>
                <SkillAbout>
                  <SkillIcons>
                    {iconsList.map((iconName, idx) => {
                      const imageUrl = require(`../../assets/images/Section/About/${iconName}-icon.png`);
                      const ratio = 1; // 필요에 따라 비율 조정
                      return (
                        <SkillIcon
                          key={idx}
                          $imgUrl={imageUrl}
                          $ratio={ratio}
                          onMouseEnter={() => setHoveredSkill(iconName)}
                          onMouseLeave={() => setHoveredSkill("")}
                        />
                      );
                    })}
                  </SkillIcons>
                  <SkillTxt>
                    {skillDescriptions[hoveredSkill] || (
                      <>
                        Hover over an icon to see details
                        <br />
                        아이콘 위에 마우스를 올리면 세부 정보를 볼 수 있습니다
                      </>
                    )}
                  </SkillTxt>
                </SkillAbout>
              </ContentInner>
            </MySkills>
          </AboutContent>
        </AboutContents>
      </AboutSection>
    </BasicLayout>
  );
};

export default AboutPage;
