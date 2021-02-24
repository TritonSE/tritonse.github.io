import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import SEO from "../components/seo.js";
import Header from "../components/header.js";
import Divider from "../components/divider.js";
import Footer from "../components/footer.js";
import Members from "../components/members.js";
import "../styles/pages.css";
import "../styles/colors.css";
import "../../node_modules/materialize-css/dist/css/materialize.min.css";

export default ({ data }) => {
  const history_left = (
    <div className="col l6 s12">
      <Img
        fluid={data.programming.childImageSharp.fluid}
        className="tse-generic-image tse-highlight-image"
      ></Img>
    </div>
  );
  const history_right = (
    <div className="col l6 s12">
      <p className="tse-text-medium">
        In Spring of 2017, a group of passionate students banded together to
        form Triton Software Engineering. They saw a huge problem: nonprofits
        had little to no resources to procure professional web and technical
        development services. By providing a venue for both student engineers
        and nonprofits to connect, they hoped to foster growth in both social
        good and technical expertise.
      </p>
      <p className="tse-text-medium">
        We believe that technology should be utilized to better the community.
        Something as simple as a sleek, static, and easy-to-use website or as
        complicated as a mobile app to track donations to your organizations can
        have a huge impact on an organization of any size. Let us help you help
        the community.
      </p>
    </div>
  );
  return (
    <div>
      <SEO title="About" />
      <Header
        title={<span>Our Mission</span>}
        subtitle={
          <span>
            "Triton Software Engineering (TSE) is a multidisciplinary student
            organization at UC San Diego. We partner with nonprofit
            organizations to design and develop software pro-bono for{" "}
            <span className="dark-yellow-text">social good</span>, while giving
            our members{" "}
            <span className="dark-yellow-text">
              practical, real world experience
            </span>
            ."
          </span>
        }
        buttons={
          <span>
            <Link
              to="/about#history"
              className="waves-effect waves-light btn-large navy tse-header-button"
            >
              Read More
            </Link>
          </span>
        }
        background="tse-header-laptop"
      />
      {/*<div className="navy">
      *<div className="container">
        <Divider subtitle="OUR MISSION" textColor="white-text" lineColor="tse-divider-line-dark-yellow"/>
        <h5 className="white-text tse-mission"><b>"Triton Software Engineering (TSE) is a multidisciplinary student organization at UC San Diego. We partner with nonprofits to design and develop software, websites and mobile applications pro-bono for <span className="dark-yellow-text">social good</span>, while giving our developers <span className="dark-yellow-text">practical, real world experience</span>."</b></h5>
      </div>
    <div className="tse-padding-medium"></div>
    </div>*/}
      <div className="container" id="history">
        <Divider
          title="Strong Mind, Stronger Heart"
          subtitle="ABOUT US"
          textColor="navy-text"
          lineColor="tse-divider-line-dark-yellow"
        />
        <div className="row valign-wrapper hide-on-med-and-down navy-text">
          {history_left}
          {history_right}
        </div>
        <div className="row hide-on-large-only">
          {history_left}
          {history_right}
        </div>
        <div className="tse-padding-medium"></div>
      </div>
      <div className="container" id="team">
        <Divider
          title="Who's Doing What?"
          subtitle="THE TEAM"
          textColor="navy-text"
          lineColor="tse-divider-line-dark-yellow"
        />
        <Members members={data.allTseMembers.edges} />
      </div>
      <Footer />
    </div>
  );
};

export const query = graphql`
  query {
    allTseMembers {
      edges {
        node {
          name
          role
          image {
            ...FluidImage
          }
        }
      }
    }
    programming: file(relativePath: { eq: "jason-group.png" }) {
      ...FluidImage
    }
  }
`;
