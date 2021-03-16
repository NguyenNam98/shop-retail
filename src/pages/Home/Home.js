import React from "react";
import '../../App.css'
import Navbar from '../../Components/Navbar/Navbar';
import Banner from '../../Components/Banner/Banner';
import HomeFeature from '../../Components/Home/HomeFeature';
import HomeTab from '../../Components/Home/HomeTab';
import FashionNews from '../../Components/Home/FashionNews';
import NewsLetter from '../../Components/Layouts/NewsLetter';
import Footer from  '../../Components/Layouts/Footer';

export default function TopMenu() {
  return (
      <div className='home fade-homepage'>
        <Navbar /> 
        <Banner />
        <HomeFeature/>
        <HomeTab/>
        <FashionNews/>
        <NewsLetter/>
        <Footer/>
     </div>
  );
}