import React from 'react'
import '../styles/pages.css'
import '../styles/colors.css'
import '../../node_modules/materialize-css/dist/css/materialize.min.css'

export default ({
  data
}) => {
  return (<div>
    <div className="tse-apply-container">
      <div className="container">
        <div className="row">
          <div className="col s12 center">
            <h2 className="navy-text">WINNERS</h2>
            <p className="tse-text-large navy-text tse-apply-subtitle">Since the 2019-2020 school year, TSE holds an annual tournament between project teams. Winners are immortalized forever on this page.</p>
            <table>
             <tr>
               <th>YEAR</th>
               <th>ACTIVITY</th>
               <th>TEAM MEMBERS</th>
             </tr>
             {/*insert winners in reverse chronological order*/}
             <tr>
               <td>2020</td>
               <td>Codewords</td>
               <td>David Cruz, Ryan Bui, Shravan Hariharan, Thomas Li</td>
             </tr>
            </table>
            <h5 className="navy-text">Congratulations you glorious winners. Welcome to the TSE Hall of Fame.</h5>
          </div>
        </div>
      </div>
    </div>
  </div>)
}
