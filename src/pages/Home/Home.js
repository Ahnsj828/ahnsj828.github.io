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
import gsap from "gsap";
import { Physics2DPlugin } from "gsap/Physics2DPlugin"; // Physics2DPlugin 추가
import homeBg from "../../assets/images/Section/Home/homeBg.png";
import {
  HomeContain,
  HomeSection,
  HomeImgs,
  HomeTitles,
  HomeBg,
} from "./Home.styled";

// GSAP 플러그인 등록
gsap.registerPlugin(Physics2DPlugin);

const Home = () => {
  const bgImageRef = useRef(null);

  useEffect(() => {
    const bgImage = bgImageRef.current;

    // 초기 위치 설정
    gsap.set(bgImage, { y: -70, opacity: 0 });

    // Physics2DPlugin을 이용한 자연스러운 애니메이션 설정
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // 애니메이션 정의
    tl.to(bgImage, {
      duration: 0.2,
      y: 0,
      opacity: 1,
      physics2D: {
        velocity: "random(300, 400)",
        angle: 60,
        gravity: 1200,
        friction: 0.9,
      },
    })
      .to(bgImage, {
        duration: 0.3,
        y: -35,
        repeat: 1,
        yoyo: true,
        physics2D: {
          velocity: "random(200, 300)",
          angle: 60,
          gravity: 1200,
          friction: 0.9,
        },
      })
      .to(bgImage, {
        duration: 0.2,
        y: 0,
        physics2D: {
          velocity: "random(150, 250)",
          angle: 60,
          gravity: 1200,
          friction: 0.9,
        },
      })
      .to(bgImage, {
        duration: 0.3,
        y: -17,
        physics2D: {
          velocity: "random(100, 200)",
          angle: 60,
          gravity: 1200,
          friction: 0.9,
        },
      })
      .to(bgImage, {
        duration: 0.1,
        y: 0,
        physics2D: {
          velocity: 0,
          angle: 0,
          gravity: 0,
          friction: 1,
        },
      });

    // Cleanup 함수
    return () => {
      tl.kill(); // 애니메이션 정리
    };
  }, []);

  return (
    <HomeContain>
      <Header />
      <HomeSection>
        <HomeImgs>
          <HomeBg ref={bgImageRef} src={homeBg} alt="Falling" />
        </HomeImgs>
        <HomeTitles></HomeTitles>
      </HomeSection>
      <Footer />
    </HomeContain>
  );
};

export default Home;
