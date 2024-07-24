import React, { useEffect, useRef } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";
import gsap from "gsap";
import homeBg from "../../assets/images/Section/Home/homeBg.png";

const Home = () => {
  const bgImageRef = useRef(null);

  useEffect(() => {
    const bgImage = bgImageRef.current;

    // 초기 위치 설정
    gsap.set(bgImage, { y: -50, opacity: 0 }); // -500

    // Timeline 생성
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // 애니메이션 정의
    tl.to(bgImage, { duration: 0.5, y: 250, opacity: 1 }) // 떨어지는 애니메이션 0
      .to(bgImage, { duration: 0.2, y: 200, repeat: 1, yoyo: true }) // 첫 번째 튕기기 -50
      .to(bgImage, { duration: 0.1, y: 225 }) // 두 번째 튕기기 -25
      .to(bgImage, { duration: 0.1, y: 250 }); // 제자리로 복귀 //0

    // Cleanup 함수
    return () => {
      tl.kill(); // 애니메이션 정리
    };
  }, []);

  return (
    <HomeContain>
      <Header />
      <HomeSecction>
        <img
          ref={bgImageRef}
          src={homeBg}
          alt="Falling"
          style={{ position: "absolute" }}
        />
      </HomeSecction>
      <Footer />
    </HomeContain>
  );
};

export default Home;

// < styled components >
const HomeContain = styled.div`
  width: 100%;
  max-width: 80%;
  height: 100vh;
  display: flex;
  justify-content: center;

  margin: 0 auto;
  overflow: hidden;
`;

const HomeSecction = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
