import {createSlice} from '@reduxjs/toolkit'


const cartmanage = createSlice({
   name:"cartmanage",
   initialState:[],
   reducers:{
 
     addcart(state,action){
   
    let checkingpush = state.find((state)=>{return(state.id == action.payload.id)})
       
 let current = Number(action.payload.price.replace("₹"," "))
    console.log(current);
    

    if(checkingpush){
    
    checkingpush.cound+=1;
    checkingpush.price = checkingpush.cound * checkingpush.setprice
   
    }
   
    else  {
     
      state.push({...action.payload,cound:Number(action.payload.cound)||1, setprice:current, price:current* Number(action.payload.cound)|| current

      })
    }
     },
     
innerdelect(state,action){
let checkingpush = state.find((state)=>{return(state.id == action.payload)})
  
      //     1
    if(checkingpush.cound !==1){
     // 4-=1
    checkingpush.cound-=1
      checkingpush.price = checkingpush.cound * checkingpush.setprice
    }
    else{
    let handledelect = state.filter((state)=>{return(state.id!==action.payload)});
       

       return handledelect
    }

},
inneradd(state,action){
  
  let inneradd = state.find((innercart)=>{return(innercart.id==action.payload)})
  
  inneradd.cound +=1
  inneradd.price = inneradd.cound * inneradd.setprice
}
,
     delectcart(state,action){
       
       let handledelect = state.filter((state)=>{return(state.id!==action.payload)});
       

       return handledelect
       
        
        
     },

    updateinnerproducts(state,action){

   let updateinner = state.find((item)=>{
    return ( item.id==action.payload.id)
   })
     
if(updateinner){
  updateinner.cound +=action.payload.newweight-1;
  updateinner.price = updateinner.setprice * action.payload.newweight
  
  
}
   


    }
     

   }

})

export default cartmanage.reducer
export let{addcart,delectcart,innerdelect,inneradd ,updateinnerproducts} = cartmanage.actions