import React from 'react';
import Breadcrumbs from './breadcrumbs';
import Navigation from './Navigation';
import Karasevinner from './Karasevinner';
import Calltoaction from './Calltoaction';
import { Footer } from './Footer';
import Cart from './Cart';

const Karasev = () => {
  return (
   <>
    <Navigation/>
    <Breadcrumbs title="Karasev" />
    <Karasevinner/>
    <Calltoaction/>
    <Cart/>
    <Footer/>
   </>
  )
}

export default Karasev