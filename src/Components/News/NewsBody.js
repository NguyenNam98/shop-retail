import React,{useState,useEffect} from 'react';

import './News.css';


function NewsBody(props){
    const news=props.news;
    const [tab,setTab]=useState(0);
    const tempCate=[];
    var cateGroup1={};
    var cateGroup2={};
    var cateGroup3={};
    for(let i in news){
        tempCate.push(news[i].newCate)
        cateGroup1={...news[1]}
        cateGroup2={...news[2]}
        cateGroup3={...news[3]}
    }
    const cate=tempCate.filter(function(elem,index,seft){
        return index===seft.indexOf(elem);
    })
    
    
    return(
        <div className='newsbody'>
           
             <div className='newsbody-container'>
               
                <div className='newsbody-left'>
                    <div className='newsbody-left-nav'>
                        <div className='newsbody-nav-title'> Whats News</div>
                        <div className='news-nav-list'>
                        {
                            cate.map((item,index)=>{
                                return(
                                    <div 
                                    key={index} id={index}
                                    className={tab===index?'news-nav-item nav-item-active':'news-nav-item'} 
                                    
                                    onClick={()=>{setTab(index)}}
                                    >
                                        {item}
                                    </div>
                                )
                            })
                        }
                        </div>
                        
                    </div>
                    {
                          tab===0&&
                            <div className='newsbody-content'>
                                <div className='newsbody-content-left'>
                                    <div className='newsbody-content-img'>
                                        <img src={cateGroup1.newImg}/>
                                    </div>
                                    <div className='newsbody-content-title'>{cateGroup1.newTitle}</div>
                                    <div className='newsbody-content-date'>by michael _
                                        {(new Date(cateGroup1.newTime)).getDate()}-
                                        {(new Date(cateGroup1.newTime)).getMonth()-1}-
                                        {(new Date(cateGroup1.newTime)).getFullYear()}</div>
                                    <div className='newsbody-content-detail'>{cateGroup1.newContent}</div>
                                </div>
                                <div className='newsbody-content-right'>
                                    {
                                        news.map((item,index)=>{
                                            return(
                                                <div className='newsbody-content-right-item' >
                                                    <div className='right-item-img'>
                                                        <img src={item.newImg}/>
                                                    </div>
                                                    <div className='right-item-info'>
                                                        <div className='right-item-cate'>Inspiration</div>
                                                        <div className='right-item-title'>{item.newTitle}</div>
                                                        <div className='right-item-date'>by michael _
                                                            {(new Date(item.newTime)).getDate()}-
                                                            {(new Date(item.newTime)).getMonth()-1}-
                                                            {(new Date(item.newTime)).getFullYear()}
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        }
                         {
                          tab===1&&
                            <div className='newsbody-content'>
                                <div className='newsbody-content-left'>
                                    <div className='newsbody-content-img'>
                                        <img src={cateGroup2.newImg}/>
                                    </div>
                                    <div className='newsbody-content-title'>{cateGroup2.newTitle}</div>
                                    <div className='newsbody-content-date'>by michael _
                                        {(new Date(cateGroup2.newTime)).getDate()}-
                                        {(new Date(cateGroup2.newTime)).getMonth()-1}-
                                        {(new Date(cateGroup2.newTime)).getFullYear()}</div>
                                    <div className='newsbody-content-detail'>{cateGroup2.newContent}</div>
                                </div>
                                <div className='newsbody-content-right'>
                                {
                                        news.map((item,index)=>{
                                            return(
                                                <div className='newsbody-content-right-item' >
                                                    <div className='right-item-img'>
                                                        <img src={item.newImg}/>
                                                    </div>
                                                    <div className='right-item-info'>
                                                        <div className='right-item-cate'>Fashion</div>
                                                        <div className='right-item-title'>{item.newTitle}</div>
                                                        <div className='right-item-date'>by michael _
                                                            {(new Date(item.newTime)).getDate()}-
                                                            {(new Date(item.newTime)).getMonth()-1}-
                                                            {(new Date(item.newTime)).getFullYear()}
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        }
                         {
                          tab===2&&
                            <div className='newsbody-content'>
                                <div className='newsbody-content-left'>
                                    <div className='newsbody-content-img'>
                                        <img src={cateGroup3.newImg}/>
                                    </div>
                                    <div className='newsbody-content-title'>{cateGroup3.newTitle}</div>
                                    <div className='newsbody-content-date'>by michael _
                                        {(new Date(cateGroup3.newTime)).getDate()}-
                                        {(new Date(cateGroup3.newTime)).getMonth()-1}-
                                        {(new Date(cateGroup3.newTime)).getFullYear()}</div>
                                    <div className='newsbody-content-detail'>{cateGroup3.newContent}</div>
                                </div>
                                <div className='newsbody-content-right'>
                                {
                                        news.map((item,index)=>{
                                            return(
                                                <div className='newsbody-content-right-item' >
                                                    <div className='right-item-img'>
                                                        <img src={item.newImg}/>
                                                    </div>
                                                    <div className='right-item-info'>
                                                        <div className='right-item-cate'>Shopping</div>
                                                        <div className='right-item-title'>{item.newTitle}</div>
                                                        <div className='right-item-date'>by michael _
                                                            {(new Date(item.newTime)).getDate()}-
                                                            {(new Date(item.newTime)).getMonth()-1}-
                                                            {(new Date(item.newTime)).getFullYear()}
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        }
                </div>
                <div className='newsbody-right'>
                    <div className='newsbody-social'>
                        <div className='newsbody-fi'>
                            <div className='newsbody-face'>
                               <i className="fab fa-facebook"></i>
                               <div className='newsbody-fan'>
                                  <div className='newsbody-number'>8888</div>
                                  <div className='newsbody-text'>Fans</div>
                               </div>
                            </div>
                            <div className='newsbody-face'>
                               <i className="fab fa-instagram-square"></i>
                               <div className='newsbody-fan'>
                                  <div className='newsbody-number'>8888</div>
                                  <div className='newsbody-text'>Fans</div>
                               </div>
                            </div>
                        </div>
                        <div className='newsbody-fi'>
                            <div className='newsbody-face'>
                               <i className="fab fa-twitter-square"></i>
                               <div className='newsbody-fan'>
                                  <div className='newsbody-number'>8888</div>
                                  <div className='newsbody-text'>Fans</div>
                               </div>
                            </div>
                            <div className='newsbody-face'>
                               <i className="fab fa-youtube"></i>
                               <div className='newsbody-fan'>
                                  <div className='newsbody-number'>8888</div>
                                  <div className='newsbody-text'>Fans</div>
                               </div>
                            </div>
                        </div>
                    </div>
                    <div className='newsbody-recently'>
                        <div className='newsbody-recently-title'> Most Recently</div>
                        <div className='newsheader-bottom'>
                            <img src={cateGroup3.newImg} alt='' className='bottom-img'/>
                                <div className='bottom-overlay'></div>
                                <div className='bottom-info '>
                                    <div className='bottom-cate'>{cateGroup3.newCate}</div>
                                    <div className='bottom-title'>{cateGroup3.newTitle}</div>
                                    <div className='bottom-date'> by michael _
                                        {(new Date(cateGroup3.newTime)).getDate()}-
                                        {(new Date(cateGroup3.newTime)).getMonth()-1}-
                                        {(new Date(cateGroup3.newTime)).getFullYear()}
                                    </div>
                                </div>
                             </div>
                     </div>
                     <div className='newsbody-recently'>
                        <div className='newsbody-recently-title'> Most Popular</div>
                        <div className='newsheader-bottom'>
                            <img src={cateGroup2.newImg} alt='' className='bottom-img'/>
                                <div className='bottom-overlay'></div>
                                <div className='bottom-info '>
                                    <div className='bottom-cate'>{cateGroup2.newCate}</div>
                                    <div className='bottom-title'>{cateGroup2.newTitle}</div>
                                    <div className='bottom-date'> by michael _
                                        {(new Date(cateGroup2.newTime)).getDate()}-
                                        {(new Date(cateGroup2.newTime)).getMonth()-1}-
                                        {(new Date(cateGroup2.newTime)).getFullYear()}
                                    </div>
                                </div>
                             </div>
                     </div>
                  </div>
                  
            </div>
            
        </div>
    )
}
export default NewsBody;