import React from 'react'
import '../styles/divider.css'
import '../../node_modules/materialize-css/dist/css/materialize.min.css'

const Divider = ({
  title,
  subtitle,
  textColor,
  lineColor
}) => (
  <div className="center tse-divider">
    <p className={`${textColor}`}>{subtitle}</p>
    <h3 className={`${textColor}`}>{title}</h3>
    <hr className={`tse-divider-line ${lineColor ? lineColor : 'tse-divider-line-amber'}`}/>
  </div>
)

export default Divider;
