import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import custom from './customhook/custom';
 
 function Productsection(){
   
let{product,error,isloading} = custom("https://eccommers.onrender.com/product")

console.log(product);


    return(
        <>
       <div className="container">
        <div className="row">
            <div className="col-lg-12 heading">
                 <h1>Fresh & Hygienic Processing </h1>

            </div>
   { product.map((product)=>{
     return(
          <>
          <div className='col-lg-3'>
             <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
          </div>
          </>
     )
  

   })

   }
        </div>

       </div>

        </>
    )

}

export default Productsection;