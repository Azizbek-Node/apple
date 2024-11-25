import React from 'react'
import photo from "../../assets/girl.jpg"
import "./Hero.scss"

const Hero = ({bg, title, desc, url, items, cl, button1, button2, logo}) => {
  return (
    <div>
    <div className='hero-container'>
      <div style={{background: `url(${url}) no-repeat center/cover`, color: cl}} className='hero' >
      <h2>{title}</h2>
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

export default Hero