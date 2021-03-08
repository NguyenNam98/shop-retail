import React, {useEffect,useState} from 'react';

export const CartContext= React.createContext();

export function CartProvider(props){
    const [cartItems, setCartItems]=useState([]);
    const [wishListItems,setWishListItems]=useState([]);
    const[totalItems,setTotalItems]=useState(0);
    const[numberClicked,setNumberClicked]=useState(0);
    const isExists = (cartItems = [], item = {}) => {
        for (let cartItem of cartItems) {
            if (cartItem._id === item._id) {
                return cartItem;
            }
        }
        return false;
    }
    useEffect(() => {
       if(localStorage.getItem('cart')){
           setCartItems(JSON.parse(localStorage.getItem('cart')))
       }
       if(localStorage.getItem('wishlist')){
        setWishListItems(JSON.parse(localStorage.getItem('wishlist')))
       }
       setTotalItems(JSON.parse(localStorage.getItem('total')));
    }, [])
    const addToWishList=(product={})=>{
        const exWishListItems=[...wishListItems];
        if(wishListItems.length===0){
            exWishListItems.push({...proruct});
        }
        if(!isExists(wishListItems,product))
        {
            exWishListItems.push({...proruct});
        }
        localStorage.setItem('wishlist',JSON.stringify( exWishListItems));
        setWishListItems(exWishListItems);
    }
    const addToCart=(product={},count)=>{
        if(count){
            setNumberClicked(count+clicked)
            const exCartItems=[...cartItems];
            if(cartItems.length===0){
                exCartItems.push({...product,count})
            }else{
                if(!isExists(cartItems,product)){
                    exCartItems.push({...product,count:count})
                }else{
                    for(let i in exCartItems){
                        if(exCartItems[i]._id=product._id){
                            exCartItems[i].count+=count;
                            break;
                        }
                    }
                }
            }
            localStorage.setItem('cart', JSON.stringify(exCartItems))
            getTotal(exCartItems);
            setCartItems(exCartItems);
        }else{
            setNumberClicked(clicked+1);
            

        }
    }
    const getTotal=(arr)=>{
        let exTotal=0;
        for(let i in arr){
            exTotal=arr[i].count*arr[i].producFinalPrice
        }
        localStorage.setItem('total', JSON.stringify(exTotal))
        setTotalItems(exTotal)
    }
    return(
        <CartContext.Provider>
            {props.children}
        </CartContext.Provider>
    )

}