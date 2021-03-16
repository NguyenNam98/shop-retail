import React,{useEffect,useState} from 'react';
import Axios from 'axios';
import './HomeComponent.css';
import News from '../News/News';

function FashionNews(){
    const [currentPage,setCurrentPage]=useState(1);
    const [news,setNews] =useState([]);
    const newsPerPage=3;

    useEffect(() => {
    Axios.get('http://localhost:3001/news').then((res)=>{
        setNews(res.data)
    })
    }, [])
    const choosePage = (event) => {
        if (Number(event.target.id) === 0) {
            setCurrentPage(currentPage)
        } else if (Number(event.target.id) === -1) {
            if (currentPage > 1) {
                setCurrentPage(currentPage - 1)
            } else {
                setCurrentPage(1);
            }
        } else if (Number(event.target.id) === 100) {
            setCurrentPage(currentPage + 1)
        } else {
            setCurrentPage(Number(event.target.id))
        }
    }
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(news.length / newsPerPage); i++) {
        pageNumbers.push(i);
    }
    const pages = [];

    if (currentPage === 2) {
        pages.push(currentPage - 1, currentPage, currentPage + 1);
    } else {
        if (currentPage === 1) {
            pages.push(currentPage, currentPage + 1, currentPage + 2 );
        } else if (currentPage === 2) {
            pages.push(currentPage - 1, currentPage, currentPage + 1);
        } else if (currentPage > 2 && currentPage < pageNumbers.length - 1) {
            pages.push(currentPage -1, currentPage, currentPage + 1);
        } else if (currentPage === pageNumbers.length - 1) {
            pages.push(currentPage - 1, currentPage, currentPage + 1);
        } else {
            pages.push(currentPage - 2, currentPage - 1, currentPage);
        }
    }
    return(
        <div className='fashion '>
            <div className='fashion-container'>
                <div className='fashion-title'>Fashion News</div>
                <div className='fashion-news'>
                    {
                       currentNews.map((item,index)=>{
                        return(
                        <News news={item}
                        key={index}
                        />
                            )
                        })
                    }
                </div>
                <div className='fashion-pagination'>
                <div className="pagnigation" onClick={choosePage}>
                        <div id="-1" className={
                            currentPage === 1? 'pagnigation_disable':'next'
                        }>←</div>
                        { pages.map(function(number, index) { 
                            if (currentPage === number) {
                                return (
                                    <div key={number} id={number} className="pagnigation-active">
                                        {number}
                                    </div>
                                )
                            } else {
                                return (
                                <div 
                                    key={number}
                                    id={number}
                                    >
                                        {number}
                                </div>
                                )
                            } 
                        })}
                        <div id="100" className={
                        currentPage === (pageNumbers.length+1)? 'pagnigation_disable':'next'
                        }>→</div>
                    </div>
                </div>
             </div>
        </div>
    )
}
export default FashionNews;