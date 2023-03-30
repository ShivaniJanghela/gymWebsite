import React from 'react'
import Header from '../Header/Header.jsx'
import './Hero.css'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import {motion} from "framer-motion"
import CountUp from 'react-countup'
const Hero = () => {
  const transition={type :"spring",duration:3}
  const mobile =window.innerWidth<=768?true:false;
  return (
    <div className='hero'>
    <div className="blur hero-blur"></div>
    {/* left-hero */}
      <div className='left-hero'>
        <Header/>
        <div className='the-best-ad'>
            <motion.div
            initial={{left:mobile?"165SSpx":'238px'}}
            whileInView={{left:"8px"}}
            transition={{...transition, type:"tween"}}
            >

            </motion.div>
            <span>the best fitness club in the town</span>
        </div>
        <div className='hero-text'>
        <div><span className='stroke-text'>Shape </span> <span>your</span></div> 
        <div><span>ideal body</span></div>
        <div><span>Ideal body in here will help you shape and build your ideal body and liveyour life to the fullest</span></div>
        </div>
        {/* figers */}
         <div className='figures'>
         <div>
         <span>
         <CountUp
          end={140}
          start={100}
          dalay="4"
          prefix="+"
         />
         </span>
         <span>Expert coaches</span>
         </div>
         <div>
         <span> 
         <CountUp
          end={978}
          start={800}
          dalay="4"
          prefix="+"
         />
         </span>
         <span>members joined</span>
         </div>
         <div>
         <span> 
        
         <CountUp
          end={50}
          start={0}
          dalay="4"
          prefix="+"
         />
         </span>
         <span>fitness programs</span>
         </div>
         
         </div>
         {/* hero buttons */}
         <div className='hero-buttons'>
          <button className='btn'>get started</button>
          <button className='btn'>learn more</button>
         </div>

      </div>
      {/* right side */}
      <div className='right-hero'>
      <button className='btn'>join now</button>
      <motion.div
      initial={{right:"-1rem"}}
      whileInView={{right:"4rem"}}
      transition={transition}
      className='heart-rate' >
        <img src={Heart}></img>
        <span>heart rate</span>
        <span>bpm</span>
      </motion.div>
      {/* hero image */}
      <img src={hero_image} className="hero-img"></img>
      <motion.img 
      initial={{right:"11rem"}}
      whileInView={{right:"20rem"}}
      transition={transition}
      src={hero_image_back} className="hero-img-back"></motion.img>
      {/* calories section */}
      <motion.div
      initial={{right:"37rem"}}
      whileInView={{right:"28rem"}} 
      transition={transition}
      className='calories'>
        <img src={Calories}></img>
        <div>
          <span>Calories burned</span>
          <span>220 kcal</span>
        </div>
      </motion.div>
      </div>
    </div>
   
  )
}

export default Hero