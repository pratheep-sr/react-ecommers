import {createSlice} from '@reduxjs/toolkit'


const cartmanage = createSlice({
   name:"cartmanage",
   initialState:[],
   reducers:{
 
     addcart(state,action){

    let checkingpush = state.find((state)=>{return(state.id == action.payload.id)})
  
    
    if(checkingpush){
     
    checkingpush.cound+=1
      
    }
    else{
      state.push({...action.payload,cound:1})
    }

       
     
     },
     delectcart(state,action){
       
       let handledelect = state.filter((state)=>{return(state.id!==action.payload)});
       

       return handledelect
       
        
        
     }



   }

})

export default cartmanage.reducer
export let{addcart,delectcart} = cartmanage.actions