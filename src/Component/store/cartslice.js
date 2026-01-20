import  {createSlice} from '@reduxjs/toolkit';

const cartslice = createSlice({
     name:"cartpopup",
     initialState:{
        isOpen:false
     },
     reducers:{
        displyblock(state,action){
           state.isOpen=true
            
        },
        displaynone(state,action){
            state.isOpen=false
        }
     }
})

export default cartslice.reducer
 export let{displyblock,displaynone} = cartslice.actions