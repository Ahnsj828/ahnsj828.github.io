import React, { useState, useEffect } from "react";
import gsap from "gsap";

import contactBg from "../../assets/images/Section/Contact/contactBg.png";
import contactC from "../../assets/images/Section/Contact/contactC.png";
import contactG from "../../assets/images/Section/Contact/contactG.png";

import {
  ContactSection,
  ContactImgs,
  ContactnBg,
  ContactCar,
  ContactGrass,
  ContactICons,
  ContactICon,
  PhoneIcon,
  MailIcon,
  GithubIcon,
  IConTxt,
  StyledLink,
} from "./ContactPage.styled";

const ContactPage = () => {
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    // ContactSection 애니메이션
    gsap.fromTo(
      ".contact-section",
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 1.5, ease: "power2.inOut" }
    );

    // ContactCar 애니메이션
    const startMovingImgAnimation = () => {
      const startX = "100%"; // 시작 위치 (화면의 오른쪽)
      const endX = "-430%"; // 끝나는 위치 (화면의 왼쪽)
      const duration = 7; // 애니메이션 전체 시간

      const tlMovingImg = gsap.timeline({
        repeat: -1, // 무한 반복
        repeatDelay: 0, // 반복 간격 없음
      });

      tlMovingImg
        // 왼쪽으로 조금 이동하며 opacity를 1로 설정
        .to(".contact-car", {
          duration: duration * 0.1, // 전체 시간의 10%
          x: "-30%", // 애니메이션이 시작될 위치
          opacity: 1, // 완전히 나타나도록 설정
          ease: "linear",
        })
        // 이동하며 opacity를 유지
        .to(".contact-car", {
          duration: duration * 0.75, // 전체 시간의 75%
          x: "-380%", // 화면 왼쪽으로 이동
          opacity: 1, // opacity 유지
          ease: "linear",
        })
        // 마지막 10%에서 천천히 사라지기
        .to(".contact-car", {
          duration: duration * 0.1, // 전체 시간의 10%
          x: endX, // 애니메이션이 끝난 위치
          opacity: 0, // 완전히 사라지도록 설정
          ease: "linear",
        })
        .set(".contact-car", { x: startX, opacity: 0 }); // 애니메이션이 끝나면 다시 시작 위치로 설정 및 opacity 초기화
    };

    startMovingImgAnimation(); // 애니메이션 함수 호출
  }, []);

  return (
    <ContactSection className="contact-section">
      <ContactImgs>
        <ContactnBg src={contactBg} />
        <ContactCar
          className="contact-car"
          src={contactC}
          style={{ opacity: 0 }}
        />
        <ContactGrass src={contactG} />
      </ContactImgs>
      <ContactICons>
        <ContactICon
          onMouseEnter={() => setHovered("phone")}
          onMouseLeave={() => setHovered(null)}
        >
          <StyledLink to="tel:+8210-8768-8028">
            <PhoneIcon />
            <IConTxt $show={hovered === "phone"}>010 - 8768 - 8028</IConTxt>
          </StyledLink>
        </ContactICon>
        <ContactICon
          onMouseEnter={() => setHovered("mail")}
          onMouseLeave={() => setHovered(null)}
        >
          <StyledLink to="mailto:ala828@naver.com">
            <MailIcon />
            <IConTxt $show={hovered === "mail"}>ala828@naver.com</IConTxt>
          </StyledLink>
        </ContactICon>
        <ContactICon
          onMouseEnter={() => setHovered("github")}
          onMouseLeave={() => setHovered(null)}
        >
          <StyledLink
            to="https://github.com/Ahnsj828"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
            <IConTxt $show={hovered === "github"}>GitHub : Ahnsj828</IConTxt>
          </StyledLink>
        </ContactICon>
      </ContactICons>
    </ContactSection>
  );
};

export default ContactPage;
