import React,{useState,useEffect} from 'react';
import Axios from 'axios'
import '../../App.css'
import Navbar from '../../Components/Navbar/Navbar';
import NewsLetter from '../../Components/Layouts/NewsLetter';
import Footer from '../../Components/Layouts/Footer';
import NewsBanner from '../../Components/Banner/NewsBanner';
import NewsBody from '../../Components/News/NewsBody';
import NewsHeader from '../../Components/News/NewsHeader';
 function News(){
    const [news,setNews]=useState([]);

    useEffect(() => {
    Axios.get('http://localhost:3001/news').then((res)=>{
        setNews(res.data);
    })
    }, [news])
     return(
         <div className='news-fade'>
             <Navbar/>
             <NewsHeader news={news}/>
             {/* <NewsBanner/> */}
             <NewsBody news={news}/>
             <NewsLetter/>
             <Footer/>
         </div>
     )
 }
 export default News;