import React,{useState,useEffect,useContext} from 'react';
import{CartContext} from '../../Context/Cart'
import Axios from 'axios';

function Search(props){
    const [products, setProducts] = useState([])
    const [constProducts, setConstProducts] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [toast,setToast]=useState(false);
    const{addToCart} =useContext(CartContext);
    useEffect(() => {
      Axios.get('http://localhost:3001/products').then((res)=>{
          setConstProducts(res.data)
          setProducts(res.data)
      })
    }, [])
    const search=(event)=>{
        setSearchInput(event.target.value);
        const search = []
        for (let i in constProducts) {
            if ((constProducts[i].productName).toLowerCase().includes(searchInput)) {
                search.push(constProducts[i])
            }
        }
        setProducts(search)
    }
    const cartClick=(event)=>{
        const id=event.target.id;
        Axios.get(`http://localhost:3001/products/${id}`).then((res)=>{
            res.data.map((item,index)=>{
                return(
                    addToCart(item)
                )
            })  
        })
        setToast(true)
        setTimeout(()=>{
            setToast(false)
        },1000)
    }
    return(
        <div className={props.openSearch===true? 'search':'search displaynone '}>
            <div className='search-header'>
                {toast===true&&
                    <div className='annouce'>
                         <i className="fas fa-check-circle"></i>
                         <p>Product is add to cart successfully!</p>
                    </div>
                 } 
                <div className='search-title'>Search</div>
                <div className=' search-close'>
                    <i className="fa fa-times" 
                    onClick={props.closeSearch}
                    />
                </div>
            </div>
            <div className='search-form'>
                <form className='form'>
                    <i className="fas fa-search icon"></i>
                    <input 
                    type='text' placeholder='Search...' 
                    className='search-input'
                    value={searchInput}
                    onChange={search}
                    />
                </form>
            </div>
            {
                products.length>0&&searchInput!==''&&
                <div className='search-product'>
                    {
                        products.map((item,index)=>{
                            return(
                                <div className='search-product-item' key={index}>
                                    <div  className='search-img'><img src={item.productImg[0]}/></div>
                                   
                                    <div className='search-item-name'>{item.productName}</div>
                                    <div 
                                    className='search-price'
                                    >
                                        {item.productFinalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ
                                    </div>
                                    <div className='search-addtocart'
                                    onClick={(event)=>{
                                        cartClick(event)
                                    }}
                                    id={item._id}
                                    >
                                        Add to cart
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            }
        </div>
       
    )
}
export default Search;