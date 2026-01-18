import React from "react";
import logo from "../assets/image/logo.jpg";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

let link=[
  {
    id:1,
    name:"Home",
    path:"/"
  },
  {
    id:2,
    name:"About",
    path:"/About"
  },
  {
    id:3,
    name:"Our Products",
    path:"/OurProducts"
  },
  {
    id:4,
    name:"Combo",
    path:"/Combo"
  },
  {
    id:5,
    name:"Contact",
    path:"/Contact"
  }
]
let Products=[
  {id:1,
    name:"Karasev"
  },
   {id:2,
    name:"Corn Mixture"
  },
   {id:3,
    name:"Roasted Cashew Chilli"
  },
   {id:4,
    name:"Roasted Cashew Pepper"
  },
   {id:5,
    name:"Roasted Cashew Salt"
  },
   {id:6,
    name:"Tirunelveli Mixture"
  }
]

export const Footer = () => {
  return (
    <>
    <section className="section-footer bg-footer">
      <div className=" container display-class">
        <div className="row">
        <div className="col-xl-3 col-lg-3 col-sm-6">
          <img src={logo} />
          <p>
            Delight in the authentic taste of tradition! We bring you a wide
            variety of handcrafted, preservative-free snacks inspired by
            time-honored recipes. Every bite is a celebration of flavor,
            quality, and heritage.
          </p>
        </div>
        <div className="col-xl-3 col-lg-3 col-sm-6 top-footer1">
          <div className="algnment-margin">
            <h3>Quick Links </h3>
          <ul>
           {link.map((quick)=>{
             return(
             
              <li key={quick.id} >
               <FaLongArrowAltRight  /> <Link to={quick.path}>{quick.name}</Link>
              </li>
            
            
             )
           })}
           </ul>
          </div>
         
        </div>
        <div className="col-xl-3 col-lg-3 col-sm-6 top-footer">
          <h3>Our Products</h3>
           <ul >
         { Products.map((Products,index)=>{
          return(
           
            <li  key={Products.id}><FaLongArrowAltRight /> <Link>{Products.name}</Link> </li>
          )
         })}
         </ul>
         
        </div>
        <div className="col-xl-3 col-lg-3 col-sm-6 top-footer">
          <h3>Address</h3>
            <ul>
    <li> Address: <Link>  123 Heritage Street, Tirunelveli, Tamil Nadu, India</Link> 
    </li>
    <li> Phone:<Link>+91 98765 43210</Link>
    </li>
    <li> Email: <Link>info@traditionsnacks.com</Link>
     
    </li>
  </ul>
        </div>
          </div>
      </div>
     
    </section>
    <div className="container-fluid">
       <div className="row ">
       <div className="col-lg-12 copy-rights">
         Copyright © 2025 Digital Partner S.PRATHEEP . All Rights Reserved.
       </div>

      </div>
    </div>
    
    </>
    
  );
};
