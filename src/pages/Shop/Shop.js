import React,{useState,useEffect} from "react";
import Axios from 'axios';
import{withRouter} from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar';
import Banner from '../../Components/Banner/Banner2';
import  imgBanner from '../../Assets/S3.jpg'
import ShopContent from '../../Components/Shop/ShopContent'

function Shop(props){

    const [products, setProducts]=useState([]);
    const [productCateList,setProductCateList]=useState([]);
    const sex =props.location.pathname.split('/')[1];
    const cate=props.location.pathname.split('/')[2];

   useEffect(() => {
     if(sex.toLowerCase()==='shop'){
         Axios.get('http://localhost:3001/products').then((res)=>{
             const cateList=[];
             
             for(let i in res.data){
                 cateList.push(res.data[i].productCate)
             }
            let List=cateList.filter(function(elem,index,seft){
                return index===seft.indexOf(elem);
            });
            console.log(List)
             

             
         })
     }
      
   }, [])

    return(
        <div>
            <Navbar/>
            <Banner imgBanner={imgBanner}
            />
            <ShopContent/>
        </div>
    )
}
export default withRouter(Shop);