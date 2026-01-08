import Carousel from 'react-bootstrap/Carousel';
import first  from '../assets/image/Banner-01.jpg'
import second  from '../assets/image/Banner-02.jpg'
import third  from '../assets/image/Banner-03.jpg'
import {Button} from 'react-bootstrap'
import { useState } from 'react';
import {Link}  from  'react-router-dom'


const carosul=[
    {id:1,
        title :"Premium Dry Fruits for a Healthier Lifestyle",
        subtitle:"Freshly sourced, perfectly packed, and rich in natural goodness.",
        image:first
    },
    {id:2,
        title :"Taste the Goodness of Nature",
        subtitle:"Handpicked dry fruits packed with nutrition, freshness, and flavor.",
        image:second
    },
    {id:3,
        title :"Power Up Your Day with Pure Nutrition",
        subtitle:"Healthy, delicious, and naturally rich dry fruits for everyday energy.",
        image:third
    }
]

function Carosul() {
    let [hover,sethover]= useState(true);
    return (
    <Carousel>
      {carosul.map(slide => (
        <Carousel.Item key={slide.id} interval={slide.interval}>
          {/* Replace with your image component */}
          <img
            className="d-block w-100"
            src={slide.image}
            alt={slide.title}
          />

          <Carousel.Caption>
            <h3>{slide.title}</h3>
            <p>{slide.subtitle}</p>
            <Button style={{backgroundColor:hover ?"#ecb325" :"#ffffff",
                               border: "1px solid white",
                               color:hover ?"#ffffff" :"#000000"
             }} onMouseOver={()=>{sethover(false)}}
             onMouseLeave={()=>{sethover(true)}} as={Link} to="/Ourproducts" >View Product </Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carosul;
