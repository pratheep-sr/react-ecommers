import {createSlice} from '@reduxjs/toolkit'


const cartmanage = createSlice({
   name:"cartmanage",
   initialState:[],
   reducers:{
 
     addcart(state,action){
      
        state.push(action.payload)
     
     },
     delectcart(state,action){
       
       let handledelect = state.filter((state)=>{return(state.id!==action.payload)});
       

       return handledelect
       
        
        
     }



   }

})

export default cartmanage.reducer
export let{addcart,delectcart} = cartmanage.actions