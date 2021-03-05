import React from "react";
import './Home.css';
import Navbar from '../../Components/Navbar/Navbar';
import Banner from '../../Components/Banner/Banner';
import HomeFeature from '../../Components/Home/HomeFeature';
import HomeTab from '../../Components/Home/HomeTab';


export default function TopMenu() {
  return (
      <div className='home'>
        <Navbar /> 
        <Banner />
        <HomeFeature/>
        <HomeTab/>
     </div>
  );
}