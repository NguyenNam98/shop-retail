import React from 'react';
import {Link} from 'react-router-dom';
import './HomeComponent.css';
import b1 from '../../Assets/b1.jpg';
import b2 from '../../Assets/b2.jpg';
import b3 from '../../Assets/b3.jpg';
import b4 from '../../Assets/b4.jpg';

function HomeFeature(){
    return(
        <div className="HomeFeature flex-center">
            <div className="homefeature-container flex-center">
                <div className="banner-box img-hover">
                    <img src={b1}  width="100%" height="100%"/>
                    <div className="black-box">
                        <div className="black-box-title">New Arrivals</div>
                        <div className="black-box-center">
                            <Link to='/shop' className='black-box-link'>Shop Now</Link>
                        </div>
                    </div>
                </div>
                <div className="banner-box">
                    <div className="banner-top flex-center">
                        <div className="top1">
                            <img src={b2} width="100%" height="100%"></img>
                            <div className="black-box">
                                <div className="black-box-title">Woman</div>
                                <div className="black-box-center">
                                    <Link to='/shop' className='black-box-link'>Shop Now</Link>
                               </div>
                            </div>
                        </div>
                        <div className="top2">
                            <img src={b3} width="100%" height="100%"></img>
                            <div className="black-box">
                                <div className="black-box-title">Men</div>
                                <div className="black-box-center">
                                    <Link to='/shop' className='black-box-link'>Shop Now</Link>
                               </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-bottom">
                        <img src={b4} width="100%" height="100%"></img>
                        <div className="black-box">
                                <div className="black-box-title">Free Shipping </div>
                                <div className="black-box-center">
                                    <Link to='/shop' className='black-box-link'>Shop Now</Link>
                               </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeFeature;