import React from "react";
import {
  ExampleSection,
  SlideSection,
  SlideWrap,
  Slide,
} from "./ExamplePage.styled.js";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import SlideCard from "../../components/SlideCard/SlideCard.js";
import list from "../../assets/data/list.js";

const ExamplePage = () => {
  // 'ex' 타입의 데이터만 필터링
  const exampleList = list.filter((item) => item.type === "ex");

  return (
    <ExampleSection>
      <SlideSection>
        <SlideWrap
          slidesPerView={1}
          grabCursor={true}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {exampleList.map((item) => (
            <Slide key={item.id}>
              <SlideCard list={item} />
            </Slide>
          ))}
        </SlideWrap>
      </SlideSection>
    </ExampleSection>
  );
};

export default ExamplePage;
