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
        <h4>Yeogi Clone Coding</h4>
      </SlideTitle>
      <SlideContent>
        <SlidePic></SlidePic>
        <SlideTxt>
          <p>{list.title}</p>
          <p>{list.text}</p>
        </SlideTxt>
      </SlideContent>
    </SlideInner>
  );
};

export default SlideCard;
