import React, { useState } from "react";
import Slider from "react-slick";

import img1 from "../assets/image/inner1.jpg";
import img2 from "../assets/image/inner2.jpg";
import img3 from "../assets/image/inner3.jpg";
import img4 from "../assets/image/inner4.jpg";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import Button from 'react-bootstrap/Button';


function Karasevinner() {

  const images = [img1, img2, img3, img4];
  let[weight,setweight] = useState("");
  let[cound,setcound] = useState(0);
  // console.log(weight);
  

  const settings = {
    customPaging: function (i) {
      return (
        <div >
          <img 
            src={images[i]}
            alt={`thumb-${i}`}
            style={{
              width: "60px",
              height: "40px",
              objectFit: "cover",
              borderRadius: "6px"
            }}
          />
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
   arrows: false
  };

  return (
    <div className="section1">
      <div className="container">
        <div className="row">

          <div className="col-xl-6">
            <Slider {...settings}>
              {images.map((img, index) => (
                <div key={index}>
                  <center>
                    <img 
                    
                    src={img}
                    alt={`slide-${index}`}
                    style={{ width: "100%", borderRadius: "12px" }}
                  />
                  </center>
                </div>
              ))}
            </Slider>
          </div>
           <div className="col-xl-6">
            <h3>Karasev <span>(jar)</span></h3>
            <p>Karasev is a traditional sweet delicacy loved for its rich taste and soft texture. Our Karasev is carefully prepared using high-quality ingredients, following time-tested methods to deliver authentic flavor in every bite. Packed in a secure jar, it stays fresh longer and is perfect for everyday snacking or festive sharing.</p>
               <h4>Select Kg</h4>
              <div className="total-section" >
                <label>Select kg : </label><CiSquareMinus />
                <select className="select"  value={weight} onChange={(e)=>setweight(e.target.value)} >
                  <option value={"2kg"}>2Kg</option>
                  <option value={"3kg"}>3Kg</option>
                  <option value={"5kg"}>5Kg</option>
                  <option value={"6kg"}>6Kg</option>
                  <option value={"7kg"}>7Kg</option>
                </select>
                
              </div>
             <h5 className="price1"  > 1 Kg Jar • ₹85 | 2 Kg Jar • ₹150 | Freshly Prepared</h5>
             <h4 className="price">₹85.00</h4>
              <Button   variant="secondary" className="button">Add to Cart</Button>
           </div>
        

        </div>
      </div>
    </div>
  );
}

export default Karasevinner;
