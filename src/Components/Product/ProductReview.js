import React,{useState,useEffect} from 'react';
import ReactStars from "react-rating-stars-component";  
import Axios from 'axios';

function ProductReview(props){
    const [tab,setTab]=useState(1);
    const [product,setProduct]=useState([]);
    const [productVote,setProductVote]=useState([]);
    const [ratingValue,setRatingValue]=useState(0);
    const [nameInput,setNameInput]=useState('');
    const [emailInput,setEmailInput]=useState('');
    const [reviewInput,setReviewInput]=useState('');
    useEffect(() => {
     if(props.product){
        setProduct(props.product)
        setProductVote(props.product.productVote)
     }
    }, [props.product])
    
    const defaultStar = {
        size: 28,
        value: 0,
        activeColor: "#fda32a",
        color: "#ddd",
        isHalf: true,
        edit: true,
        onChange: newValue => {
            setRatingValue(newValue)
        }
    }
    const sendReview=(event)=>{
        event.preventDefault();
        const data = {
            ratingName: nameInput,
            ratingDate: new Date().toString(),
            ratingText: reviewInput,
            ratingEmail: emailInput,
            ratingStar: ratingValue,
            ratingAvt: "http://localhost:3001/images/16f9bbf512b66a228f7978e34d8fb163"
        }
        Axios.post(`http://localhost:3001/products/review/${product._id}`,data)
        setReviewInput('');
        setProductVote(productVote=>[...productVote,data]);
    }
    return(
        
        <div className='productreview'>
            <div className='productreview-container'>
                <div className='productreview-tab'>
                    <div 
                    className={tab===1?'productreview-title des-active':'productreview-title'}
                    onClick={()=>{setTab(1)}}
                    > 
                        Description
                    </div>
                    <div 
                    className={tab===2?'productreview-title des-active':'productreview-title'}
                    onClick={()=>{setTab(2)}}
                    > 
                        Review
                    </div>
                </div>
                {   tab===1&&
                    <div className='productreview-des'>{product.productDes}</div>
                }
                {
                    tab===2&&
                    <div className='review-content'>
                        {productVote.map((item,index)=>{
                            const ratingStar = {
                                size: 14,
                                value: item.ratingStar,
                                edit: false,
                                activeColor: "#fda32a",
                                color: "#ddd",
                                isHalf: true
                             }
                             const date = new Date(item.ratingDate)
                             const day = date.getDate()
                             const month = date.getMonth() + 1
                             const year = date.getFullYear()
                             return(
                                 <div className='review-item' key={index}>
                                    <div className='review-info'>
                                        <div className='reviewer-avt'>
                                            <img src={item.ratingAvt} alt=''width='100%' height='100%'/>
                                        </div>
                                        <div className='reviewer-detail'>
                                            <div className='reviewer-name'>{item.ratingName}</div>
                                            <div className='reviewer-date'> {`${day}-${month}-${year}`}</div>
                                            <div className='reviewer-text'>{item.ratingText}</div>
                                        </div>
                                    </div>
                                  
                                     <div className='reviewer-star'>
                                         <ReactStars {...ratingStar}/>
                                     </div>
                                 </div>
                             )
                           })

                        }
                        <div className='productreview-review'>
                                <div className='productreview-add'>Add A Review</div>
                                <div className='productreview-note'>
                                    Your email address will not be published. Required fields are marked *
                                </div>
                                <div className='productreviewt-rating'>Your rating *</div>
                                <ReactStars {...defaultStar}/>
                                <form className='productreview-form' onSubmit={sendReview}>
                                    <div className="productreviewt-rating">Your review*</div>
                                    <input
                                    type='text'
                                    name='reviewInput'
                                    value={reviewInput}
                                    onChange={(event)=>{
                                        setReviewInput(event.target.value)
                                    }}
                                    className='productreview-input'
                                    />
                                    <div className='productreview-info'>
                                        <div className='productreview-name'>
                                            <div className="productreviewt-rating"> Name*</div>
                                            <input className='productreview-input'
                                            type='text'
                                            name='reviewName'
                                            value={nameInput}
                                            onChange={(event)=>{
                                                setNameInput(event.target.value)
                                            }}
                                            />
                                        </div>
                                        <div className='productreview-email'>
                                            <div className="productreviewt-rating"> Email*</div>
                                            <input className='productreview-input'
                                            type='text'
                                            name='email'
                                            value={emailInput}
                                            onChange={(event)=>{
                                                setEmailInput(event.target.value)
                                            }}
                                            />
                                        </div>
                                    </div>
                                    <button type='submit' className='productreview-btn'>Submit</button>
                                </form>
                        </div>
                    </div>                   
                }               
            </div>
        </div>
    )

}
export default ProductReview;