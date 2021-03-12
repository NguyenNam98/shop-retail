import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import NewsLetter from '../../Components/Layouts/NewsLetter';
import Footer from '../../Components/Layouts/Footer';
import ContactBanner from '../../Components/Banner/ContactBanner';
import Map from '../../Components/Contact/Map'
 function Contact(){
     return(
         <div>
             <Navbar/>
             <ContactBanner title={'contact'}/>
             <Map/>
             <NewsLetter/>
             <Footer/>
         </div>
     )
 }
 export default Contact;