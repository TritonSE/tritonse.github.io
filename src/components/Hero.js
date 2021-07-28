import React from "react";
import DynamicImage from "./DynamicImage";
import { Jumbotron, Button } from "react-bootstrap";

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
export default function Hero({ imagePath, title, description, links = [], centered = false }) {
  const images = require.context('../images/content', true);
  let imgsrc = images(`./${imagePath}.jpg`).default;
  const imgStyle = {
    paddingTop: 100,
    paddingBottom: 250,
    backgroundColor: 'red',
    backgroundSize: 'cover',
    backgroundImage: `url(${imgsrc})`,
    backgroundPosition: 'center'
  };
  return (
    <Jumbotron style={imgStyle}>
      <div style={ centered ? { textAlign : 'center' } : {} } className="container">
        <h1 className="display-4">{title}</h1>
        <p className="lead">{description}</p>
        {links.length > 0 && (
          <ol className="buttonsList">
            {links.map(({ text, url }) => (
              <li className="heroButton">
                <Button href={url}>{text}</Button>
              </li>
            ))}
          </ol>
        )}
      </div>
    </Jumbotron>
  );
}
