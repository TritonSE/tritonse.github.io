import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import SEO from "../components/seo.js";
import Navbar from "../components/navbar.js";
import Divider from "../components/divider.js";
import Footer from "../components/footer.js";
import Members from "../components/members.js";
import "../styles/pages.css";
import "../styles/colors.css";
import "../../node_modules/materialize-css/dist/css/materialize.min.css";

export default ({ data }) => {
  const classes = {};
  data.allTseMembers.edges.forEach(member => {
    if (member.node.alumni in classes) {
      classes[member.node.alumni].push(member);
    }
    else {
      classes[member.node.alumni] = [member];
    }
  });
  const elements = [];
  Object.keys(classes).sort().reverse().forEach(function(year) {
    if (year === "-1" || year === -1) {
      return;
    }
    const members = classes[year];
    elements.push((<div className="container">
      <h5>Class of <b>{year}</b></h5>
      <div className="tse-separation-small"></div>
      <Members members={members}/>
      <div className="tse-separation-medium"></div>
    </div>));
  });
  return (
    <div>
      <SEO title="Alumni" />
      <Navbar/>
      <div className="container">
        <Divider
          title={<span>Who Did What?</span>}
          subtitle="GRADUATED ALUMNI"
          textColor="navy-text"
          lineColor="tse-divider-line-dark-yellow"
        />
      </div>
      {elements}
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
          alumni
        }
      }
    }
  }
`;
