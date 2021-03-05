import React, {useEffect,useState} from 'react';
import Axios from 'axios';
import HomeListProduct from './HomeListProduct';
import './HomeComponent.css';

function HomeTab(){
    const [products, setProducts] =useState([]);
    const [currentTab,setCurrentTab]=useState(1);
    const[isActive, setIsActive]=useState(1);
    
     useEffect(() => {
         Axios.get('http://localhost:3001/products').then((res)=>{
             setProducts(res.data) 
         }); 
     }, []);
     
    //get products best sell

    let height=550;
     if(products.length)
        {
            products.sort((a,b)=>{
                return b.productSold-a.productSold
            })
            if(products.length<5)
            height=260;
        }
     
    //get new products   

    const productCopy=[...products];
    const dateProduct=[];

    if(productCopy){
        productCopy.sort((a,b)=>{
            return (new Date(b.productDate)-new Date(a.productDate))
    })

    for(let i in productCopy){
        const today= new Date();
        const productDay=new Date(productCopy[i].productDate);
        if(((today-productDay)/(1000*3600*24))<40){
            dateProduct.push(productCopy[i])
        }
    }
}

    //get product best sale
    const sellingProduct = []
    if (products.length) {
        for (let i = 0; i < products.length; i++) {
            if (Number(products[i].productSale) > 0) {
                sellingProduct.push(products[i]);
            }
        }
        if (sellingProduct.length <= 5) {
            height = 360;
        }
    }
    
    return(
       <div className='hometab'>
           <div className='hometab-container flex-center'>
               <p 
                onClick={() => {setCurrentTab(1); setIsActive(1)}} 
                className={isActive===1? 'home-tab-active':''}
               >
                   Best Sellers
               </p>
               <p 
                onClick={() => {setCurrentTab(2); setIsActive(2)}} 
                className={isActive===2? 'home-tab-active':''}
               >
                   New Products
               </p>
               <p 
                onClick={() => {setCurrentTab(3); setIsActive(3)}} 
                className={isActive===3? 'home-tab-active':''}
               >
                   Sale Products 
               </p>
            </div> 

            <div className='tab-content'>
                {
                    currentTab===1&&
                    <HomeListProduct 
                        products={products}
                        height={height}
                    />
                }
                {
                    currentTab===2&&
                    <HomeListProduct 
                        products={dateProduct}
                        height={height}
                    />
                }

                {
                    currentTab===3&&
                    <HomeListProduct 
                        products={sellingProduct}
                        height={height}
                    />
                }
            </div>
        </div>
    )
}
export default HomeTab ;