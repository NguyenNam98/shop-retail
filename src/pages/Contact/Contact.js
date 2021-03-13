import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import NewsLetter from '../../Components/Layouts/NewsLetter';
import Footer from '../../Components/Layouts/Footer';
import ContactBanner from '../../Components/Banner/ContactBanner';
import ContactBody from '../../Components/Contact/ContactBody';
import ContactUs from '../../Components/Contact/ContactUs';
 function Contact(){
     return(
         <div>
            <Navbar/>
            <ContactBanner title={'contact'}/>
            <ContactBody/>
            <ContactUs/>
            <NewsLetter/>
            <Footer/>
         </div>
     )
 }
 export default Contact;