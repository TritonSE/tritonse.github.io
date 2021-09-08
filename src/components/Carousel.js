import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import ArrowLink from "./ArrowLink";
import HoverCard from "./HoverCard";
import "./Carousel.css";

export default function ProjectCarousel({ imgPath, children, title }) {
  // Card: https://react-bootstrap.github.io/components/cards/
  // Don't worry about the close button for now
  // Use h2 for the title
  return (
    <>
      <h4>Latest Work</h4>
      <Carousel
        interval={null}
        prevLabel=""
        nextLabel=""
        nextIcon={<BsArrowRight />}
        prevIcon={<BsArrowLeft />}
      >
        <Carousel.Item>
          <Container>
            <Row className="justify-content-md-center">
              <Col xs="3" sm="4">
                <HoverCard title="Words Alive" className="hover-card">
                  A web and mobile application providing online children books, focused on language
                  accessibility.
                </HoverCard>
              </Col>
              <Col xs="3" sm="4">
                <HoverCard title="Words Alive" className="hover-card">
                  A web and mobile application providing online children books, focused on language
                  accessibility.
                </HoverCard>
              </Col>
              <Col xs="3" sm="4">
                <HoverCard title="Words Alive" className="hover-card">
                  A web and mobile application providing online children books, focused on language
                  accessibility.
                </HoverCard>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <HoverCard title="Words Alive" className="hover-card">
            A web and mobile application providing online children books, focused on language
            accessibility.
          </HoverCard>
        </Carousel.Item>
        <Carousel.Item>
          <HoverCard title="Words Alive" className="hover-card">
            A web and mobile application providing online children books, focused on language
            accessibility.
          </HoverCard>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
