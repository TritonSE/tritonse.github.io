import React from 'react'
import {
  init_wowjs
} from '../util/init.js'

class Winners extends React.Component {
    componentDidMount() {
      init_wowjs();
    }

    render() {
        return (
            <section className="services">
                <div className="container">
                    <h4 className="service-des center-align wow bounceInRight" data-wow-duration=".6s"
                        data-wow-delay="0.4s">
                        2020 Codewords Winners:
                    </h4>
                    {this.props.winners.map(row => {
                        return(<div className="row">
                            {row.map((winner, index) => {
                                return(<div className={`col s12 m3 l3 wow ${index>=row.length/2 ?
                                    'fadeInRight' : 'fadeInLeft'}`} data-wow-duration=".6s"
                                            data-wow-delay="0.4s">
                                    <div className="card wow rollIn">
                                        <div className="card-image service-img">
                                            <img
                                                src={winner.img} alt={winner.name}
                                            />
                                        </div>
                                        <div className="card-block">
                                            <h4 className="service-des center-align">{winner.name}</h4>
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
