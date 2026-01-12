import about from "../assets/image/about-dryfurits.jpg";
import { FaChevronCircleRight } from "react-icons/fa";
import {Button} from 'react-bootstrap'
import { useState } from "react";
import {Link}  from 'react-router-dom'


import { Paper, Typography, Container, Grid } from "@mui/material";
function Aboutsection() {
        let [hover,sethover]= useState(true);
  let area = {
    width: "30%",
  };

  let aboutsection = [
    {
      id: 1,
      title: "About ",
      title1:"Dry Furits",
      paragraph:
        "We are dedicated to providing premium-quality dry fruits that are fresh, nutritious, and carefully selected from trusted sources. Our products are hygienically processed and packed to preserve natural taste and health benefits. With a strong focus on quality, purity, and customer satisfaction, we ensure every pack meets the highest standards. Our mission is to deliver healthy, natural goodness you can trust every day.",

      heading: "Fresh & Hygienic Processing",
      heading1: "Premium Quality Products",
      heading2: "100% Natural & Pure",
      heading3: "Rich in Nutrition",
      heading4: "Quality You Can Trust",
    },
    
  ];
  return (
    <section className="about-section">
         <div className="about-image">
        <img src={about} alt="About us" />
      </div>
      {aboutsection.map((about, index) => {
        return (
          <div key={about.id} className="about-content">
            <h1>{about.title} <span  >{about.title1}</span> </h1>
            <p>{about.paragraph}</p>
            <ul>
              <li><FaChevronCircleRight  className="icons" />{about.heading}</li>
              <li><FaChevronCircleRight  className="icons" />{about.heading2}</li>
              <li><FaChevronCircleRight  className="icons" />{about.heading3}</li>
              <li><FaChevronCircleRight  className="icons" />{about.heading4}</li>
            </ul>
             <Button className="carosulbutton1" style={{backgroundColor:hover ?"#ecb325" :"#000000",
                               border: "1px solid white",
                               color:hover ?"#ffffff" :"#ffffff"
             }} onMouseOver={()=>{sethover(false)}}
             onMouseLeave={()=>{sethover(true)}} as={Link} to="/About" >Know More</Button>
          </div>
        );
      })}
     
    </section>
    
  );
}

export default Aboutsection;
