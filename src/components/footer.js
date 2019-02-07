import React from 'react'

import '../styles/site.css'

import '../../node_modules/siimple/dist/siimple.min.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

const Footer = () => (
  <div className="siimple-footer tse-footer" align="center">
    <div className="siimple-grid-row">
      <div className="siimple-grid-col siimple-grid-col--6">
        <div className="siimple-footer-title">Triton Software Engineering</div>
        <div className="siimple-footer-subtitle">Philanthropy @ <a href="https://ucsd.edu" className="tse-ucsd">UCSD</a></div>
      </div>
      <div className="siimple-grid-col siimple-grid-col--6">
        <a href="https://fb.com/tritonse" className="tse-facebook"><i className="fa fa-facebook"></i></a>
        <a href="https://linkedin.com/company/tritonsoftwareengineering/" className="tse-linkedin"><i className="fa fa-linkedin"></i></a>
        <a href="https://github.com/tritonse" className="tse-github"><i className="fa fa-github"></i></a>
      </div>
    </div>
  </div>
)

export default Footer 
