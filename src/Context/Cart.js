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
            exWishListItems.push({...product});
        }else{
            if(!isExists(wishListItems,product)){
                exWishListItems.push({...product});
                }
            }
        localStorage.setItem('wishlist',JSON.stringify( exWishListItems));
        setWishListItems(exWishListItems);
    }

    const addToCart=(product={},count)=>{
        if(count){
            setNumberClicked(count+numberClicked)
            const exCartItems=[...cartItems];
            if(cartItems.length===0){
                exCartItems.push({...product,count: count})
            }else{
                if(!isExists(cartItems,product)){
                    exCartItems.push({...product,count:count})
                }else{
                    for(let i=0; i< exCartItems.length;i++){
                        if(exCartItems[i]._id===product._id){
                            exCartItems[i].count+=count;
                            break;
                        }
                    }
                }
            }
            localStorage.setItem('cart', JSON.stringify(exCartItems))
            setCartItems(exCartItems);
            getTotal(exCartItems);
        }else{
            setNumberClicked(numberClicked+1);
            const exCartItems=[...cartItems];
            if(cartItems.length===0){
                exCartItems.push({...product,count:1})
            }else
            {
                if(!isExists(exCartItems,product)){
                    exCartItems.push({...product,count:1})
                }
                else{
                    for(let i=0;i<exCartItems.length;i++){
                        if(exCartItems[i]._id===product._id){
                            exCartItems[i].count+=1
                            break
                        }
                    }
                }
            }
            localStorage.setItem('cart', JSON.stringify(exCartItems))
            setCartItems(exCartItems); 
            getTotal(exCartItems);
        }
    }

    const getTotal=(arr)=>{
        let exTotal=0;
        for(let i=0; i <arr.length;i++){
            exTotal+=arr[i].count * arr[i].productFinalPrice
        }
        setTotalItems(exTotal)
        localStorage.setItem('total', JSON.stringify(exTotal))
       
    }

    const removeProductCart=(event)=>{
        const id=event.target.id;
        const exCartItems=[...cartItems];
        for(let i=0; i<exCartItems.length;i++){
            if(exCartItems[i]._id===id){
                exCartItems.splice(i, 1);
            }
        }
        localStorage.setItem('cart', JSON.stringify(exCartItems))
        setCartItems(exCartItems); 
        getTotal(exCartItems);
    }
    const removeWishLish=(event)=>{
        const id=event.target.id;
        const exWishList=[...wishListItems];
        for(let i=0; i<exWishList.length;i++){
            if(exWishList[i]._id===id){
                exWishList.splice(i,1);
            }
        }
        localStorage.setItem('wishlist', JSON.stringify(exWishList))
        setWishListItems(exWishList); 
      
    }
    const minusCount=(event)=>{
        const id=event.target.id;
        const exCartItems=[...cartItems];
        for(let i=0;i<exCartItems.length;i++){
            if(exCartItems[i]._id===id){
                if(exCartItems[i].count>1){
                    exCartItems[i].count-=1;
                }
            }
        }
        localStorage.setItem('cart', JSON.stringify(exCartItems))
        setCartItems(exCartItems); 
        getTotal(exCartItems);
    }
    const plusCount=(event)=>{
        const id=event.target.id;
        const exCartItems=[...cartItems];
        for(let i=0;i<exCartItems.length;i++){
            if(exCartItems[i]._id===id){  
                    exCartItems[i].count+=1; 
            }
        }
        localStorage.setItem('cart', JSON.stringify(exCartItems))
        setCartItems(exCartItems); 
        getTotal(exCartItems);
    }
    const updateCount=(event)=>{
        const id=event.target.id;
        const value=event.target.value;
        const exCartItems=[...cartItems];
        for(let i=0;i<exCartItems.length;i++){
            if(exCartItems[i]._id===id){  
                    exCartItems[i].count=Number(value); 
            }
        }
        localStorage.setItem('cart', JSON.stringify(exCartItems))
        setCartItems(exCartItems); 
        getTotal(exCartItems);
    }
    
    return(
        <CartContext.Provider
         value={{
             cartItems:cartItems,
             addToCart:addToCart,
             wishListItems:wishListItems,
             addToWishList:addToWishList,
             numberClicked:numberClicked,
             removeProductCart:removeProductCart,
             updateCount:updateCount,
             plusCount:plusCount,
             minusCount:minusCount,
             totalItems:totalItems,
             removeWishLish:removeWishLish

         }}
        >
            {props.children}
        </CartContext.Provider>
    )

}