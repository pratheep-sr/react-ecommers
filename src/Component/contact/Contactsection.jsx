import Button from "react-bootstrap/Button";

function Contactsection() {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 display-contact">
            <h3 className="size-contact">
              Contact<span> US</span>
            </h3>
            <div className="contact-location">
              <h4>Address:</h4>
              <p>123 Heritage Street, Tirunelveli, Tamil Nadu, India</p>
            </div>
            <div className="contact-location">
              <h4>Email</h4>
              <p> info@traditionsnacks.com</p>
            </div>
            <div className="contact-location">
              <h4>Phone</h4>
              <p>+91 98765 43210</p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 ">
            <h3 className="size-contact">
              Get in <span>Touch</span>
            </h3>
            <div className="form">
              <label>Name:</label>
              <input type="text" />
              <label>Email:</label>
              <input type="text" />
              <label>Mobile:</label>
              <input type="number" />
              <label>Message:</label>
              <textarea></textarea>
              <Button variant="secondary" className="button form-button">
                Submit
              </Button>
            </div>
          </div>

          <div className="col-xl-12 col-lg-12 map-contact">
            <div style={{ width: "100%", height: "450px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7777.894373230945!2d77.61452!3d12.911116!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae157981296819%3A0x9b62b8eb63f8c23f!2sSignature%20Car%20Studio!5e0!3m2!1sen!2sin!4v1768647956541!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactsection;
