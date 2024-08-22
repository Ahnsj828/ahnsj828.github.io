import linkImage from "../images/Section/PjEx/link.png";
import githubImage from "../images/Section/PjEx/github.png";
import figmaImage from "../images/Section/PjEx/figma.png";

const list = [
  {
    id: 1,
    type: "pj",
    title: "Etude House", // 10글자에 띄어쓰기 포함 총 11글자
    text: "에뛰드하우스 웹 페이지를 클론 코딩하여 다양한 시각적 효과와 인터랙션을 재현하고, 사용자 친화적인 UI/UX를 구현했습니다. 주요 기능으로는 무한 자동 슬라이드, 지정된 시간 동안 번갈아 가며 표시되는 문구, 마우스오버 효과, 상세 페이지, 검색 및 필터링, 그리고 반응형 디자인이 포함됩니다.",
    video: "/assets/videos/etude.mp4",
    useTool: ["HTML", "CSS", "JavaScript", "Figma", "Git-Hub"],
    pageLink: "https://etude-boo-0329.web.app/index.html",
    pageLinkImage: linkImage,
    githubLink: "https://github.com/Ahnsj828/Team_Project_001_bbo",
    githubLinkImage: githubImage,
    figmaLink:
      "https://www.figma.com/design/uOnvLomTZL54P88OX81mFO/%EC%A0%84%EC%B7%A8%EB%BD%80?node-id=0-1&m=dev&t=24ZGCncV3HbBUYR5-1",
    figmaLinkImage: figmaImage,
  },
  {
    id: 2,
    type: "pj",
    title: "Yeogi Uhddae", // 11글자에 띄어쓰기 포함 총 12글자
    // text: "sadlkjsadkljsadssa",
    video: "/assets/videos/yeogi.mp4",
    useTool: ["HTML", "CSS", "JavaScript", "Firebase"],
    pageLink: "https://comehere-project.web.app/",
    pageLinkImage: linkImage,
  },
  {
    id: 3,
    type: "pj",
    title: "corporate page", // 13글자에 띄어쓰기 포함 총 14자
    // text: "sadlkjsadkljsadssa",
    video: "/assets/videos/corporate.mp4",
    useTool: [
      "HTML",
      "CSS",
      "JavaScript",
      "slick slider",
      "featherlight",
      "scrollto",
      "Firebase",
    ],
    pageLink: "https://architecture-agency-114af.web.app/",
    pageLinkImage: linkImage,
  },
  {
    id: 4,
    type: "pj",
    title: "Shopping Page", // 12글자에 띄어쓰기 포함 총 13자
    // text: "sadlkjsadkljsadssa",
    video: "/assets/videos/shopping.mp4",
    useTool: [
      "React",
      "React-Router",
      "Redux-Thunk",
      "Json Server",
      "Netlify",
      "styled-components",
    ],
    pageLink: "https://master--musinsashop.netlify.app/",
    pageLinkImage: linkImage,
    githubLink: "https://github.com/Ahnsj828/musinsashopping",
    githubLinkImage: githubImage,
  },
  {
    id: 5,
    type: "ex",
    title: "tab menu", // 7글자에 띄어쓰기 포함 총 8자
    // text: "sadlkjsadkljsadssa",
    video: "/assets/videos/tabMenu.mp4",
    useTool: ["HTML", "CSS", "JavaScript", "Firebase", "Figma", "Illustrator"],
    pageLink: "https://tabmenu-pet.web.app/",
    pageLinkImage: linkImage,
    githubLink: "https://github.com/Ahnsj828/tab_menu",
    githubLinkImage: githubImage,
    figmaLink:
      "https://www.figma.com/design/zlMyjba4e322zTe6LW0jZf/Tab-Menu?node-id=0-1&m=dev&t=8w8vzNjwNNzFo4m1-1",
    figmaLinkImage: figmaImage,
  },
  {
    id: 6,
    type: "ex",
    title: "naver login", // 10글자에 띄어쓰기 포함 총 11자
    text: "일부 디자인을 변경한 네이버 로그인 클론 코딩한 예제입니다.",
    video: "/assets/videos/naverLogin.mp4",
    useTool: ["HTML", "CSS", "JavaScript", "Firebase", "Figma", "Photoshop"],
    pageLink: "https://naver-log-in.web.app/",
    pageLinkImage: linkImage,
    githubLink: "https://github.com/Ahnsj828/naver_login",
    githubLinkImage: githubImage,
    figmaLink:
      "https://www.figma.com/design/YgTaAL30PpGrZE05mykgzv/Log-in?node-id=0-1&m=dev&t=aaukuFtAE4MjmfjI-1",
    figmaLinkImage: figmaImage,
  },
  {
    id: 7,
    type: "ex",
    title: "To do list", // 8글자에 띄어쓰기 포함 총 10자
    text: "로컬 스토리지에 저장되는 To Do List입니다.",
    video: "/assets/videos/toDoList.mp4",
    useTool: ["HTML", "CSS", "JavaScript", "Figma", "Firebase"],
    pageLink: "https://to-do-list-with-js.web.app/",
    pageLinkImage: linkImage,
    githubLink: "https://github.com/Ahnsj828/ToDoList-JavaScript",
    githubLinkImage: githubImage,
    figmaLink:
      "https://www.figma.com/design/SFU6V5ZANKbuVlO2tJr0p2/To-Do-List?node-id=0-1&t=qxfFmqgSMfr6ziFc-1",
    figmaLinkImage: figmaImage,
  },
  {
    id: 8,
    type: "ex",
    title: "Navigation", // 총 10자
    // text: "sadlkjsadkljsadssa",
    video: "/assets/videos/navigation.mp4",
    useTool: ["HTML", "CSS", "JavaScript", "Photoshop", "Firebase"],
    pageLink: "https://navigation-responsive.web.app/",
    pageLinkImage: linkImage,
    githubLink: "https://github.com/Ahnsj828/Navigation",
    githubLinkImage: githubImage,
    figmaLink:
      "https://www.figma.com/design/TpSpMDKOkrFGGxgEDXf52O/Navigation?node-id=0-1&m=dev&t=vsCaPxDXmLKBur1y-1",
    figmaLinkImage: figmaImage,
  },
];

export default list;

// 10글자에 띄어쓰기 포함 총 11글자
// 11글자에 띄어쓰기 포함 총 12글자
// 13글자에 띄어쓰기 포함 총 14자
// 12글자에 띄어쓰기 포함 총 13자
// 7글자에 띄어쓰기 포함 총 8자
// 10글자에 띄어쓰기 포함 총 11자
// 8글자에 띄어쓰기 포함 총 10자
// 총 10자

// const titleWidth = list.title.length > 11 ? "16rem" : "14.5rem"; // 제목 길이에 따라 width 조정
