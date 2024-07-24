// import React, { useEffect, useRef } from "react";
// import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
// import gsap from "gsap";
// import homeBg from "../../assets/images/Section/Home/homeBg.png";
// import {
//   HomeContain,
//   HomeSection, // 수정: HomeSection 추가
//   HomeImgs,
//   HomeTitles,
//   HomeBg,
// } from "./Home.styled";

// const Home = () => {
//   const bgImageRef = useRef(null);

//   useEffect(() => {
//     const bgImage = bgImageRef.current;

//     // 초기 위치 설정
//     gsap.set(bgImage, { y: -70, opacity: 0 });

//     // Timeline 생성
//     const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

//     // 애니메이션 정의
//     tl.to(bgImage, { duration: 0.2, y: 0, opacity: 1 })
//       .to(bgImage, { duration: 0.3, y: -35, repeat: 1, yoyo: true })
//       .to(bgImage, { duration: 0.2, y: 0 })
//       .to(bgImage, { duration: 0.3, y: -17 })
//       .to(bgImage, { duration: 0.1, y: 0 });

//     // Cleanup 함수
//     return () => {
//       tl.kill(); // 애니메이션 정리
//     };
//   }, []);

//   return (
//     <HomeContain>
//       <Header />
//       <HomeSection>
//         <HomeImgs>
//           <HomeBg ref={bgImageRef} src={homeBg} alt="Falling" />
//         </HomeImgs>
//         <HomeTitles></HomeTitles>
//       </HomeSection>
//       <Footer />
//     </HomeContain>
//   );
// };

// export default Home;

// ========================================================
import React, { useEffect, useRef } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { gsap, TextPlugin } from "gsap/all";
import homeBg from "../../assets/images/Section/Home/homeBg.png";
import {
  HomeContain,
  HomeSection,
  HomeImgs,
  HomeBg,
  HomeSky,
  Star,
  Moon,
  MoonShape,
  Meteoro,
  HomeTitle,
} from "./Home.styled";

gsap.registerPlugin(TextPlugin);

const Home = () => {
  const bgImageRef = useRef(null);
  const typewriterRef = useRef(null);

  useEffect(() => {
    const bgImage = bgImageRef.current;

    // 초기 위치 설정
    gsap.set(bgImage, { y: -500, opacity: 0 });

    // Draggable을 이용한 애니메이션 설정
    // ...

    // 애니메이션 정의
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // 드래깅 애니메이션 추가
    // ...

    return () => {
      // Cleanup 함수
      // ...
    };
  }, []);

  useEffect(() => {
    const typewriter = typewriterRef.current;

    // Initialize the text plugin and create the timeline
    gsap.to(typewriter, {
      duration: 1.5,
      text: {
        value: "Dream of",
        ease: "none",
        delimiter: "",
      },
    });
  }, []);

  return (
    <HomeContain>
      <Header />
      <HomeSection>
        <HomeImgs>
          <HomeBg ref={bgImageRef} src={homeBg} alt="Falling" />
          <HomeSky>
            <Star></Star>
            <Moon>
              <MoonShape></MoonShape>
            </Moon>
            <Meteoro></Meteoro>
          </HomeSky>
        </HomeImgs>
        <HomeTitles>
          <div ref={typewriterRef} className="typewriter"></div>
        </HomeTitles>
      </HomeSection>
      <Footer />
    </HomeContain>
  );
};

export default Home;
