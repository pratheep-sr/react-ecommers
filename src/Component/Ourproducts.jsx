import Breadcrumbs from "./breadcrumbs";
import Calltoaction from "./Calltoaction";
import { Footer } from "./Footer";
import Navigation from "./Navigation";
import Productsection from "./Productsection";


function Ourproducts(){

    return(
       <>
       <Navigation/>
        <Breadcrumbs title="Our Product" />
        <Productsection/>
        <Calltoaction/>
        <Footer/>
       </>
    )
}

export default Ourproducts;