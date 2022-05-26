import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleRight,faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const BestSeller = ({bestSellerProducts}) => {

    return (
        <div>
            <div className="section-header BestSeller-header">
                <h1>Best Seller</h1>
                <a href='#home'> <span>See All</span> <FontAwesomeIcon icon={faAngleRight}/> </a>
            </div>
            <div>
                {bestSellerProducts.map((product)=>(
                    <div className='container' key={product.id}>
                        <div className='card'>
                          <p className='sale'>15% off</p>
                          <img src={require('./Imgs/Icon - sustainability 1@2x.png')} className='sustainability-icon' alt='Icon - sustainability'></img>
                              <img src={require(`${product.thumbnail_image}`)} alt='Img - product'></img>
                              
                              {/* <hr className='card-hr'></hr> */}
                              <div className='card-text-area'>
                              <p>Polo Shirt</p>
                              <p className='price'>€30</p>
                              </div>
                              <div className='card-btn'>
                                  <button className='heart-button'><FontAwesomeIcon icon={faHeart}/></button>
                                  <button className='cart-button'><FontAwesomeIcon icon={faCartShopping}/>
                                  &nbsp;&nbsp;&nbsp;
                                  <span>Add To Cart</span>
                                  </button>
                              </div>
                              {/* <div className='inner-container'>
                                  <p>helow</p>
                              </div> */}
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
        
      )
}
export default BestSeller