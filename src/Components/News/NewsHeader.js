import React,{useState,useEffect} from 'react';
import Slider from 'react-slick';
import './News.css'

function NewsHeader(props){
    const [cate,setCate]=useState({});
    const news=props.news;
    var topNews={};
    var bottomNews={};
    for(let i=0; i< news.length;i++){
        if(i===2){
            topNews={...news[i]}
        }
        if(i===3){
            bottomNews={...news[i]}
        }
    }
    const settings = {
        
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
    }
   
    return(
        <div className='newsheader'>           
                <div className='newsheader-left'>
                    <Slider {...settings}>
                     {
                         news.map((item,index)=>{
                             var date=new Date(item.newTime);

                             return(
                                 <div className='left-item' key={index}>
                                     <img src={item.newImg} alt='' className='left-img'/>
                                     <div className='left-overlay'></div>
                                     <div className='left-info fade-in'>
                                         <div className='left-cate'>{item.newCate}</div>
                                         <div className='left-title'>{item.newTitle}</div>
                                         <div className='left-date'> by michael _
                                             {date.getDate()}-{date.getMonth()-1}-{date.getFullYear()}
                                         </div>
                                     </div>
                                 </div>
                             )
                         })
                     }
                    </Slider>
                </div> 
                <div className='newsheader-right'>
                    <div className='newsheader-top'>
                       <img src={topNews.newImg} alt='' className='top-img'/>
                        <div className='top-overlay'></div>
                        <div className='top-info '>
                            <div className='top-cate'>{topNews.newCate}</div>
                            <div className='top-title'>{topNews.newTitle}</div>
                            <div className='top-date'> by michael _
                                {(new Date(topNews.newTime)).getDate()}-
                                {(new Date(topNews.newTime)).getMonth()-1}-
                                {(new Date(topNews.newTime)).getFullYear()}
                            </div>
                        </div>
                    </div>
                    <div className='newsheader-bottom'>
                       <img src={bottomNews.newImg} alt='' className='bottom-img'/>
                        <div className='bottom-overlay'></div>
                        <div className='bottom-info '>
                            <div className='bottom-cate'>{bottomNews.newCate}</div>
                            <div className='bottom-title'>{bottomNews.newTitle}</div>
                            <div className='bottom-date'> by michael _
                                {(new Date(bottomNews.newTime)).getDate()}-
                                {(new Date(bottomNews.newTime)).getMonth()-1}-
                                {(new Date(bottomNews.newTime)).getFullYear()}
                            </div>
                        </div>
                    </div>
                   
                </div>    
        </div>
    )
}
export default NewsHeader;