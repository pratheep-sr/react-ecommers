import  {configureStore}  from '@reduxjs/toolkit'
import  cartstate from './cartslice'

 export  const store = configureStore({
 
 reducer:{
    cartpopup:cartstate 
 } 

})