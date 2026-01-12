import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testmonial(){


      const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
    let testmonial=[
        {
            id:1,
            name:"Ramesh K – Chennai",
            paragraph:"The snacks are extremely fresh and crispy. The mixture and murukku tasted just like homemade. Highly satisfied with the quality!"

        },
          {
            id:2,
            name:"Priya S – Coimbatore",
            paragraph:"Beautiful packaging and excellent taste. My kids loved the sweets and snacks. Will definitely order again."

        },
          {
            id:3,
            name:"Arun M – Bangalore",
            paragraph:"Authentic flavor and great variety. It feels like eating traditional snacks from my hometown."
        },
          {
            id:4,
            name:"Arun M – Bangalore",
            paragraph:"Authentic flavor and great variety. It feels like eating traditional snacks from my hometown."
        },
          {
            id:5,
            name:"Arun M – Bangalore",
            paragraph:"Authentic flavor and great variety. It feels like eating traditional snacks from my hometown."
        }
    ]

    return(
        <>
        <section className="section bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 heading heading2">
            <h1>
           Taste the Heritage in  <span> Every Bite </span>
            </h1>

            <p>
              Experience rich traditional flavors crafted from timeless recipes.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
             <Slider {...settings}>
          {testmonial.map((test)=>{
          return(
              <div key={test.id} className=" col-lg-4 space-testmonial">
                <p>{test.paragraph}</p>
                <h5>{test.name}</h5>
            </div>
          )

          })}
          </Slider>
        </div>
        </div>
     </section>
        </>
    )

}

export default Testmonial;