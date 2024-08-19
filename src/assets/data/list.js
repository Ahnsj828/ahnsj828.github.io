import linkImage from "../images/Section/PjEx/link.png";
import githubImage from "../images/Section/PjEx/github.png";
import figmaImage from "../images/Section/PjEx/figma.png";

const list = [
  {
    id: 1,
    type: "pj",
    title: "Etude House", // 10글자에 띄어쓰기 포함 총 11글자
    text: "sadlkjsadkljsadssa",
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
    text: "sadlkjsadkljsadssa",
    video: "/assets/videos/yeogi.mp4",
    useTool: ["HTML", "CSS", "JavaScript", "Firebase"],
    pageLink: "https://comehere-project.web.app/",
    pageLinkImage: linkImage,
  },
  {
    id: 3,
    type: "pj",
    title: "corporate page", // 13글자에 띄어쓰기 포함 총 14자
    text: "sadlkjsadkljsadssa",
    video: "/assets/videos/corporate.mp4",
    useTool: ["HTML", "CSS", "JavaScript", "Firebase"],
    pageLink: "https://architecture-agency-114af.web.app/",
    pageLinkImage: linkImage,
  },
  {
    id: 4,
    type: "pj",
    title: "Shopping Page", // 12글자에 띄어쓰기 포함 총 13자
    text: "sadlkjsadkljsadssa",
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
    text: "sadlkjsadkljsadssa",
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
    text: "sadlkjsadkljsadssa",
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
    text: "sadlkjsadkljsadssa",
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
    text: "sadlkjsadkljsadssa",
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
