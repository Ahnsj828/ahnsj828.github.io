// < props로 전달하는 방법 >
// import React from "react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "./introduce.css";
// import {
//   IntroContain,
//   IntroSection,
//   MyPic,
//   AboutMe,
//   ToolIconBox,
//   ToolIconTitle,
//   ToolIcons,
//   ToolIcon,
//   ToolIntroduce,
// } from "./Introduce.styled";

// import HTML from "../../assets/images/Section/Introduce/HTML5_logo.png";

// const Introduce = () => {
//   return (
//     <IntroContain>
//       <IntroSection>
//         <MyPic></MyPic>
//         <AboutMe>
//           <ToolIconBox>
//             <ToolIconTitle>
//               My Skill<b>.</b>
//             </ToolIconTitle>
//             <ToolIcons>
//               <ToolIcon $HTML={HTML} />
//               <ToolIcon $HTML={HTML} />
//               <ToolIcon $HTML={HTML} />
//               <ToolIcon $HTML={HTML} />
//               <ToolIcon $HTML={HTML} />
//             </ToolIcons>
//           </ToolIconBox>
//           <ToolIntroduce></ToolIntroduce>
//         </AboutMe>
//       </IntroSection>
//     </IntroContain>
//   );
// };

// export default Introduce;

// < map함수 활용 하는 방법 >
import React from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./introduce.css";
import {
  IntroContain,
  IntroSection,
  MyPic,
  AboutMe,
  ToolIconBox,
  ToolIconTitle,
  ToolIcons,
  ToolIcon,
  ToolIntroduce,
} from "./Introduce.styled";

const Introduce = () => {
  const iconsList = ["CSS3", "Figma", "Firebase", "github"];

  return (
    <IntroContain>
      <IntroSection>
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
      </IntroSection>
    </IntroContain>
  );
};

export default Introduce;
