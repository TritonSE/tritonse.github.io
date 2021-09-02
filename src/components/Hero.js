import React from "react";
import DynamicImage from "./DynamicImage";
import { Jumbotron, Button, Container } from "react-bootstrap";

import "./Hero.scss"

/**
 * Render a full-width banner image, with text and buttons on top.
 * @param props
 * @param {string} props.imagePath
 * @param {string} props.title
 * @param {string} props.description
 * @param {?{ text: string, url: string }[]} props.links Links to display as buttons.
 * @param {?boolean} props.centered Whether the text and buttons should be centered.
 */
export default function Hero({ imagePath, videoId, title, description, links = [], centered }) {
  const images = require.context('../images/content', true);
  let imgsrc = images(`./${imagePath}.jpg`).default;
  const imgStyle = {
    // paddingTop: 150,
    // paddingBottom: 180,
    backgroundSize: 'cover',
    backgroundImage: `url(${imgsrc})`,
    backgroundPosition: 'center'
  };
  const vidStyle = {
    // paddingTop: 150,
    // paddingBottom: 180,
    height: 50
  }
  return (
    // <Jumbotron className="hero" style={ (videoId.length == 0) ? { imgStyle } : { vidStyle }}>
    // <Jumbotron className="hero" style={ (imagePath.length == 0) ? { vidStyle } : { imgStyle }}>
    <Jumbotron className="hero" style={{imgStyle}}>
      <Container style={ centered ? { textAlign : 'center' } : {} }>
        {/* <div className="vidContainer">
          <iframe className="ytVideo" 
            frameborder="0" 
            src={"https://www.youtube.com/embed/" + videoId + "?rel=0?version=3&autoplay=1&mute=1&controls=0&loop=1&playlist=" + videoId}
            allow="autoplay"
            style={ (videoId.length == 0) ? { width : 0, height : 0 } : { }}>
          </iframe>
        </div> */}
        {/* <div className={ (videoId.length == 0) ? "imgContainer" : "vidContainer" }
        style={ (videoId.length == 0) ? { backgroundImage : `url(${imgsrc})` } : { } }> */}
          {/* <iframe className="ytVideo" 
          frameborder="0" 
          src={"https://www.youtube.com/embed/" + videoId + "?rel=0?version=3&autoplay=1&mute=1&controls=0&loop=1&playlist=" + videoId}
          allow="autoplay"
          style={ (videoId.length == 0) ? { width : 0 } : { }}></iframe> */}
        {/* </div> */}
        <h1 style={{marginTop: 150}}>{title}</h1>
        <p>{description}</p>
        {links.length > 0 && (
          <ol className="buttonsList">
            {links.map(({ text, url }) => (
              <li className="heroButton">
                <Button href={url}>{text}</Button>
              </li>
            ))}
          </ol>
        )}
      </Container>
    </Jumbotron>
  );
}
