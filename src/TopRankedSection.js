import React from 'react'
import TopRanked from './TopRanked';
import Icon_arrow from './icons/Icon - arrow right.svg';
const TopRankedSection = ({sidebarOpen,bestSellerProducts,onSetSidebarOpen,style}) => {
 const scroll_r=()=>{
  const best_seller_section=document.getElementById('best_seller_section');
  best_seller_section.scrollBy(400,0);

 }
  const scroll_l=()=>{
  const best_seller_section=document.getElementById('best_seller_section');
best_seller_section.scrollBy(-400,0);

}
 
    return(    

      <div className='caver-best-seller-section'>

        <div className='best-seller-section' id="best_seller_section">
          <button className="btn-scroll  bg-white scroll-left "  type="button"   onClick={scroll_l} > <img src={Icon_arrow} alt="Icon - arrow left"/></button>
        
          {bestSellerProducts.data?bestSellerProducts.data.map((bestSellerProduct)=>(
          <div className='best-seller-card-section'><TopRanked 
          bestSellerProduct={bestSellerProduct}
          style={style} 
          onSetSidebarOpen={onSetSidebarOpen}
          sidebarOpen={sidebarOpen}></TopRanked></div>
          )):"loading"}
        <button className="btn-scroll  bg-white scroll-right "  type="button"   onClick={scroll_r} > <img src={Icon_arrow} alt="Icon - arrow right"/></button>
        </div>      
      </div>   
  )   
}
export default TopRankedSection;