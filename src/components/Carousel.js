import React, { useRef } from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import ArrowLink from "./ArrowLink";
import HoverCard from "./HoverCard";
import "./Carousel.css";
import { clients } from "../data";
import PageContext from "./PageContext";

export default function ProjectCarousel({ imgPath, children, title }) {
  // Card: https://react-bootstrap.github.io/components/cards/
  // Don't worry about the close button for now
  // Use h2 for the title
  const listRef = useRef(null);

  const scrollList = (scrollDirection) => {
    sideScroll(listRef.current, scrollDirection, 40, 200, 10);
  };

  function sideScroll(element, direction, speed, distance, step) {
    let scrollAmount = 0;
    var slideTimer = setInterval(function () {
      if (direction == "left") {
        element.scrollLeft -= step;
      } else {
        element.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  }

  return (
    <div className="project-carousel">
      <h2>Latest Work</h2>
      <Container style={{ overflow: "scroll" }} fluid ref={listRef}>
        <div>
          <PageContext.Consumer>
            {({ allProjects }) => (
              <div className="d-flex flex-row align-items-stretch">
                {allProjects.map(({ frontmatter: { title, subtitle, thumbnail } }) => (
                  <Col xs="12" sm="4" lg="3" key={title}>
                    <HoverCard
                      title={title}
                      imgPath={[thumbnail || "icons/tse-bulb"]}
                      altText="Project image"
                      className="hover-card"
                    >
                      {subtitle}
                    </HoverCard>
                  </Col>
                ))}
                <Col xs="12" sm="4" lg="3">
                  <HoverCard
                    title={"FSD"}
                    imgPath={["icons/tse-bulb"]}
                    altText="Project image"
                    className="hover-card"
                  >
                    TESTING
                  </HoverCard>
                </Col>
                <Col xs="12" sm="4" lg="3">
                  <HoverCard
                    title={"FSD"}
                    imgPath={["icons/tse-bulb"]}
                    altText="Project image"
                    className="hover-card"
                  >
                    TESTING
                  </HoverCard>
                </Col>
                <Col xs="12" sm="4" lg="3">
                  <HoverCard
                    title={"FSD"}
                    imgPath={["icons/tse-bulb"]}
                    altText="Project image"
                    className="hover-card"
                  >
                    TESTING
                  </HoverCard>
                </Col>
              </div>
            )}
          </PageContext.Consumer>
        </div>
      </Container>
      {window.innerWidth > 500 ? (
        <ButtonGroup className="hidden-xs-down">
          <Button
            onClick={() => scrollList("left")}
            className="carousel-control-prev hidden-xs-down"
          >
            <BsArrowLeft />
          </Button>
          <Button
            onClick={() => scrollList("right")}
            className="carousel-control-next hidden-xs-down"
          >
            <BsArrowRight />
          </Button>
        </ButtonGroup>
      ) : null}
    </div>
  );
}
