import React from 'react'

import '../../node_modules/siimple/dist/siimple.min.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import '../styles/site.css'

const Footer = () => (
  <div class="siimple-footer tse-footer" align="center">
    <div class="siimple-grid-row">
      <div class="siimple-grid-col siimple-grid-col--6">
        <div class="siimple-footer-title">Triton Software Engineering</div>
        <div class="siimple-footer-subtitle">Philanthropy @ <a href="https://ucsd.edu" class="tse-ucsd">UCSD</a></div>
      </div>
      <div class="siimple-grid-col siimple-grid-col--6">
        <a href="https://fb.com/tritonse" class="tse-facebook"><i class="fa fa-facebook"></i></a>
        <a href="https://linkedin.com/company/tritonsoftwareengineering/" class="tse-linkedin"><i class="fa fa-linkedin"></i></a>
        <a href="https://github.com/tritonse" class="tse-github"><i class="fa fa-github"></i></a>
      </div>
    </div>
  </div>
)

export default Footer 
