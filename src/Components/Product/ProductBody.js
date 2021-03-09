// import React ,{useState} from 'react';
// import './ProductComponent.css';
// import {Link} from 'react-router-dom';
// import Slider from "react-slick";

// function ProductBody(props){
//    const product=props.product;
//     const settings = {
        
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//     }
//     let dateProduct=new Date(product);
//     let today =new Date();
    
//     return(
//         <div className='productbody'>
//             <div className='productbody-container'>
//                 <div className=' productbody-breadcrumb'>
//                     <Link to='/'  className="breadcrumb-item breadcrumb-link">Home</Link>
//                     <i className="fa fa-angle-right"></i>
//                     <Link to={product.productSex==='Man'?'/men':'/women'}>{product.productSex==='Man'?'men':'women'}</Link>
//                 </div>
//                 <div className='productbody-main' >
//                 <div className='producquickview-slider'>
//                          <div class='productquickview-tag'>
//                             {
//                                 product.productSale>0&&
//                                 <div className='productquickview-tag-item sale'>
//                                     {product.productSale}%
//                                </div>
//                             }
//                             {
//                                 product.productSold>=40>0&&
//                                 <div className='productquickview-tag-item hot'>
//                                     HOT
//                                </div>
//                             }
//                              {
//                                  ((today-dateProduct)/(1000*86400))<40>0&&
//                                 <div className='productquickview-tag-item new'>
//                                    NEW
//                                </div>
//                             }
//                             </div> 
//                             <Slider {...settings} className="slider">
//                                 {product.productImg.map((item, index) => {
//                                     return (
//                                         <img key={index} src={item} alt="" className="view-img"/>
//                                     )
//                                 })} 
//                             </Slider>
//                   </div>
//                   </div>
//             </div>
//         </div>
//     )
// }
// export default ProductBody;