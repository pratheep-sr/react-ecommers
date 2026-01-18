import Navigation from "./Navigation";
import Aboutsection from "./Aboutsection"
import Testmonial from "./Testmonial";
import {Footer} from "./Footer";
import Breadcrumbs from "./breadcrumbs";
import Mission from "./mission";

function About(){
    return(
       <>
        <Navigation/>
        <Breadcrumbs title="About" />
        <Aboutsection/>
        <Mission/>
        <Testmonial/>
        <Footer/>
         
         </>
    )
}

export default About ;