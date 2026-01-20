import whychoses from "../assets/image/why-choose.png";
import { FaPlus } from "react-icons/fa6";
import { FaRegWindowMinimize } from "react-icons/fa";
import { CiSquareRemove } from "react-icons/ci";
import {useSelector} from 'react-redux';
import { IoCloseCircle } from "react-icons/io5";
import {displaynone} from '../Component/store/cartslice'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
function cart() {

let selector = useSelector((state)=>{return(state.cartpopup.isOpen)}) ;
let dispatch = useDispatch()

let handlecolose = () => {
   dispatch(displaynone())
}
useEffect(() => {
  if (selector) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}, [selector]);



console.log(selector)
if(selector ){

    return (

      <div className="total-cart ">
        <section className="cart-section">
        <div className="header">
          <div className="headerelement" >
            <h2>Welcom to cart</h2>
          <IoCloseCircle role="button" onClick={()=>{handlecolose()}} />  
          </div>
        </div>
        <div className="body-cart ">
          
          <div className="img-cart">
            <img src={whychoses} />
          </div>

         
            <div className="adding-cart ">
            <h5>Karasev (Jar)</h5>
            <p>
              Crispy gram flour sev blended with spices for a crunchy, tasty
              snack.
            </p>

            <div className="price">
              <div className="adding-process">
               
                <FaRegWindowMinimize className="minus" />
                20 <FaPlus />
              </div>
              <div>
                <h5>200rs</h5>
              </div>
            </div>

          </div>

          <div className="delect-cart">
            <CiSquareRemove />
          </div>
        </div>
        
      </section>
      </div>
      
    
  );
}
}

export default cart;
