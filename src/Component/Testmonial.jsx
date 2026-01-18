import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testmonial(){

const testmonial = [
  { 
    id: 1, 
    name: "Arun Kumar", 
    paragraph: "The quality of the dry fruits is truly excellent. Every product tastes fresh, feels premium, and is packed with great care. The packaging is neat, and the overall experience feels trustworthy and professional." 
  },
  { 
    id: 2, 
    name: "Priya Sharma", 
    paragraph: "I was really impressed with the hygienic packaging and the quick delivery service. The dry fruits were fresh, flavorful, and perfectly sealed, which made me confident about ordering again." 
  },
  { 
    id: 3, 
    name: "Karthik Raj", 
    paragraph: "The taste and quality are absolutely authentic and premium. My entire family enjoyed the products, and we could feel the freshness in every bite. Definitely one of the best choices online." 
  },
  { 
    id: 4, 
    name: "Meena Devi", 
    paragraph: "This is one of the best online stores for dry fruits that I have tried so far. The products are fresh, pricing is fair, and the overall service experience is smooth and reliable." 
  },
  { 
    id: 5, 
    name: "Suresh Babu", 
    paragraph: "The flavor is rich and the freshness is clearly noticeable. Every product feels carefully selected and well packed. I am completely satisfied with the quality and will surely place more orders." 
  },
  { 
    id: 6, 
    name: "Divya", 
    paragraph: "These dry fruits are a healthy and tasty snack option for my children. The quality is consistently good, the taste is natural, and I feel confident serving them to my family daily." 
  }
];


  var settings = {
    mobileFirst: true, 
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }
]

  };

  return (
    <section className="section1 bg">
      <div className="container">
      <div className="row">
         <div className="heading heading2">
          <h1>
            What Our <span>Customers Say </span>
          </h1>
          <p>
            Hear from our happy customers who love the freshness, quality, and authentic taste of our premium dry fruits.
          </p>
        </div>

        <Slider {...settings} >
          {testmonial.map((test) => (
            <div key={test.id}>
              <div className="space-testmonial">
                <p>"{test.paragraph}"</p>
                <h5>- {test.name}</h5>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      </div>
    </section>
  );
}

export default Testmonial;