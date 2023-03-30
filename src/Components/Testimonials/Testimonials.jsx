import React,{useState} from 'react'
import "./Testimonials.css"
import {testimonialsData} from "../../data/testimonialsData.js"
import leftArrow from "../../assets/leftArrow.png"
import rightArrow from "../../assets/rightArrow.png"
import {motion} from "framer-motion"
export const Testimonials = () => {
  const transition={type:"spring",duration:3}
    const[selected,setSelected]=useState(0)
    const tlength=testimonialsData.length
  return (
    <div className="testimonials">
        <div className="testimonials-left">
            <span>Testimonials</span>
            <span className='stroke-text'>what they</span>
            <span>say about us</span>
            <motion.span
            key={selected}
             initial={{opacity:0,x:-100}}
            transition={transition}
            animate={{opacity:1,x:0}}
            exit={{opacity:0,x:-100}}>
                {testimonialsData[selected].review}
            </motion.span>
            <span>
            <span style={{color:"var(--orange)"}}>
                {testimonialsData[selected].name}
            </span>
            <span>
               {" "} - {testimonialsData[selected].status}
            </span>
            </span>
            </div>
        <div className="testimonials-right">
        <motion.div
            initial={{opacity:0,x:-100}}
            transition={{...transition, duration:2}}
            whileInView={{opacity:1,x:0}}>
        </motion.div>
        <motion.div
        initial={{opacity:0,x:100}}
            transition={{...transition, duration:2}}
            whileInView={{opacity:1,x:0}}
        ></motion.div>
            <motion.img 
            key={selected}
             initial={{opacity:0,x:100}}
            transition={transition}
            animate={{opacity:1,x:0}}
            exit={{opacity:0,x:-100}}
            src={testimonialsData[selected].image} alt="" srcset=""/>
            <div className='arrows'>
                <img onClick={()=>{
                    selected===0?setSelected(tlength-1):setSelected((preValue)=>preValue-1)
                }} 
                src={leftArrow} alt="" 
                />
                <img onClick={()=>{
                    selected===tlength-1?setSelected(0):setSelected((preValue)=>preValue+1)
                }} src={rightArrow} alt="" srcset="" />
            </div>
        </div>
    </div>
  )
}
