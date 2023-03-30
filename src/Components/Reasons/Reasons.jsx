import React from 'react'
import "./Reasons.css"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import nb from "../../assets/nb.png"
import adidas from "../../assets/adidas.png"
import nike from "../../assets/nike.png"
import tick from "../../assets/tick.png"
const Reasons = () => {
    return (
        <div className="Reasons" id="reasons">
            <div className="left-reasons">
                <img src={image1} alt="1" srcset="" />
                <img src={image2} alt="2" srcset="" />
                <img src={image3} alt="3" srcset="" />
                <img src={image4} alt="4" srcset="" />

            </div>
            <div className="right-reasons">
                <span >
                    some reasons
                </span>
                <div>
                    <span className="stroke-text">
                        why
                    </span>
                    <span> choose use ?</span>
                </div>
            <div className='details-right'>
            <div>
                <img src={tick} alt="" />
                <span>OVER 140+ EXPERT COACHS</span>
            </div>
            <div>
                <img src={tick} alt="" />
                <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
            </div>
            <div>
                <img src={tick} alt="" />
                <span>1 FREE PROGRAM FOR NEW MEMBERS</span>
            </div>
            <div>
                <img src={tick} alt="" />
                <span>RELIABLE PARTNERS</span>
            </div>
            </div>
         <span style={{color : "var(--gray",
         fontWeight:"normal"}}> OURS PARTNERS</span>
         <div className="partners">
         <img src={nb} alt="" />
         <img src={adidas} alt="" />
         <img src={nike} alt="" />
         </div>



            </div>
        </div>
    )
}

export default Reasons