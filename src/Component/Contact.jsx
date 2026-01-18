
import { Footer } from "./Footer";
import Navigation from "./Navigation";
import Breadcrumbs from "./breadcrumbs";
import Contactsection from "./contact/Contactsection";


function Contact(){
    return(
  <>
  <Navigation/>
<Breadcrumbs title="Contact"/>
<Contactsection />
<Footer/>
   
   </>
    )
}

export default Contact;