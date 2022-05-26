import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleRight,faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const TopRanked = () => {
    const showMassage = ()=> {
        var div = document.getElementById("newpost");
        // div.classList.toggle('hidden'); 
      }
    return (
        <div id='topRanked-section'>
            <div className="section-header">
                <h1>Top Top Ranked Sustainable products</h1>
                <a href='#home'> <span>See All</span> <FontAwesomeIcon icon={faAngleRight}/> </a>
            </div>
            <div className='container'>
                <div className='card'>
                <p className='sale'>15% off</p>
                <img src={require('./Imgs/Icon - sustainability 1@2x.png')} alt='Icon - sustainability' className='sustainability-icon'></img>
                    <img src={require('./Imgs/Img - product 1@2x.png')} alt='Img - product'></img>
                    
                    <div className='card-text-area'>
                        <div className='hover-content'>
                        <img src={require('./Imgs/Img - product 1@2x.png')} alt='Img - product'></img>
                        </div>
                        <p>Polo Shirt</p>
                        <p className='price'>€30</p>
                    </div>
                    <div className='card-btn'>
                        <button className='heart-button'><FontAwesomeIcon icon={faHeart}/></button>
                        <button 
                        className='cart-button' 
                        onclick={showMassage()}
                        ><FontAwesomeIcon icon={faCartShopping}/>
                        &nbsp;&nbsp;&nbsp;
                        <span>Add To Cart</span>
                        <div id="newpost"  class="hidden">
    <p>This div will be show and hide on button click</p>
  </div>
                        </button>
                    </div>
                    {/* <div className='inner-container'>
                        <p>helow</p>
                    </div> */}
                </div>
            </div>
        </div>
        
      )
}
export default TopRanked