import React, { useEffect, useRef } from "react";
import gsap from "gsap"; // GSAP import
import { Draggable, TextPlugin } from "gsap/all"; // Draggable 및 TextPlugin import
import homeBg from "../../assets/images/Section/Home/homeBg.png";
import homeW2 from "../../assets/images/Section/Home/homeW2.png";
import {
  HomeContain,
  HomeSection,
  HomeImgs,
  HomeTitles,
  HomeBg,
  HomeImg,
  HomeTitle,
} from "./Home.styled";

// 필요한 플러그인 등록
gsap.registerPlugin(Draggable, TextPlugin);

const Home = () => {
  const bgImageRef = useRef(null);
  const typewriterRef = useRef(null);
  const movingImgRef = useRef(null);

  useEffect(() => {
    const bgImage = bgImageRef.current;
    const typewriter = typewriterRef.current;
    const movingImg = movingImgRef.current;

    // 초기 위치 설정
    gsap.set(bgImage, { y: -500, opacity: 0 });
    gsap.set(movingImg, { x: "100%", opacity: 1 });

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
      .call(startTypewriterAnimation) // 타이핑 애니메이션 시작을 호출
      .call(startMovingImgAnimation); // 이미지 이동 애니메이션 시작을 호출

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

    function startMovingImgAnimation() {
      // 이미지 이동 애니메이션 정의
      const startX = "100%"; // 시작 위치 (화면의 오른쪽)
      const endX = "-100%"; // 끝나는 위치 (화면의 왼쪽)
      const duration = 10; // 애니메이션 전체 시간

      const tlMovingImg = gsap.timeline({ repeat: -1, repeatDelay: 0 });
      tlMovingImg
        .to(movingImg, {
          duration: duration,
          x: endX,
          opacity: 1,
          ease: "power2.linear",
        })
        .to(movingImg, {
          duration: 0.5,
          opacity: 0,
          ease: "power2.out",
        })
        .set(movingImg, { x: startX }) // 애니메이션이 끝나면 다시 시작 위치로 설정
        .to(movingImg, {
          duration: 0.5,
          opacity: 1,
          ease: "power2.in",
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
        <HomeBg ref={bgImageRef} src={homeBg} alt="Falling" />
        {/* <HomeImgs>
        </HomeImgs> */}
        <HomeImg ref={movingImgRef} src={homeW2} />
        <HomeTitles>
          <HomeTitle ref={typewriterRef}></HomeTitle>
        </HomeTitles>
      </HomeSection>
    </HomeContain>
  );
};

export default Home;
