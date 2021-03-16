import React,{useEffect,useState} from 'react';
import {withRouter} from 'react-router-dom'
import './News.css';

function News(props){
    const news=props.news;
    var date=new Date(news.newTime);
    const redirect = (target) => {
        window.scrollTo(0,0);
        props.history.push(`/news/${news._id}`);
    }
    return(
        <div className='news'>
            <div className='news-img'
            onClick={redirect}
            >
                <img src={news.newImg} alt=''/>
            </div>
            <div className= 'news-info'>
                <div className='news-date'>{date.getDate()}.{date.getMonth()-1}.{date.getFullYear()}</div>
                <div className='news-cate'>{news.newCate}</div>
            </div>
            <div className='news-title'>{news.newTitle}</div>
            <div className='new-content'>{news.newContent}</div>
            <div className='news-readmore'>
                <p onClick={redirect}>read more</p>
            </div>
        </div>
    )
}
export default withRouter (News);