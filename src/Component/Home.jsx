import Navigation from  './Navigation';
import Carosul from './Carosul';
import Aboutsection from './Aboutsection';
import Productsection from './Productsection';
import Whychooses from './Whychooses';
import Testmonial from './Testmonial';
import Calltoaction from './Calltoaction';
import { Footer } from './Footer';
import Cart from './Cart'



function Home(){
return(
    <>
    <Navigation/>
    <Carosul/>
    <Aboutsection />
    <Productsection/>
    <Whychooses/>
    <Calltoaction/>
    <Testmonial/>
    <Cart/>
    <Footer/>

    </>



)

}

export default Home;