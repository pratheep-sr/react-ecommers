import React from 'react';
import Breadcrumbs from './breadcrumbs';
import Navigation from './Navigation';
import Karasevinner from './Karasevinner';
import Calltoaction from './Calltoaction';
import { Footer } from './Footer';

const Karasev = () => {
  return (
   <>
    <Navigation/>
    <Breadcrumbs title="Karasev" />
    <Karasevinner/>
    <Calltoaction/>
    <Footer/>
   </>
  )
}

export default Karasev