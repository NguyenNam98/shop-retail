import React,{useEffect,useState} from 'react';
import ProductView from './ProductView'
import Axios from 'axios';

function ProductRecommend(props){
    const [product, setProduct]=useState([]);
    const productPre=props.productPre;
    useEffect(() => {
        Axios.get('http://localhost:3001/products').then((res)=>{
            setProduct(res.data)
        })
    }, [])
    let productRecomment=[];
    for(let i in product){
        if(product[i].productSex===productPre.productSex){
            if(product[i].productGroupCate===productPre.productGroupCate
             &&product.productCate==productPre.productCate){
                productRecomment.push(product[i])
            }else{
                if(product[i].productGroupCate===productPre.productGroupCate){
                    productRecomment.push(product[i])
                }else{
                    productRecomment.push(product[i])
                }
            }
        }
    }
    let productRec = productRecomment.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
    })
 return(
     <div className='recommendproduct'>
         <div className='recommendproduct-container'>
             <div className='recommendproduct-title'>Related Products</div>
             <div className='recomment-product'>
                 {
                     productRec.slice(0,5).map((item,index) =>{
                        return(
                            <ProductView
                            key={index}
                            product={item}
                            />
                        )
                     })
                 }
             </div>
         </div>

     </div>
 )
}
export default ProductRecommend;