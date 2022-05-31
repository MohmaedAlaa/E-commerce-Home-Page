import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleRight,faCartShopping} from '@fortawesome/free-solid-svg-icons';
import BestSeller from './BestSeller';

const BestSellerSection = ({sidebarOpen,bestSellerProducts,onSetSidebarOpen,style}) => {
  
    return(  
        <div className='best-seller-section'>

        {console.log(bestSellerProducts.data)}
        {console.log((typeof(bestSellerProducts.data)))}
        
        {bestSellerProducts.data?bestSellerProducts.data.map((bestSellerProduct)=>(
        <div className='best-seller-card-section'><BestSeller 
         bestSellerProduct={bestSellerProduct}
         style={style} 
         onSetSidebarOpen={onSetSidebarOpen}
         sidebarOpen={sidebarOpen}></BestSeller></div>
        )):"loading"}

        </div>      
  )      
}
export default BestSellerSection;