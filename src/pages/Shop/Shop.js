import React,{useState,useEffect} from "react";
import Axios from 'axios';
import{Link, withRouter} from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar';
import Banner from '../../Components/Banner/Banner2';
import  imgBanner from '../../Assets/S3.jpg';
import ShopContent from '../../Components/Shop/ShopContent';
import Newsletter from '../../Components/Layouts/NewsLetter';
import Footer from '../../Components/Layouts/Footer';

function Shop(props){

    const [products, setProducts]=useState();
    const [productCateList,setProductCateList]=useState([]);
    let sex =props.location.pathname.split('/')[1];
    let cate=props.location.pathname.split('/')[2];

   useEffect(() => {
     if(sex.toLowerCase()==='shop'){
         Axios.get('http://localhost:3001/products').then((res)=>{
             const cateList=[];
             const exProducts=[];
             for(let i in res.data){
                 cateList.push(res.data[i].productCate);
                 if(cate){
                     if((res.data[i].productName).toLowerCase().includes(cate.toLowerCase())){
                         exProducts.push(res.data[i])
                     }
                 }else
                 {
                     exProducts.push(res.data[i])
                 }
             }
            let list=cateList.filter(function(elem,index,seft){
                return index===seft.indexOf(elem);
            }
            );
            setProductCateList(list);    
            setProducts(exProducts);
               
        }) 
        }
        else
        {
            sex.toLowerCase() === "men" ? sex = "man" : sex = "woman"
            Axios.get(`http://localhost:3001/products`)
                .then(res => {
                    const exProducts = []
                    for (let i in res.data) {
                        if (sex === "woman") {
                            if (res.data[i].productSex === "Woman") {
                                exProducts.push(res.data[i])
                            } 
                        } else {
                            if (res.data[i].productSex === "Man") {
                                exProducts.push(res.data[i])
                            } 
                        }
                    }
                  const exCate=[];
                  const productLists=[];
                   for(let i in exProducts){
                      exCate.push(exProducts[i].productCate)
                   }
                   let list=exCate.filter(function(elem,index,seft){
                    return index===seft.indexOf(elem);
                   })
                   setProductCateList(list);
                   for(let i in exProducts){
                       if(cate){
                           if(exProducts[i].productGroupCate.toLowerCase().split(' ').join('-') === cate||
                           exProducts[i].productCate.toLowerCase().split(' ').join('-') === cate
                           ){
                                productLists.push(exProducts[i])
                           }
                       }
                       else{
                           productLists.push(exProducts[i])
                       }
                   }
                   setProducts(productLists);
                })
                    
        }
   
     }, [sex,cate])

    return(
        <div>
            <Navbar/>
            <Banner imgBanner={imgBanner}
            />
            <ShopContent products={products}
                     productCateList={productCateList}
            />
            <Newsletter/>
            <Footer/>
        </div>
    )
}
export default withRouter(Shop);