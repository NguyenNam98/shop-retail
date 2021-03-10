import React,{useEffect,useState} from 'react';
import {withRouter} from 'react-router-dom';
import 'react-rangeslider/lib/index.css';
import Slider from 'react-rangeslider';
import './Shop.css';

import ProductView from '../Product/ProductView';

function ShopContent(props){
    const [product, setProduct]=useState([]);
    const [exProduct, setExProduct]=useState([]);
    const productCateList=props.productCateList;
    const [currentTab,setCurrentTab]=useState(1);
    const [gridTab,setGridTab]=useState(1);
    const [price,setPrice]=useState(0);
    const location = props.location.pathname.split('/')[1];
    
    const setting={
        min:0,
        max:5000000,
        step:100000,
        value:price,
        tooltip:false,
        
    } 
    let width, height, parentHeight = "";
    if (gridTab === 1) {
        width = `${100/6}%`; // six
        parentHeight = `${100/6}vw`;
        height = `calc(${parentHeight} - 68px)`;
    } else if (gridTab === 2) {
        width = '20%'; // five;
        parentHeight = '20vw';
        height = `calc(${parentHeight} - 68px)`;
    } else if (gridTab === 3) {
        width = '25%'; // four
        parentHeight = '25vw';
        height = `calc(${parentHeight} - 68px)`;
    }

    
    useEffect(()=>{
        setProduct(props.products)
        setExProduct(props.products)
    }, [props.products])
    
    const soldProduct = [...product];
    if (soldProduct.length > 0) { 
        soldProduct.sort((a,b) => b.productSold - a.productSold)
    }
    const dateProductVirtual = [...product];
    const dateProduct = [];
    if (dateProductVirtual) {
        dateProductVirtual.sort((a,b)=> new Date(b.productDate) - new Date(a.productDate));
        for (let i in dateProductVirtual) {
            const today = new Date();
            const productDate = new Date(dateProductVirtual[i].productDate);
            if (((today - productDate)/(1000 * 3600 * 24)) < 60) {
                dateProduct.push(dateProductVirtual[i])
            }
        }
    }
    const sellingProduct = [];
    if (product.length > 0) {
        for (let i = 0; i < product.length; i++) {
            if (Number(product[i].productSale) > 0) {
                sellingProduct.push(product[i]);
            }
        }
    }
   
    const [limit, setLimit] = useState(10);
    const [loading, setLoading] = useState(false);

    const loadMore = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setLimit(limit + 5);
        }, 300);
    }
    const chooseCateLink = (event) => {
        props.history.push(`/${location}/${(event.target.id).toLowerCase().split(' ').join('-')}`)
    }
    //Limit products
    const limitProduct = product.slice(0, limit);
    const limitProductSold = soldProduct.slice(0, limit);
    const limitProductDate = dateProduct.slice(0, limit);
    const limitProductSelling = sellingProduct.slice(0, limit);
    //price
    const choosePrice = () => {
        const virtualProduct = []
        console.log(price)
        for (let i in exProduct) { 
            if (exProduct[i].productFinalPrice <= price ) {
                virtualProduct.push(exProduct[i])
            }
        }
        setProduct(virtualProduct)
    }
    const handleOnChange=(value)=>{
        setPrice(value)
    }
    //size
    const chooseSize = (event) => {
        const virtualProduct = []
        const id = event.target.id
        for (let i in exProduct) {
            for (let j in exProduct[i].productSize) {
                if (exProduct[i].productSize[j].toLowerCase() === id) {
                    virtualProduct.push(exProduct[i])
                }
            }
        }
        setProduct(virtualProduct)
    }

   
    return(
        <div className='shopcontent'>
            <div className=' shopcontent-container'>
                <div className='shopcontent-filter'>
                    <div className='shopcontent-filter-cate'>
                        <p className='shopcontent-filter-title'>Product Categories</p>
                        <div className='shopcontent-filter-catelist'>
                            {
                                productCateList.map((item,index)=>{
                                    return(
                                        <div 
                                        className="shopcontent-filter-cateLink"
                                        onClick={chooseCateLink}
                                        id={item}
                                        >
                                            {item}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='shopcontent-filter-sise'>
                            <div className='shopcontent-filter-title'>Size</div>
                            <div className='shopcontent-filter-catelist'>
                                <div 
                                className='shopcontent-filter-cateLink'
                                id='small'
                                onClick={chooseSize}
                                >
                                    Small
                                </div>
                                <div 
                                className='shopcontent-filter-cateLink'
                                id='medium'
                                onClick={chooseSize}
                                >
                                    Medium
                                </div>
                                <div 
                                className='shopcontent-filter-cateLink'
                                id='large'
                                onClick={chooseSize}
                                >
                                    Large
                                </div>
                                
                            </div>

                    </div>
                    <div className='shopcontent-filter-price'>
                        <div className='shopcontent-filter-title'>Price</div>
                        <Slider {...setting}
                         className='shopcontent-slider'
                         onChange={handleOnChange}
                         onChangeComplete={choosePrice}
                         />
                         
                        <div className='filter-price'>
                            <span>0</span>
                            <span>-</span>
                            <span>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} </span>
                        </div>
                    </div>
                </div>
                <div className='shopcontent-main'>
                    <div className= 'shopcontent-fisrt flex'>
                        <div className='shopcontent-count-product'>{product.length}</div>
                        <div className='shopcontent-tab flex'>
                                <div 
                                    onClick={() => {setCurrentTab(1)}}
                                    className={currentTab === 1 ? "shopcontent-tab-item active" : "shopcontent-tab-item"}
                                >
                                    All Products
                                </div>
                                <div 
                                    onClick={() => {setCurrentTab(2)}}
                                    className={currentTab === 2 ? "shopcontent-tab-item active" : "shopcontent-tab-item"}
                                >
                                    Hot Products
                                </div>
                                <div 
                                    onClick={() => {setCurrentTab(3)}}
                                    className={currentTab === 3 ? "shopcontent-tab-item active" : "shopcontent-tab-item"}
                                 >
                                    New Products
                                </div>
                                <div 
                                    onClick={() => {setCurrentTab(4)}}
                                    className={currentTab === 4 ? "shopcontent-tab-item active" : "shopcontent-tab-item"}
                                    >
                                    Sales Products
                                </div>
                        </div>
                        <div className='shopcontent-option flex'>
                            <div className='shopcontent-grid'>
                                <div className='shopcontent-grid-container'
                                  onClick={()=> { setGridTab(1) }}
                                >
                                    <i 
                                    className={gridTab === 1 ? "grid-icon grid-icon-active fas fa-th" : "grid-icon fas fa-th"}
                                    >
                                    </i>
                                </div>
                                <div className='shopcontent-grid-container'
                                  onClick={()=> { setGridTab(2) }}
                                >
                                    <i class="fas fa-th-large"
                                      className={gridTab === 2 ? "grid-icon grid-icon-active fas fa-th-large" : "grid-icon fas fa-th-large"}
                                    >

                                    </i>
                                </div>
                                <div className='shopcontent-grid-container'
                                 onClick={()=> { setGridTab(3) }}
                                >
                                    <i class="fas fa-circle"
                                     className={gridTab === 3 ? "grid-icon grid-icon-active fas fa-circle" : "grid-icon fas fa-circle"}
                                    >

                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        currentTab==1&&
                        <div className='shopcontent-products'>
                            {
                                limitProduct.map((item,index)=>{
                                    return <ProductView
                                    key={index}
                                    product={item}
                                    width={width}
                                    height={height}
                                    parentHeight={parentHeight}
                                    />
                                    
                                })
                            }
                       </div>
                    }
                     {
                        currentTab==2&&
                        <div className='shopcontent-products'>
                            {
                                limitProductSold.length === 0 &&
                                <div style={{
                                    textAlign: 'center',
                                    width: '100%',
                                    textTransform: 'capitalize',
                                    marginTop: '150px'
                                }}>
                                    there's nothing here yet
                                </div>
                            }
                            {
                                limitProductSold.map((item,index)=>{
                                    return <ProductView
                                    key={index}
                                    product={item}
                                    width={width}
                                    height={height}
                                    parentHeight={parentHeight}
                                    />
                                    
                                })
                            }
                       </div>
                    }
                     {
                        currentTab==3&&
                        <div className='shopcontent-products'>
                            {
                                limitProductDate.length === 0 &&
                                <div style={{
                                    textAlign: 'center',
                                    width: '100%',
                                    textTransform: 'capitalize',
                                    marginTop: '150px'
                                }}>
                                    there's nothing here yet
                                </div>
                            }
                            {
                                limitProductDate.map((item,index)=>{
                                    return <ProductView
                                    key={index}
                                    product={item}
                                    width={width}
                                    height={height}
                                    parentHeight={parentHeight}
                                    />
                                    
                                })
                            }
                       </div>
                    }
                    {
                        currentTab==4&&
                        <div className='shopcontent-products'>
                            {
                                limitProductSelling.length === 0 &&
                                <div style={{
                                    textAlign: 'center',
                                    width: '100%',
                                    textTransform: 'capitalize',
                                    marginTop: '150px'
                                }}>
                                    there's nothing here yet
                                </div>
                            }
                            {
                                limitProductSelling.map((item,index)=>{
                                    return <ProductView
                                    key={index}
                                    product={item}
                                    width={width}
                                    height={height}
                                    parentHeight={parentHeight}
                                    />
                                    
                                })
                            }
                       </div>
                    }
                     {(product.length > 10 && product.length >= limit) && 
                        <div className="tab-loadmore flex-center">
                            <div 
                                className="tab-loadmore-btn tab-btn"
                                onClick={loadMore}
                                >
                                Load More
                            </div>
                            {loading === true && 
                                <div className="tab-loadmore-btn tab-loadmore-loading tab-btn-nothover">
                                    <div className="loading-icon"></div>
                                </div>
                            }
                        </div>
                    }
               </div>                   
            </div>
        </div>
    )
}
export default withRouter(ShopContent);