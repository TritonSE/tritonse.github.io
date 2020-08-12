import React from 'react'
import '../styles/divider.css'
import '../styles/colors.css'
import '../../node_modules/materialize-css/dist/css/materialize.min.css'

const Divider = ({
  title,
  subtitle,
  textColor,
  lineColor,
  caption,
}) => (
  <div className="center tse-divider">
    <p className={`${textColor}`}>{subtitle}</p>
    <h3 className={`${textColor}`}>{title}</h3>
    <hr className={`tse-divider-line ${lineColor ? lineColor : 'tse-divider-line-amber'}`}/>
    <p className={`tse-caption ${textColor}`}>{caption}</p>
  </div>
)

export default Divider;
