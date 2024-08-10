import React from "react";
import {
  SlideInner,
  SlideTitle,
  SlideContent,
  SlideVideo,
  Monitor,
  SlideTxt,
} from "./SlideCard.styled";

import browser from "../../assets/images/Section/PjEx/browserDesktop.png";

const widthMap = {
  8: "11rem",
  10: "13.5rem",
  11: "14.5rem",
  12: "16rem",
  13: "17rem",
  14: "18.3rem",
};

const getTitleWidth = (title) => {
  const length = title.length;
  // 제목 길이에 맞는 width를 반환합니다.
  return widthMap[length] || "10rem"; // 기본값
};

const SlideCard = ({ list }) => {
  const titleWidth = getTitleWidth(list.title);

  return (
    <SlideInner>
      <SlideTitle width={titleWidth}>{list.title}</SlideTitle>
      <SlideContent>
        <SlideVideo>
          <Monitor src={browser} alt="monitor" />
          <video width="100%" height="auto" autoPlay loop muted playsInline>
            <source src={list.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </SlideVideo>
        <SlideTxt>
          <p>{list.text}</p>
        </SlideTxt>
      </SlideContent>
    </SlideInner>
  );
};

export default SlideCard;
