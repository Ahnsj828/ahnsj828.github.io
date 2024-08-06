import React, { useState } from "react";

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
      "웹 표준을 준수하며, 구조화된 마크업을 통해 시맨틱 태그와 새로운 기능을 활용하여 효과적으로 웹 페이지를 설계할 수 있습니다.",
    css3: "CSS3를 활용하여 레이아웃, 색상, 폰트, 애니메이션 등 시각적 요소를 제어할 수 있습니다. Flexbox와 Grid 레이아웃으로 적절한 배치를 구현하고, 미디어 쿼리를 통해 반응형 웹 디자인을 효과적으로 구현할 수 있습니다.",
    sass: "Sass를 활용하여 CSS의 기능을 확장하고, 변수, 중첩 규칙, 믹스인 등을 통해 코드의 재사용성을 높이며, 복잡한 스타일 시트를 효율적으로 관리할 수 있습니다. 이를 통해 유지 보수를 용이하게 하고, 스타일링 작업을 더 효과적으로 수행할 수 있습니다.",
    javascript:
      "JavaScript를 활용하여 웹 페이지에 동적인 기능을 추가하고, 사용자 입력에 실시간으로 반응할 수 있습니다. 객체와 배열 등 자료구조를 이해하고 있으며, 외부 API 데이터를 능숙하게  활용하기 위해 꾸준히 학습하고 있습니다. 다양한 라이브러리와 프레임워크를 통해 효율적으로 작업하고 있습니다.",
    react:
      "React를 활용하여 사용자 인터페이스를 구축하며, 컴포넌트 기반 개발을 통해 효율적이고 재사용 가능한 UI를 작성하고 가상 DOM을 사용해 성능을 최적화합니다. 컴포넌트 기반 작업과 다양한 라이브러리 및 프레임워크 사용 경험이 있으며, 현재는 React를 더욱 능숙하게 다루기 위해 지속적으로 공부하고 있습니다.",
    typescript:
      "타입스크립트를 활용하여 정적 타입 지정과 코드 오류 감지, 최신 ECMAScript 기능 구현을 해보았지만, 아직 관련 지식이 부족하여 현재는 지속적으로 공부하고 있습니다.",
    firebase:
      "Firebase를 활용하여 웹 애플리케이션을 지정 도메인으로 배포하고 수정한 경험이 있습니다. 현재는 Firebase의 실시간 데이터베이스, 인증 등의 추가 기능을 탐색하고 공부하고 있습니다.",
    git: "Git을 활용하여 소스 코드의 버전을 관리하고, VS Code를 사용하여 작업물을 Git에 업로드할 수 있습니다. 다양한 브랜치와 커밋을 통해 팀과의 협업을 원활하게 진행하려고 노력하며, Git의 다양한 기능을 익히기 위해 지속적으로 탐색하고 있습니다.",
    github:
      "GitHub를 활용하여 코드 저장소를 호스팅하고, 작업물을 VS Code로 GitHub에 업로드하고 공유할 수 있습니다. 다양한 브랜치와 커밋을 통해 팀과의 협업을 원활하게 진행하도록 노력하고 있으며, 새로운 기능들을 찾아보면서 시도하고 있습니다.",
    figma:
      "Figma를 활용하여 UI/UX 디자인을 작성하고, 실시간 협업을 통해 팀원과 함께 작업할 수 있습니다. 벡터 그래픽스 편집과 프로토타입 기능을 이용해 웹 페이지 레이아웃을 효과적으로 설계하며, 디자인 작업을 체계적으로 진행할 수 있습니다.",
    illustrator:
      "Illustrator를 사용하여 벡터 그래픽 디자인과 로고, 아이콘, 일러스트레이션 작업을 수행할 수 있으며, 정밀한 디자인 작업과 다양한 도구 활용에 능숙합니다. 또한, GTQi(그래픽기술자격 일러스트) 1급 자격증을 보유하고 있습니다.",
    photoshop:
      "Photoshop을 사용하여 이미지 수정, 색상 보정, 합성 등 다양한 이미지 편집 작업을 수행할 수 있습니다. GTQ(그래픽기술자격) 1급 자격증을 보유하고 있으며, 이를 통해 다양한 디자인 작업을 효과적으로 처리할 수 있습니다.",
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
                      const ratio = 1; // 비율 조정
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
                        아이콘 위에 마우스를 올리면 세부 정보를 볼 수 있습니다.
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
