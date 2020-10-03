import React from 'react'
import '../styles/winners.css'
import '../styles/animated/animated.min.css';

import Matrix from "../components/matrix";
import Winners from "../components/winners";
import Footer from '../components/footer.js'
// 2d Arr for winner list, each row takes 4 entries
const amazingWinners = [
  [
    {
      name: 'David Cruz',
      img: 'https://tse.ucsd.edu/static/7f7c5472eccc8056ce99693f634fb4b0/d86a4/DavidCruz.jpg',
      position: 'Project Manager'
    },
    {
      name: 'Ryan Bui',
      img: 'https://tse.ucsd.edu/static/8a15b3cea2c9198ebfb5f2827650abeb/4361f/RyanBui.jpg',
      position: 'Developer'
    },
    {
      name: 'Shravan Hariharan',
      img: 'https://tse.ucsd.edu/static/e87f257b4138bb9c1777f9fc7b22ee28/97641/ShravanHariharan.jpg',
      position: 'Developer'
    },
    {
      name: 'Thomas Li',
      img: 'https://tse.ucsd.edu/static/b73eddb438f370d3016325b693797c65/413c2/Anonymous.jpg',
      position: 'Developer'
    }
  ]
];


export default ({
    data
}) => {
    return (
        <div className='body'>
            <Matrix/>
            <Winners winners={amazingWinners}/>
            <Footer/>
        </div>
    );
}
