import React from 'react';
import '../../App.css'
import Navbar from '../../Components/Navbar/Navbar';
import NewsLetter from '../../Components/Layouts/NewsLetter';
import Footer from '../../Components/Layouts/Footer';
import NewsBanner from '../../Components/Banner/NewsBanner';
 function News(){
     return(
         <div className='news-fade'>
             <Navbar/>
             <NewsBanner/>
             <NewsLetter/>
             <Footer/>
         </div>
     )
 }
 export default News;