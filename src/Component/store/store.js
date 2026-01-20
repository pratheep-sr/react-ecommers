import  {configureStore}  from '@reduxjs/toolkit'
import  cartstate from './cartslice'
import cartmanage from './cartmanage'

 export  const store = configureStore({
 
 reducer:{
    cartpopup:cartstate, 
    cartadd:cartmanage
 } 

})