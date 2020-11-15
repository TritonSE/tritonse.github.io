import React from 'react'
import '../styles/winners.css'
import '../styles/animated/animated.min.css';

import Matrix from "../components/matrix";
import Winners from "../components/winners";
import Footer from '../components/footer.js'

// 2d Arr for winner list, each row takes 4 entries
const amazingWinnersFA20AllHands2 = [
  [
    {
      name: 'Declan Sullivan',
      img: 'https://tse.ucsd.edu/static/b76dd1c9eb47731c233e0308aaa941eb/04971/DeclanSullivan.jpg',
      position: 'Project Manager'
    },
    {
      name: 'Dhanush Nanjunda',
      img: 'https://tse.ucsd.edu/static/8badbac7202ec344093488c0b16c5d7a/97641/DhanushReddy.jpg',
      position: 'Developer'
    },
    {
      name: 'Thai Gillespie',
      img: 'https://tse.ucsd.edu/static/b73eddb438f370d3016325b693797c65/413c2/Anonymous.jpg',
      position: 'Developer'
    },
    {
      name: 'William Wu',
      img: 'https://tse.ucsd.edu/static/b73eddb438f370d3016325b693797c65/413c2/Anonymous.jpg',
      position: 'Developer'
    }
  ]
];

const amazingWinnersFA20AllHands1 = [
  [

    {
      name: 'Amrit Singh',
      img: 'https://tse.ucsd.edu/static/9cc8899f8de5afb3929d5204f0c1d7e6/0d026/AmritSingh.jpg',
      position: 'Project Manager'
    },
    {
      name: 'Mylinh Lac',
      img: 'https://tse.ucsd.edu/static/c9c616626a92748c28e9330d2e12355e/d1027/MylinhLac.jpg',
      position: 'Designer'
    },
    {
      name: 'Nirmal Agnihotri',
      img: 'https://tse.ucsd.edu/static/44edd4ff02e5aac2862a703246f3e0d8/c3133/NirmalAgnihotri.jpg',
      position: 'Developer'
    }
  ]
];

const amazingWinnersSP20AllHands2 = [
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
            <Winners winners={amazingWinnersFA20AllHands2} activity={"FA20 Many Truths One Lie Winners"}/>
            <Winners winners={amazingWinnersFA20AllHands1} activity={"FA20 Family Feud Winners"}/>
            <Winners winners={amazingWinnersSP20AllHands2} activity={"SP20 Codewords Winners"}/>
            <Footer/>
        </div>
    );
}
