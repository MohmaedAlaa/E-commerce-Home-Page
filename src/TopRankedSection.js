import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleRight,faCartShopping} from '@fortawesome/free-solid-svg-icons';
import TopRanked from './TopRanked';

const TopRankedSection = ({sidebarOpen,bestSellerProducts,onSetSidebarOpen,style}) => {
  
    return(  
        <div className='best-seller-section'>

        {console.log(bestSellerProducts.data)}
        {console.log((typeof(bestSellerProducts.data)))}
        
        {bestSellerProducts.data?bestSellerProducts.data.map((bestSellerProduct)=>(
        <div className='best-seller-card-section'><TopRanked 
         bestSellerProduct={bestSellerProduct}
         style={style} 
         onSetSidebarOpen={onSetSidebarOpen}
         sidebarOpen={sidebarOpen}></TopRanked></div>
        )):"loading"}

        </div>      
  )      
}
export default TopRankedSection;