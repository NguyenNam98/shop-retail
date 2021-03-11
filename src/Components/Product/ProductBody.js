import React ,{useState,useContext} from 'react';
import './ProductComponent.css';
import {Link} from 'react-router-dom';
import Slider from "react-slick";
import ReactStars from 'react-rating-stars-component'
import {CartContext} from '../../Context/Cart';

function ProductBody(props){
   const product=props.product;
   const {addToCart,addToWishList}=useContext(CartContext);
  
   const [countCart, setCountCart] = useState(1);
 

   let ratingList = product.productVote.map(a => a.ratingStar); // get all rating
   const totalRating = ratingList.reduce((a, b) => a + b, 0)
   const averageRating = totalRating/ratingList.length;

   const ratingStar = {
    size: 20,
    value: averageRating || 0,
    edit: false,
    activeColor: "#fda32a",
    color: "#ddd",
    isHalf: true
};
   const cartClick=()=>{
       addToCart(product,countCart)
   }
   const wishLishClick=()=>{
       addToWishList(product);
   }

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    }
    let dateProduct=new Date(product);
    let today =new Date();
    
    return(
        <div className='productbody'>
           
                <div className='productbody-breadcrumb'>
                    <Link to='/'  className="breadcrumb-item breadcrumb-link">Home</Link>
                    <i className="fa fa-angle-right breadcrumb-arrow"></i>
                    <Link to={product.productSex==='Man'?'/men':'/woman'}
                     className="breadcrumb-item breadcrumb-link"
                    >
                        {product.productSex==='Man'?'men':'women'}
                    </Link>
                    <i className="fa fa-angle-right breadcrumb-arrow"></i>
                    <div className="breadcrumb-item breadcrumb-product">{product.productName}</div>
                </div>
                <div className='productbody-main' >
                    <div className='producquickview-slider lider'>
                            <div class='productquickview-tag'>
                                {
                                    product.productSale>0&&
                                    <div className='productquickview-tag-item sale'>
                                        {product.productSale}%
                                </div>
                                }
                                {
                                    product.productSold>=40>0&&
                                    <div className='productquickview-tag-item hot'>
                                        HOT
                                </div>
                                }
                                {
                                    ((today-dateProduct)/(1000*86400))<40>0&&
                                    <div className='productquickview-tag-item new'>
                                    NEW
                                </div>
                                }
                                </div> 
                                <Slider {...settings} className="slider">
                                    {product.productImg.map((item, index) => {
                                        return (
                                            <img key={index} src={item} alt="" className="view-img"/>
                                        )
                                    })} 
                                </Slider>
                    </div>
                    <div 
                        className="product-info-detail detail" 
                        style={{padding: '0', marginTop: '70px'}}
                        >
                            <div className="product-info-title">
                                {product.productName}
                            </div>
                            <div className="product-info-des" style={{width: '80%'}}>
                                {product.productDes}
                            </div>
                            <div  
                            className="product-info-vote"
                            style={{textDecoration: 'none', color: '#111'}}
                            >
                                <ReactStars {...ratingStar}/>
                                <p style={{margin: '0'}}>
                                    ({ratingList.length} customer reviews)
                                </p>
                            </div>
                            {
                                product.productFinalPrice<product.productPrice &&
                                <div className='productquickview-price flex-center'>
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
                                <div className='productquickview-price'>
                                    <p>{product.productFinalPrice.toString()
                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                                        Đ</p>
                                </div>
                            }
                            <div className='product-info-cart flex-center'>
                                <div className='count-cart noselect'>
                                    <div className='count-cart-item left flex-center'
                                    onClick={() => { 
                                        if (countCart > 1) setCountCart(countCart-1) 
                                    }}
                                    >
                                    <i class="fa fa-minus" aria-hidden="true"></i>
                                    </div>
                                    <div className='count-cart-item text center'>
                                        <form onSubmit={(event)=>{
                                                event.preventDefault()
                                            }}
                                        >
                                            <input 
                                                type="text" 
                                                value={countCart}
                                                onChange={e => setCountCart(Number(e.target.value))}
                                            />
                                        </form>
                                    </div>
                                    <div className='count-cart-item right flex-center'
                                    onClick={()=>{setCountCart(countCart+1) 
                                    }}
                                    >
                                    <i class="fa fa-plus" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className='product-info-addtocart flex-center tab-btn'
                                onClick={cartClick}
                                >
                                <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                <p>Add to cart</p>

                                </div>
                                <div className='product-info-wishlist flex-center'
                                onClick={wishLishClick}>
                                <i class="fa fa-heart" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className='product-info-cate flex-center'>
                                <p>Category :</p>
                                <p
                                onClick={()=>{
                                    props.history.push(`/${product.productSex === 'Man' ? 'men' : 'women'}/${product.productCate.toLowerCase().split(' ').join('-')}`)
                                }} 
                                >
                                    {product.productCate}
                                </p>
                            </div>
                        </div> 
                    </div>
        </div>
    )
}
export default ProductBody;