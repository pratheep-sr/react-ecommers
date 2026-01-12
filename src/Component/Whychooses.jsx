import whychoses from "../assets/image/why-choose.png";
import { PiFlowerLotus } from "react-icons/pi";
function Whychooses() {
  return (
    <section className="section ">
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

      <div className="container why-choose">
        <div className="row">
          <div className="col-lg-4">
            <div className="warp-section left-padding " >
                <PiFlowerLotus className="why-choose-icons" />
            <div>
                <h4>Authentic traditional recipes</h4>
           <p>Authentic traditional recipes crafted with time-tested methods.</p>
            </div>
            </div>

            <div className="warp-section left-padding1">
                <PiFlowerLotus className="why-choose-icons" />
            <div>
                <h4>Fresh and safe  for superior quality.</h4>
           <p>Made with fresh, high-quality natural ingredients for pure taste.</p>
            </div>
            </div>

              <div className="warp-section left-padding">
                <PiFlowerLotus className="why-choose-icons" />
            <div>
                <h4>No preservatives no artificial flavors</h4>
           <p>No preservatives or artificial flavors, only genuine goodness.</p>
            </div>
            </div>
          </div>

          <div className="col-lg-4">
            <center><img src={whychoses} className="image" /></center>
          </div>
          <div className="col-lg-4">
            <div className="warp-section left-padding1 ">
                <PiFlowerLotus className="why-choose-icons " />
            <div>
                <h4>Hygienic preparation & packaging</h4>
           <p>Hygienically prepared and carefully packaged for safety and freshness.</p>
            </div>
            </div>

              <div className="warp-section left-padding" >
                <PiFlowerLotus className="why-choose-icons"  />
            <div>
                <h4>Rich taste with cultural heritage</h4>
           <p>Rich flavors that celebrate our cultural heritage.</p>
            </div>
            </div>

                <div className="warp-section left-padding1  ">
                <PiFlowerLotus className="why-choose-icons" />
            <div>
                <h4>Loved by customers across generations</h4>
           <p>Loved and trusted by customers across generations.</p>
            </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Whychooses;
