import React from "react";

import Navbar from '../../Components/Navbar/Navbar';
import Banner from '../../Components/Banner/Banner';
import HomeFeature from '../../Components/Home/HomeFeature';
import HomeTab from '../../Components/Home/HomeTab';
import NewsLetter from '../../Components/Layouts/NewsLetter';
import Footer from  '../../Components/Layouts/Footer';

export default function TopMenu() {
  return (
      <div className='home'>
        <Navbar /> 
        <Banner />
        <HomeFeature/>
        <HomeTab/>
        <NewsLetter/>
        <Footer/>
     </div>
  );
}