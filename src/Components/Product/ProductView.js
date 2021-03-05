import React, {useEffect,useState} from 'react';

import { withRouter } from 'react-router-dom';
import ProductQuickView from './ProductQuickView';
import ProductOverlay from './ProductOverLay';
import './ProductComponent.css';

function ProductView(props){
    const product=props.product;
    const [hover,setHover]=useState(false);
    const [view, setView]=useState(false);
    const redirect = (target) => {
        window.scrollTo(0,0);
        props.history.push(`/products/${product._id}`);
    }
    const closeView=(event)=>{
        document.body.style.overflow='unset';
        setView(false)
    }
    const openView=()=>{
        setView(true)
    }
    if(view){
        document.body.style.overflow = 'hidden';
    } 
    let today=new Date();
    let productDate= new Date(product.productDate);
    return(
       <div
       className='product product-view'
       style={{
           width:`calc(${props.width}-30px)`,
           height:`${props.parentHeight}`,
       }}
       > 
           <ProductQuickView
           product={product}
           closeView={closeView}
           view={view}
           />
           <div className='product-img'
           style={{height:`${props.height}`}}
           onMouseEnter={()=>{setHover(true)}}
           onMouseLeave={()=>{setHover(false)}}
           >
               <div className='product-tag'
               >
                   {
                       product.productSale>0&&
                       <div className='product-tag-item sale'>
                           {product.productSale}%
                        </div>

                   }
                   {
                       product.productSold>40&&
                       <div className='product-tag-item hot'>Hot</div>
                   }
                   {
                    ((today-productDate)/(1000*86400))<40 &&
                    <div className='product-tag-item new'>New</div>
                   }
               </div>
               <div className='product-img-bg'
                 onClick={redirect}
               >
                   <img className='product-pre'
                   src={product.productImg[0]}
                   alt=''
                   />
                   <img
                   className={hover===false? 'img-default hide':'img-default'}
                   src={product.productImg[1]}
                   />

               </div>
               <ProductOverlay
               product={product}
               openView={openView}
               />

           </div>
           <div className='product-title'>
               {product.productName}

           </div>
           {
               product.productFinalPrice<product.productPrice &&
               <div className='product-price flex-center'>
                   <p 
                   style={{textDecoration:'line-through',
                            color:'#777',
                            marginRight:'10px'
                        }}
                   >
                       {product.productPrice.toString()
                       .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                       Đ
                   </p>
                   <p> {product.productFinalPrice.toString()
                       .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                       Đ</p>

               </div>
           }
           {
               product.productFinalPrice===product.productPrice&&
               <div className='product-price'>
                   <p>{product.productFinalPrice.toString()
                       .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                       Đ</p>
               </div>
           }
         
        </div>
      
    )
}
export default withRouter( ProductView );