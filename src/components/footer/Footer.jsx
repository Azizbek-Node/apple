import React from 'react'
import photo from "../../assets/girl.jpg"
import "./Footer.scss"

const Footer = ({bg, title, desc, url, items, cl, button1, button2, desc1}) => {
  return (
    <div>
    <div className='footer-container'>
      <div style={{background: `url(${url}) no-repeat center/cover`, color: cl}} className='footer' >
      <h2>{title}</h2>
      <p>{desc1}</p>
      <p>{desc}</p>
      <button>{button1}</button>
      <button>{button2}</button>
      <ul>
        {
          items?.map((i,inx)=>{
            <li key={inx}>{i}</li>
          })
          }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer