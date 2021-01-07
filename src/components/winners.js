import React from 'react'
import Img from 'gatsby-image'
import { initWowJS } from '../util/init.js'

class Winners extends React.Component {
    componentDidMount() {
      initWowJS();
    }

    render() {
        return (
            <section className="services">
                <div className="container">
                    <h4 className="service-des center-align wow bounceInRight" data-wow-duration=".6s" data-wow-delay="0.4s">
                        {this.props.activity}
                    </h4>
                    {this.props.winners.map(row => {
                        return(<div className="row">
                            {row.map((winner, index) => {
                                const columnSize = 12/row.length;
                                const isRight = index>=row.length/2;
                                return(<div className={`col s12 m3 l${columnSize} wow ${isRight ?
                                    'fadeInRight' : 'fadeInLeft'}`} data-wow-duration=".6s" data-wow-delay="0.4s">
                                    <div className="card wow rollIn">
                                        <div className="card-image service-img">
                                          <Img fluid={winner.image.childImageSharp.fluid} className="tse-profile-image"></Img>
                                        </div>
                                        <div className="card-block">
                                            <h5 className="service-des center-align">{winner.name}</h5>
                                            <div className="service-divider"></div>
                                            <p className="service-extra center-align">{winner.position}</p>
                                        </div>
                                    </div>
                                </div>);
                            })}
                        </div>)
                    })}
                </div>
            </section>
        );
    }
}
export default Winners;
