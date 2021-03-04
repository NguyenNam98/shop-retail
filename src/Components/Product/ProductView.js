import React, {useEffect,useState} from 'react';
import Axios from 'axios';

function ProductView(){
    const [products, setProducts] =useState([]);
    
     useEffect(() => {
         Axios.get('http://localhost:3001/products').then((res)=>{
             setProducts(res.data) 
         }); 
     }, [])
  
    return(
       <div> 
        </div>
      
    )
}
export default ProductView ;