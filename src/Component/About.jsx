import Navigation from "./Navigation";
import Aboutsection from "./Aboutsection"
import Testmonial from "./Testmonial";
import {Footer} from "./Footer";
import Breadcrumbs from "./breadcrumbs";
import Mission from "./mission";
import Cart from './Cart';

function About(){
    return(
       <>
        <Navigation/>
        <Breadcrumbs title="About" />
        <Aboutsection/>
        <Mission/>
        <Testmonial/>
       <Cart/>
        <Footer/>
         
         </>
    )
}

export default About ;