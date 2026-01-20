
import { Footer } from "./Footer";
import Navigation from "./Navigation";
import Breadcrumbs from "./breadcrumbs";
import Contactsection from "./contact/Contactsection";
import Cart from './Cart';

function Contact(){
    return(
  <>
  <Navigation/>
<Breadcrumbs title="Contact"/>
<Contactsection />
<Cart/>
<Footer/>
   
   </>
    )
}

export default Contact;