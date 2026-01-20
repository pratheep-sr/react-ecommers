import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import custom from './customhook/custom';
import { BlinkBlur } from 'react-loading-indicators';

 
 function Productsection(){
   
let{product,error,isloading} = custom("https://eccommers.onrender.com/product")


if(isloading){
return(
   <section className="loadingstate bg">
    <BlinkBlur color="#ffd300" size="large" text="" textColor="" />
   </section>
  

)

}

   else{
     return(
        <>
        <section className="about-section bg">
       <div className="container">
        <div className="row">
            <div className="col-lg-12 heading">
              <h1>Taste the <span>Tradition </span> </h1>
                 
              <p>Explore our handpicked collection of snacks, sweets, and premium treats</p>

            </div>
   { product.map((product,index)=>{
     return(
        
          <div className=' col-xl-3 col-lg-4 col-sm-6  bottom-padding' key={product.id} >
             <Card className='full-card'   >
      <Card.Img variant="top" src={product.image}
      style={{ height: "300px", objectFit: "cover" }}
       />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
      </Card.Body>
      <Card.Footer className='card-footer'>
         <Card.Title className='price' >{product.price}</Card.Title>
        <Button variant="primary">Add to Cart</Button>
      </Card.Footer>
    </Card>
          </div>
       
     )
  

   })

   }
        </div>

       </div>
       
       </section>
          <h1> {error}</h1>

        </>
    )
   }

}

export default Productsection;