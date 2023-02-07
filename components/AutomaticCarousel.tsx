import React, {useState} from 'react';
import { allProjects } from "../data/projects";
import { firstValidImageKey } from "../images";

import CustomImage from "./CustomImage";

function CarouselItem(){
  return (
    <>
  {allProjects
    .slice(-5)
    .reverse()
    .map((project) => (
      <CustomImage
        imageKey={firstValidImageKey(project.thumbnail, "icons/tse-bulb")}
        />
    ))}
    </>
  )
}
export default function AutomaticCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const changeIndex = (newIndex: number) => {
    setActiveIndex(newIndex);
    // if (newIndex < 0) {
    //   newIndex = 0;
    // } else if (newIndex >= React.children.count(children)){
    //   newIndex = React.Children.count(Children) - 1
    // }
  }
  return (
    <>
      <CarouselItem/>
    </>
  );
};

//      return <CustomImage imageKey={imageKey} layout="responsive" />;