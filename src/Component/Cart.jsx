import whychoses from "../assets/image/why-choose.png";
import { FaPlus } from "react-icons/fa6";
import { FaRegWindowMinimize } from "react-icons/fa";
import { CiSquareRemove } from "react-icons/ci";
import {useSelector} from 'react-redux';
import { IoCloseCircle } from "react-icons/io5";
import {displaynone} from '../Component/store/cartslice'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {delectcart} from '../Component/store/cartmanage.js'
import Button from 'react-bootstrap/Button';
import {innerdelect,inneradd} from '../Component/store/cartmanage.js'
function cart() {
let cartrender = useSelector((stateadd)=>{return(stateadd.cartadd)})
// cart popup
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

// handle delect the product 
function  handledelectcart(id){
  dispatch(delectcart(id))
}

// handle cart minus
function handlecartminus(id){
    dispatch(innerdelect(id))
}

// handle cart  add
function handleadd(id){
    
  dispatch(inneradd(id))
}
   
// total cart calculate


    let totalvalue = cartrender.reduce((accumlater,celement)=>{
    return accumlater+celement.price
  },0)


console.log(totalvalue);








console.log(cartrender);


if(selector ){

    return (

      <div className="total-cart " >
        <section className="cart-section">
        <div className="header">
          <div className="headerelement" >
            <h2>Welcom to cart</h2>
          <IoCloseCircle role="button" onClick={()=>{handlecolose()}} />  
          </div>
        </div>
        
        {
          cartrender.length==0?  <div className="emptycart">
            <h4>Cart is empty</h4>
          </div>:
          cartrender.map((cartproduct)=>{
     
          return(
          <div className="body-cart " key={cartproduct.id}>
         
         <div className="img-cart">
           <img src={cartproduct.image} />
         </div>
  
        
           <div className="adding-cart ">
           <h5>{cartproduct.title}</h5>
           <p>
             {cartproduct.description}
           </p>
  
           <div className="price">
             <div className="adding-process">
              
               <FaRegWindowMinimize onClick={()=>{handlecartminus(cartproduct.id)}} role="button" className="minus" />
              {cartproduct.cound}Kg <FaPlus className="plus" role="button"  onClick={()=>{handleadd(cartproduct.id)}} />
             </div>
             <div>
               <h5>₹{cartproduct.price}.00
                
               </h5>
             </div>
           </div>
         
         </div>
  
         <div className="delect-cart" role="button" onClick={()=>{
          handledelectcart(cartproduct.id)
         }} >
           <CiSquareRemove />
         </div>
       </div>

      
       
        )
        
        
          })

          
        }
          { cartrender.length==0? null :
            <div className="total-footer">
         <div className="cartfooter">
             <Button variant="primary" className="inner-cartbutton" >Check out</Button>
          <div className="footer-price">₹{totalvalue}.00</div>
        </div>
     </div>

          }
       
   

        
      </section>
      </div>
      
    
  );
}
}

export default cart;