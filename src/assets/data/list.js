import linkImage from "../images/Section/PjEx/link.png";
import githubImage from "../images/Section/PjEx/github.png";
import figmaImage from "../images/Section/PjEx/figma.png";

const list = [
  {
    id: 1,
    type: "pj",
    title: "Etude House", // 10글자에 띄어쓰기 포함 총 11글자
    text: "에뛰드하우스 웹 페이지를 클론 코딩하여 다양한 시각적 효과와 인터랙션을 재현하고, 사용자 친화적인 UI/UX를 구현했습니다. 주요 기능으로는 무한 자동 슬라이드, 지정된 시간 동안 번갈아 가며 표시되는 문구, 마우스오버 효과, 상세 페이지, 필터링, 그리고 반응형 디자인이 포함됩니다.",
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
    text: "‘여기어때’ 페이지를 클론 코딩하여, 스크롤 시 고정된 헤더와 배경 및 글자 색 변화 효과를 구현했습니다. 또한, 반응형 디자인을 적용하여 태블릿 사이즈부터 메뉴를 토글 버튼으로 변경하고, 버튼 클릭 시 오른쪽에서 왼쪽으로 메뉴가 슬라이드되도록 구현했습니다.",
    video: "/assets/videos/yeogi.mp4",
    useTool: ["HTML", "CSS", "JavaScript", "Firebase"],
    pageLink: "https://comehere-project.web.app/",
    pageLinkImage: linkImage,
  },
  {
    id: 3,
    type: "pj",
    title: "corporate page", // 13글자에 띄어쓰기 포함 총 14자
    text: "기업 페이지를 클론 코딩하여, Slick Slider, Featherlight, ScrollTo 등의 기능을 활용한 다양한 시각적 효과와 인터랙션을 구현했습니다. 반응형 디자인을 적용하였고, 토글 기능을 통해 모바일에서 메뉴를 간편하게 사용할 수 있도록 했습니다.",
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
    text: "쇼핑몰 페이지를 구현하여, 로그인 후 제품의 상세 정보를 볼 수 있습니다. 검색 기능을 통해 관련 제품을 쉽게 찾을 수 있도록 구현했습니다.",
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
    text: "텝 메뉴 예제를 구현하여, 사용자가 각 탭을 클릭할 때 해당 탭에 맞는 콘텐츠가 동적으로 표시되도록 설계했습니다. 직관적인 인터페이스와 부드러운 전환 효과를 통해 사용자 경험을 향상시키는 데 중점을 두었습니다.",
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
    text: "일부 디자인을 변경한 네이버 로그인 클론 코딩한 예제입니다. 로그인 필드 미작성 시 알림 메시지를 추가했습니다. QR 코드 로그인 기능에 랜덤 숫자와 시간 제한 기능을 구현했으며, 배너 광고는 랜덤으로 표시되도록 설정했습니다.",
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
    text: "JavaScript를 활용한 ToDo List 애플리케이션입니다. 사용자가 입력한 할 일 항목이 'To Do' 목록에 추가됩니다. 항목은 드래그하여 'Doing' 또는 'Done'으로 이동할 수 있습니다. 로컬 스토리지에 저장되어 페이지 새로고침 시에도 데이터가 유지됩니다. 마우스 우클릭 시 항목을 삭제할 수 있습니다.",
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
    text: "헤더 메뉴와 아이콘에 마우스 오버 시 시각적 효과를 추가하여 사용자 인터랙션을 강화했습니다. 반응형 디자인을 적용해 태블릿 사이즈부터는 메뉴가 사라지고, 토글 버튼을 통해 메뉴가 오른쪽에서 왼쪽으로 슬라이드하여 나타나고 사라지는 기능을 구현했습니다.",
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
