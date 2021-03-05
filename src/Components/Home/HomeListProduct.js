import React,{useState} from 'react';
import './HomeComponent.css';
import Product from '../Product/ProductView';
import { withRouter } from 'react-router-dom'

function HomeListProduct(props){
    const [limit,setLimit]= useState(10);
    const products=props.products;
    const [loading,setLoading]=useState(false);
    const height=props.height;
    const handleClick = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setLimit(limit + 5);
        }, 1000);
    }
    const limitProducts =products.slice(0,limit);
   
    
    return(
        <div>
            <div className='listcontent' style={{minHeight:`${height}px`}}>
                {
                    limitProducts.map((item,index)=>{
                       return( <Product 
                        product={item}
                        key={index}
                        index={index}
                       
                        />
                       )
                    })
                }
                {
                    limitProducts.length===0&&
                    <div style={{
                        textAlign: 'center',
                        width: '100%',
                        textTransform: 'capitalize',
                        marginTop: '150px'
                    }}>
                        there are nothing yet !
                    </div>
                }
                {

                }
            </div>
            {
                products.length>10 &&
                <div className='tab-loadmore flex-center'>
                    <div 
                        className="tab-loadmore-btn btn-tab"
                        onClick={handleClick}
                    >
                        Load more
                    </div>
                    { 
                        loading===true &&
                        <div 
                        className='tab-loadmore-btn
                        tab-loadmore-loading btn-nohover'
                        >
                         <div className='loading-icon'></div>
                        </div>
                    }
                </div>
            }

        </div>
    )
}
export default withRouter( HomeListProduct);