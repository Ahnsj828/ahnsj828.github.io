import React from "react";
import { Link } from "react-router-dom";
import {
  SlideInner,
  SlideTitle,
  SlideContent,
  SlideVideo,
  Monitor,
  Slideintro,
  UseTools,
  UseTool,
  Links,
  PageLink,
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
        <Slideintro>
          <UseTools>
            {(list.useTool || []).map((tool, index) => (
              <UseTool key={index}>{tool}</UseTool>
            ))}
          </UseTools>
          {/* <p>{list.text}</p> */}
          <Links>
            {list.pageLink && (
              <Link
                to={list.pageLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <PageLink src={list.pageLinkImage} alt="page link" />
              </Link>
            )}
            {list.githubLink && (
              <Link
                to={list.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <PageLink src={list.githubLinkImage} alt="github link" />
              </Link>
            )}
            {list.figmaLink && (
              <Link
                to={list.figmaLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <PageLink src={list.figmaLinkImage} alt="figma link" />
              </Link>
            )}
          </Links>
        </Slideintro>
      </SlideContent>
    </SlideInner>
  );
};

export default SlideCard;
