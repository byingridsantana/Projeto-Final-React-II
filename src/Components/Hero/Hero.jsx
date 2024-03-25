import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'


const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <div>
          <div className="hero-hand-icon">
            <p>NOVA</p>            
          </div>
          <p>COLEÇÃO</p>
          <h1>versatilidade que nunca sai de moda</h1>          
        </div>
        <div className="hero-latest-btn">
          <div>Comprar</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />

      </div>
    </div>
  )
}

export default Hero
