import React, {useState} from 'react';
import { allProjects } from "../data/projects";
import { firstValidImageKey } from "../images";
import CustomImage from "./CustomImage";

function CarouselImage(props: CarouselImageProps){
  return (
    <div >
      {
        (props.activeIndex == props.index) &&
        <CustomImage
          height={300}
          imageKey={firstValidImageKey(props.thumbnail, "icons/tse-bulb")}
        />
      }
    </div>
  )
}

interface CarouselImageProps{
  thumbnail : any, 
  index: number, 
  changeIndex: any,
  activeIndex: number
}

function CarouselButton(props: CarouselButtonProps){
  return (
    <div style={{display:'inline'}}>
      <button
        style = {{
          padding: 5,
          backgroundColor: 'white',
          color: 'white',
          borderRadius: 50,
        }}
        onClick = {() => {
          props.changeIndex(props.index)
        }}
       /> 
    </div>
  )
}

interface CarouselButtonProps{
  index: number, 
  changeIndex: any,
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
    <div style={{
      overflow: "hidden"
    }}>

      <p>{activeIndex}</p>
      {allProjects
        .slice(-3)
        .reverse()
        .map((project, index) => (
          <>
            <CarouselImage
              index = {index}
              thumbnail = {firstValidImageKey(project.thumbnail, "icons/tse-bulb")}
              changeIndex={changeIndex}
              activeIndex = {activeIndex}
            />
          </>
      ))}
      {allProjects
        .slice(-3)
        .reverse()
        .map((project, index) => (
          <>
            <CarouselButton
              index={index}
              changeIndex={changeIndex}
             /> 
          </>
      ))}
    </div>
  );
};

