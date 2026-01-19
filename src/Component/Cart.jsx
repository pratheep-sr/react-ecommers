import whychoses from "../assets/image/why-choose.png";
import { FaPlus } from "react-icons/fa6";
import { FaRegWindowMinimize } from "react-icons/fa";
import { CiSquareRemove } from "react-icons/ci";

function cart() {
  return (
    <>
      <section className="cart-section  ">
        <div className="header">
          <h2>Welcom to cart</h2>
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
      
    </>
  );
}

export default cart;
