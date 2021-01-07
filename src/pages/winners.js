import { graphql } from 'gatsby'
import React from 'react'
import '../styles/winners.css'
import '../styles/animated/animated.min.css';

import Matrix from "../components/matrix";
import Winners from "../components/winners";
import Footer from '../components/footer.js'

// TODO: In the future, move these out of the page and into src/data as JSON files
// Will require some edits to gatsby-node.js. The data can be queried using GraphQL.

const winnersFA20SocialEvent = [
  [
    {
      name: 'Justin Yao Du',
      position: 'Developer'
    },
    {
      name: 'Kelly Li',
      position: 'Designer'
    },
    {
      name: 'Viren Abhyankar',
      position: 'VP External'
    }
  ]
];

const winnersFA20DesignWorkshop = [
  [
    {
      name: 'Dhanush Reddy',
      position: 'Developer'
    },
    {
      name: 'Nick La Polla',
      position: 'Developer'
    },
    {
      name: 'Nirmal Agnihotri',
      position: 'Developer'
    }
  ],
  [
    {
      name: 'Rohith Kasar',
      position: 'Developer'
    },
    {
      name: 'Thai Gillespie',
      position: 'Developer'
    },
    {
      name: 'Wesley Chen',
      position: 'President'
    }
  ]
];

const winnersFA20AllHands2 = [
  [
    {
      name: 'Declan Sullivan',
      position: 'Project Manager'
    },
    {
      name: 'Dhanush Reddy',
      position: 'Developer'
    },
    {
      name: 'Thai Gillespie',
      position: 'Developer'
    },
    {
      name: 'William Wu',
      position: 'Developer'
    }
  ]
];

const winnersFA20AllHands1 = [
  [
    {
      name: 'Amrit Singh',
      position: 'Project Manager'
    },
    {
      name: 'Mylinh Lac',
      position: 'Designer'
    },
    {
      name: 'Nirmal Agnihotri',
      position: 'Developer'
    }
  ]
];

const winnersSP20AllHands2 = [
  [
    {
      name: 'David Cruz',
      position: 'Project Manager'
    },
    {
      name: 'Ryan Bui',
      position: 'Developer'
    },
    {
      name: 'Shravan Hariharan',
      position: 'Developer'
    },
    {
      name: 'Thomas Li',
      position: 'Developer'
    }
  ]
];

const events = [
  {
    activity: "FA20 Trivia Winners",
    winners: winnersFA20SocialEvent
  },
  {
    activity: "FA20 Design Violation Detection Winners",
    winners: winnersFA20DesignWorkshop
  },
  {
    activity: "FA20 Many Truths One Lie Winners",
    winners: winnersFA20AllHands2
  },
  {
    activity: "FA20 Family Feud Winners",
    winners: winnersFA20AllHands1
  },
  {
    activity: "SP20 Codewords Winners",
    winners: winnersSP20AllHands2
  }
];

export default ({
    data
}) => {
  // This snippet attaches a Gatsby image node to each winner if their
  // information appears in the members section. Only works for current 
  // members at the moment. New members and alumni appear as anonymous.
  events.forEach(event => {
    event.winners.forEach(row => {
      row.forEach(winner => {
        let target = data.allTseMembers.edges.find((edge) => {
          return edge.node.name === winner.name;
        });
        if (target == null) {
          winner.image = data.anonTseMember;
        } 
        else {
          winner.image = target.node.image;
        }
      });
    });
  });
  return (
    <div className='body'>
      <Matrix/>
      {
        events.map((event) => {
          return <Winners key={event.activity} winners={event.winners} activity={event.activity}/>
        })
      }
    </div>
  );
}

export const query = graphql `
  query {
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
    anonTseMember: file(relativePath: { eq: "members/Anonymous.jpg" }) {
      ...FluidImage
    }
  }
`
