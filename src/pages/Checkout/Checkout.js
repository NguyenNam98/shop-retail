import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Banner3 from '../../Components/Banner/Banner3';
import NewsLetter from '../../Components/Layouts/NewsLetter';
import Footer from '../../Components/Layouts/Footer';
import CheckoutBody from '../../Components/Checkout/CheckoutBody';
function Checkout(){
    return(
        <div>
            <Navbar/>
            <Banner3 title={'Checkout'}/>
            <CheckoutBody/>
            <NewsLetter/>
            <Footer/>
        </div>
    )
}
export default Checkout;