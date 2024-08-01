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
import gsap from "gsap"; // GSAP import
import { Draggable, TextPlugin } from "gsap/all"; // Draggable 및 TextPlugin import
import homeBg from "../../assets/images/Section/Home/homeBg.png";
import {
  HomeContain,
  HomeSection,
  HomeImgs,
  HomeTitles,
  HomeBg,
  HomeSky,
  Star,
  Moon,
  MoonShape,
  Meteoro,
  HomeTitle,
} from "./Home.styled";

// 필요한 플러그인 등록
gsap.registerPlugin(Draggable, TextPlugin);

const Home = () => {
  const bgImageRef = useRef(null);
  const typewriterRef = useRef(null);

  useEffect(() => {
    const bgImage = bgImageRef.current;
    const typewriter = typewriterRef.current;

    // 초기 위치 설정
    gsap.set(bgImage, { y: -500, opacity: 0 });

    // Draggable을 이용한 배경 이미지 애니메이션 설정
    const draggable = Draggable.create(bgImage, {
      type: "y", // 수직 이동 설정
      edgeResistance: 0.65, // 가장자리 저항 설정
      bounds: HomeSection, // 움직임 제한할 요소 설정
      throwProps: true, // 던지기 효과 활성화
    });

    // 배경 이미지 애니메이션 정의
    const tlBackground = gsap.timeline({ defaults: { ease: "power2.out" } });
    tlBackground
      .to(bgImage, { duration: 0.2, y: 0, opacity: 1 })
      .to(bgImage, { duration: 0.3, y: -200, repeat: 1, yoyo: true })
      .to(bgImage, { duration: 0.1, y: 0 })
      .to(bgImage, { duration: 0.2, y: -80 })
      .to(bgImage, { duration: 0.2, y: 0 })
      .call(startTypewriterAnimation); // 타이핑 애니메이션 시작을 호출

    function startTypewriterAnimation() {
      // 타이핑 효과 애니메이션 정의
      const textBr = `<br>`;
      const text = "Dream of" + textBr + "Becoming" + textBr + "A Developer";
      const tlTypewriter = gsap.timeline({ defaults: { ease: "power2.out" } });
      tlTypewriter.to(typewriter, {
        opacity: 1,
        duration: text.length * 0.2,
        text: {
          value: text,
          delimiter: "",
          padSpace: true, // 각 글자 사이에 공백 추가
        },
      });
    }

    // Cleanup 함수
    return () => {
      draggable[0].kill(); // Draggable 애니메이션 정리
      tlBackground.kill(); // 배경 이미지 애니메이션 정리
    };
  }, []);

  return (
    <HomeContain>
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
          <HomeTitle ref={typewriterRef}></HomeTitle>
        </HomeTitles>
      </HomeSection>
      <div style={{ height: "1000vh" }}></div>
    </HomeContain>
  );
};

export default Home;
