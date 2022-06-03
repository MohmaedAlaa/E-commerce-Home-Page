import React from 'react'
import BestSeller from './BestSeller';
import Icon_arrow from './icons/Icon - arrow right.svg';
const BestSellerSection = ({sidebarOpen,bestSellerProducts,onSetSidebarOpen,style}) => {
  const scroll_r=()=>{
    const best_seller_section=document.getElementById('best_seller_section_2');
    best_seller_section.scrollBy(400,0);
  
   }
    const scroll_l=()=>{
    const best_seller_section=document.getElementById('best_seller_section_2');
  best_seller_section.scrollBy(-400,0);
  
  }
    return(  
      <div className='caver-best-seller-section'>

      <div className='best-seller-section' id="best_seller_section_2">
        <button className="btn-scroll bg-white scroll-left "  type="button"   onClick={scroll_l} > <img src={Icon_arrow} alt="Icon - arrow left"/></button>
          
          {bestSellerProducts.data?bestSellerProducts.data.map((bestSellerProduct)=>(
          <div className='best-seller-card-section'><BestSeller 
          bestSellerProduct={bestSellerProduct}
          style={style} 
          onSetSidebarOpen={onSetSidebarOpen}
          sidebarOpen={sidebarOpen}></BestSeller></div>
          )):"loading"}

        <button className="btn-scroll bg-white scroll-right "  type="button"   onClick={scroll_r} > <img src={Icon_arrow} alt="Icon - arrow right"/></button>
      </div>      
  </div>       
  )      
}
export default BestSellerSection;