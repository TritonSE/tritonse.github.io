import React, {useEffect, useState} from 'react';
import { allProjects } from "../data/projects";
import { firstValidImageKey } from "../images";
import CustomImage from "./CustomImage";

function CarouselImage(props: CarouselImageProps){
  return (
    <div style={{height:'100%'}}>
      {
        (props.activeIndex == props.index) &&
        <CustomImage
          imageKey={firstValidImageKey(props.thumbnail, "icons/tse-bulb")}
        />
      }
    </div>
  )
}

const delay = 5000;
interface CarouselImageProps{
  thumbnail : any, 
  index: number, 
  changeIndex: any,
  activeIndex: number
}

function CarouselButton(props: CarouselButtonProps){
  return (
    <div style={{padding: 5, display:'inline'}}>
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
  }
  useEffect(() => {
    setTimeout(
      () =>
      setActiveIndex((prevIndex) => (prevIndex + 1) > 2 ? 0: prevIndex + 1)
    , 
    delay);
    return ()=> {};
  }, [activeIndex]);

  return (
    <div style={{
      overflow: 'hidden',
      display: 'grid',
      alignContent: 'center',
      gridTemplateColumns: '1fr 1fr'
    }}>
      <div style={{padding: 30}}>
        <h2>Current Projects</h2>
        <p>We are currently working on 11 different projects spread across both the design and development phases. Each project team is partnered with a nonprofit organization which meet throughout the entire project to design and develop technology to better the community. Some nonprofits that we are working with include Make a Wish, Feeding San Diego, and Words Alive. For more information, check out some of our completed projects below!</p>
      </div>
      <div style={{padding: 50}}>
        {allProjects
          .slice(-3)
          .reverse()
          .map((project, index) => (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
             }}>
              <CarouselImage
                index = {index}
                thumbnail = {firstValidImageKey(project.thumbnail, "icons/tse-bulb")}
                changeIndex={changeIndex}
                activeIndex = {activeIndex}
              />
            </div>
        ))}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          }}>
          {allProjects
            .slice(-3)
            .reverse()
            .map((_, index) => (
              <>
                <CarouselButton
                  index={index}
                  changeIndex={changeIndex}
                /> 
              </>
          ))}
        </div>
      </div>
    </div>
  );
};

