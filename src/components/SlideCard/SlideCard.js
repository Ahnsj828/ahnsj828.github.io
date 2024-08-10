import React from "react";
import {
  SlideContent,
  SlidePic,
  SlideTitle,
  SlideTxt,
  SlideInner,
} from "./SlideCard.styled";

const SlideCard = ({ list }) => {
  return (
    <SlideInner>
      <SlideTitle>
        <h4>{list.title}</h4>
      </SlideTitle>
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
