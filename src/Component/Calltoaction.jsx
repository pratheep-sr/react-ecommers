import callto from '../assets/image/cta.jpg'
import {Button} from 'react-bootstrap'
import {useState} from 'react'
import {Link}  from 'react-router-dom'


function Calltoaction(){
    let [hover,sethover]= useState(true);
    return(

        <div className='cta-container '>
             <div className='cta-overylay' ></div>
        <img src={callto}  className='cta' />
        <div className='cta-title col-xl-6 col-lg-6 col-sm-9 '>
             <h1>Taste the Goodness of Nature</h1>
         <p>Fuel your body with premium-quality dry fruits that are fresh, natural, and packed with essential nutrients for everyday wellness.</p>
          <Button className="carosulbutton cta-button" style={{backgroundColor:hover ?"#ecb325" :"#ffffff",
                               border: "1px solid white",
                               color:hover ?"#ffffff" :"#000000"
             }} onMouseOver={()=>{sethover(false)}}
             onMouseLeave={()=>{sethover(true)}} as={Link} to="/Ourproducts" >Shop Now</Button>
        </div>
        </div>
    )
}

export default Calltoaction;