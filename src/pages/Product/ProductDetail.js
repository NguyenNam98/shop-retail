import React,{useEffect,useState} from 'react';
import Axios from 'axios';
import Navbar from '../../Components/Navbar/Navbar';
import NewsLetter from '../../Components/Layouts/NewsLetter';
import Footer from '../../Components/Layouts/Footer';
import ProductBody from '../../Components/Product/ProductBody';
import ProductRecommend from '../../Components/Product/ProductRecommend';


export default function ProductDetail(props){
    const [product,setProduct]=useState([]);
    useEffect(() => {
    Axios.get(`http://localhost:3001/products/`+props.match.params.id).then((res)=>{
        setProduct(res.data)
    })
    }, [props.match.params.id])

    return(
        <div>
            <Navbar/>
            {product.map((item,index)=>{
                return(
                    <ProductBody
                    product={item}
                    id={index}
                    />
                )
            })}
            {product.map((item,index)=>{
                return(
                        <ProductRecommend
                        productPre={item}
                        id={index}
                        />
                    )
                })
            }
            
            <NewsLetter/>
            <Footer/>
        </div>
    )
}