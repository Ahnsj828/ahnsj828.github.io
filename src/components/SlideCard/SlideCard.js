import React from "react";
import {
  SlideContent,
  SlidePic,
  SlideTitle,
  SlideTxt,
  SlideInner,
} from "./SlideCard.styled";

const SlideCard = ({ list }) => {
  // 동적 스타일 값을 정의합니다. 예를 들어, 제목 길이에 따라 다르게 설정할 수 있습니다.
  const titleWidth = list.title.length > 11 ? "16rem" : "14.5rem"; // 제목 길이에 따라 width 조정
  // const titlePaddingLeft = list.title.length > 10 ? "0.3rem" : "0.3rem";

  return (
    <SlideInner>
      {/* <SlideTitle width={titleWidth} paddingLeft={titlePaddingLeft}> */}
      <SlideTitle width={titleWidth}>{list.title}</SlideTitle>
      <SlideContent>
        <SlidePic>
          <video width="100%" height="auto" autoPlay loop muted playsInline>
            <source src={list.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </SlidePic>
        <SlideTxt>
          <p>{list.text}</p>
        </SlideTxt>
      </SlideContent>
    </SlideInner>
  );
};

export default SlideCard;
