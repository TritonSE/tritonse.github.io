import React from 'react'
import { initWowJS } from '../util/init.js'

class Matrix extends React.Component {
    componentDidMount() {
      initWowJS();

      const c = this.refs.canvas;
      const ctx = c.getContext("2d");

      //making the canvas full screen
      c.width = 1600;
      c.height= 1000;

      // characters - taken from the unicode charset
      let phrase = "TritonSoftwareEngineering";

      //converting the string into an array of single characters
      phrase = phrase.split("");

      const font_size = 12;
      const columns = c.width / font_size; //number of columns for the rain

      //an array of drops - one per column
      const drops = [];

      //x below is the x coordinate
      //1 = y co-ordinate of the drop(same for every drop initially)
      for (let x = 0; x < columns; x++)
          drops[x] = 1;
      //drawing the characters
      function draw() {
          //Black BG for the canvas
          //translucent BG to show trail
          ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
          ctx.fillRect(0, 0, c.width, c.height);

          ctx.fillStyle = "#34ace0"; //green text #24d8e5
          ctx.font = font_size + "px arial";
          //looping over drops
          for (let i = 0; i < drops.length; i++) {
              //a random character to print
              const text = phrase[Math.floor(Math.random() * phrase.length)];
              //x = i*font_size, y = value of drops[i]*font_size
              ctx.fillText(text, i * font_size, drops[i] * font_size);

              //sending the drop back to the top randomly after it has crossed the screen
              //adding a randomness to the reset to make the drops scattered on the Y axis
              if (drops[i] * font_size > c.height && Math.random() > 0.975)
                  drops[i] = 0;

              //incrementing Y coordinate
              drops[i]++;
          }
      }
      (function () {
          setInterval(draw, 15);
      })();
    }

    render() {
        return (
            <section className="header">
                <canvas ref="canvas"/>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="img-container center-align wow bounceInDown" data-wow-duration=".6s"
                                 data-wow-delay="0s">
                                <img src={require('../images/logo-yellow.png')} className="circle responsive-img" alt="TSE" />
                            </div>
                            <div className="head-title wow fadeIn" data-wow-duration=".6s"
                                 data-wow-delay="0s">
                                <h3 className="center-align"> TSE Hall of Fame</h3>
                            </div>
                            <div className="head-content wow fadeIn" data-wow-duration=".6s"
                                 data-wow-delay="0s">
                                <h5 class="center-align"> Since the 2019-2020 school year, TSE holds an annual tournament between project
                                    teams. Winners are immortalized forever on this page.
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Matrix;
