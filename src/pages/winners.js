import { graphql } from "gatsby";
import React from "react";
import "../styles/winners.css";
import "../styles/animated/animated.min.css";

import Matrix from "../components/matrix";
import Winners from "../components/winners";
import Footer from "../components/footer.js";

export default ({ data }) => {
  const events = [];
  data.allTseWinners.edges.forEach(edge => {
    const event = edge.node;
    // Attaches a Gatsby image node to each winner if their
    // information appears in the members section. Only works for current
    // members at the moment. New members and alumni appear as anonymous.
    event.winners.forEach(winner => {
      let target = data.allTseMembers.edges.find(edge => {
        return edge.node.name === winner.name;
      });
      if (target == null) {
        winner.image = data.anonTseMember;
      } else {
        winner.image = target.node.image;
      }
    });
    // The matrix class takes in a 2D grid of winners, so this class breaks
    // up a list of winners into groups of 4.
    const winners = event.winners;
    const grid = [];
    for (let i = 0; i < winners.length; i += 4) {
      grid.push(winners.slice(i, i + 4));
    }
    event.winners = grid;
    events.push(event);
  });
  events.sort((a, b) => b.ordering - a.ordering);
  return (
    <div className="body">
      <Matrix />
      {events.map(event => {
        return (
          <Winners
            key={event.id}
            winners={event.winners}
            activity={event.activity}
          />
        );
      })}
    </div>
  );
};

export const query = graphql`
  query {
    allTseWinners {
      edges {
        node {
          activity
          ordering
          winners {
            name
            position
          }
        }
      }
    }
    allTseMembers {
      edges {
        node {
          name
          image {
            ...FluidImage
          }
        }
      }
    }
    anonTseMember: file(relativePath: { eq: "members/Anonymous.png" }) {
      ...FluidImage
    }
  }
`;
