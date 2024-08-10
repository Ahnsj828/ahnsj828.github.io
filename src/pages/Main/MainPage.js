import React, { useEffect, useRef } from "react";
import gsap from "gsap"; // GSAP import
import { Draggable, TextPlugin } from "gsap/all"; // Draggable 및 TextPlugin import
import mainBg from "../../assets/images/Section/Main/mainBg.png";
import mainW2 from "../../assets/images/Section/Main/mainW2.png";

import {
  MainSection,
  MainBg,
  MainImg,
  MainTitles,
  MainTitle,
} from "./MainPage.styled";

// 필요한 플러그인 등록
gsap.registerPlugin(Draggable, TextPlugin);

const MainPage = () => {
  const bgImageRef = useRef(null);
  const typewriterRef1 = useRef(null);
  const typewriterRef2 = useRef(null);
  const typewriterRef3 = useRef(null);
  const movingImgRef = useRef(null);

  useEffect(() => {
    const bgImage = bgImageRef.current;
    const typewriter1 = typewriterRef1.current;
    const typewriter2 = typewriterRef2.current;
    const typewriter3 = typewriterRef3.current;
    const movingImg = movingImgRef.current;

    // 초기 위치 설정
    gsap.set(bgImage, { y: -500, opacity: 0 });
    gsap.set(movingImg, { x: "100%", opacity: 0 }); // 출발 위치를 오른쪽 100%로 설정하고 opacity를 0으로 설정

    // Draggable을 이용한 배경 이미지 애니메이션 설정
    const draggable = Draggable.create(bgImage, {
      type: "y", // 수직 이동 설정
      edgeResistance: 0.65, // 가장자리 저항 설정
      bounds: MainSection, // 움직임 제한할 요소 설정
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
      .call(startTypewriterAnimations) // 타이핑 애니메이션 시작
      .call(startMovingImgAnimation); // 이미지 이동 애니메이션 시작

    function startTypewriterAnimations() {
      // 타이핑 애니메이션 타임라인 정의
      const tlTypewriter = gsap.timeline({ defaults: { ease: "power2.out" } });

      const typewriterDuration = 1.5; // 타이핑 효과의 지속 시간 (초 단위)
      const delayBetweenTexts = 0.1; // 각 타이핑 애니메이션 사이의 지연 시간 (초 단위)

      tlTypewriter
        .to(typewriter1, {
          opacity: 1,
          duration: typewriterDuration, // 텍스트 애니메이션 지속 시간
          text: {
            value: "Dream of",
            delimiter: "",
            padSpace: true,
          },
        })
        .to(
          typewriter2,
          {
            opacity: 1,
            duration: typewriterDuration, // 텍스트 애니메이션 지속 시간
            text: {
              value: "Becoming",
              delimiter: "",
              padSpace: true,
            },
          },
          `+=${delayBetweenTexts}` // 이전 애니메이션이 끝난 후 지연 시간
        )
        .to(
          typewriter3,
          {
            opacity: 1,
            duration: typewriterDuration, // 텍스트 애니메이션 지속 시간
            text: {
              value: "A Developer",
              delimiter: "",
              padSpace: true,
            },
          },
          `+=${delayBetweenTexts}` // 이전 애니메이션이 끝난 후 지연 시간
        );
    }

    function startMovingImgAnimation() {
      // 이미지 이동 애니메이션 정의
      const startX = "100%"; // 시작 위치 (화면의 오른쪽)
      const endX = "-400%"; // 끝나는 위치 (화면의 왼쪽)
      const duration = 18; // 애니메이션 전체 시간

      const tlMovingImg = gsap.timeline({
        repeat: -1,
        repeatDelay: 0,
      });

      tlMovingImg
        // 이동 시작 시 천천히 나타나기
        .to(movingImg, {
          duration: duration * 0.15, // 전체 시간의 15%
          x: "7%", // 전체 거리의 10%만큼 이동
          opacity: 1, // 완전히 나타나도록 설정
          ease: "linear",
        })
        // 이동하며 opacity를 유지
        .to(movingImg, {
          duration: duration * 0.75, // 전체 시간의 70%
          x: "-370%", // 전체 거리 이동
          opacity: 1, // opacity 유지
          ease: "linear",
        })
        // 마지막 10%에서 천천히 사라지기
        .to(movingImg, {
          duration: duration * 0.1, // 전체 시간의 10%
          x: endX,
          opacity: 0, // 완전히 사라지도록 설정
          ease: "linear",
        })
        .set(movingImg, { x: startX, opacity: 0 }); // 애니메이션이 끝나면 다시 시작 위치로 설정 및 opacity 초기화
    }

    // Cleanup 함수
    return () => {
      draggable[0].kill(); // Draggable 애니메이션 정리
      tlBackground.kill(); // 배경 이미지 애니메이션 정리
    };
  }, []);

  return (
    <MainSection>
      <MainBg ref={bgImageRef} src={mainBg} alt="Falling" />
      <MainImg ref={movingImgRef} src={mainW2} />
      <MainTitles>
        <MainTitle ref={typewriterRef1}></MainTitle>
        <MainTitle ref={typewriterRef2}></MainTitle>
        <MainTitle ref={typewriterRef3}></MainTitle>
      </MainTitles>
    </MainSection>
  );
};

export default MainPage;
