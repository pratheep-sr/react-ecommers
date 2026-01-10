import { useEffect, useState } from "react";


function custom(url){
    let[product,setproduct]=useState([]);
    let[error,seterror] =useState("");
    let[isloading,setisloading] =useState(true)


    useEffect(()=>{
        let product = async()=>{
             try{
              let response = await fetch(url)
             if(response.ok){
                 let data   = await response.json();
                 setproduct(data)
             }
             else{
                throw new Error("not not rescive");
                
             }

             }
             catch(error){
                
                seterror(error.message)
             }
             finally{
                setisloading(false)

             }


        };
        product();


    },[])

   return{product,error,isloading}

}

export default custom;