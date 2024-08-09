import styled from "styled-components";

// SlideInner 스타일
export const SlideInner = styled.div`
  /* display: flex; */
  padding: 1.25rem;
  padding: 3rem 5rem;
  /* padding-right: 2.5rem; */
  width: 100%;
  height: 100%;
`;

export const ProjectTitle = styled.div`
  border: 1px solid #f00;
  /* width: auto; */
  margin-right: 5%;
  height: 20%;
  h4 {
    border: 1px solid rebeccapurple;
    /* width: auto; */
    margin: 0.3125rem;
    /* margin-bottom: 1rem; */
    /* margin-bottom: 2.5rem; */
    box-shadow: inset 0 -20px 0 #f8a05f; //  밝은 오렌지색
    text-transform: uppercase;
    font-size: 40px;
    font-size: 2.5em;
    font-weight: bold;
    &:last-child {
      width: 51%;
    }
  }
  p {
    color: #393939;
    font-family: "IM_Hyemin-Bold";
    font-size: 1.5rem;
    line-height: 2.5rem;
    letter-spacing: 0.1rem;
    word-break: keep-all;
  }
`;

export const ProjectContent = styled.div`
  border: 1px solid darkcyan;
  display: flex;
  width: 100%;
  height: 70%;
`;

export const ProjectPic = styled.span`
  display: inline-block;
  width: 35%;
  height: 100%;
  background-color: gray;
  border-radius: 5%;
  overflow: hidden;
`;

export const ProjectTxt = styled.span`
  border: 1px solid purple;
  border: 1px solid #f00;
  width: auto;
  margin-right: 5%;
  height: 100%;
  h4 {
    width: auto;
    margin: 0.3125rem;
    margin-bottom: 2rem;
    box-shadow: inset 0 -20px 0 #f8a05f; //  밝은 오렌지색
    text-transform: uppercase;
    font-size: 40px;
    font-size: 2.5em;
    font-weight: bold;
    &:last-child {
      width: 51%;
    }
  }
  p {
    color: #393939;
    font-family: "IM_Hyemin-Bold";
    font-size: 1.5rem;
    line-height: 2.5rem;
    letter-spacing: 0.1rem;
    word-break: keep-all;
  }
`;
