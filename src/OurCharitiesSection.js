import React from 'react'
import OurCharities from './OurCharities';
// import Carousel from 'react-elastic-carousel';
import Item from "./Item";
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import Carousel from 'react-elastic-carousel';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import Icon_arrow from './icons/Icon - arrow right white.svg';

const OurCharitiesSection = ({ourCharitiesData,items}) => {
  const scroll_r=()=>{
    const best_seller_section=document.getElementById('OurCharities-section');
    best_seller_section.scrollBy(400,0);
   }
    const scroll_l=()=>{
    const best_seller_section=document.getElementById('OurCharities-section');
  best_seller_section.scrollBy(-400,0);
  }

    return(  
        <div className='caver-OurCharities-section'>

 <div className='OurCharities-section' id="OurCharities-section">
      <button className="btn-scroll bg-green scroll-left "  type="button"   onClick={scroll_l} > <img src={Icon_arrow} alt="Icon - arrow left"/></button>
   
      {ourCharitiesData.data?ourCharitiesData.data.map((ourCharity)=>(
      <div className='best-seller-card-section'>
      <OurCharities
      ourCharity={ourCharity} 
      >
      </OurCharities>
      </div>
      )):"loading"}  

              <button className="btn-scroll bg-green scroll-right "  type="button"   onClick={scroll_r} > <img src={Icon_arrow} alt="Icon - arrow right"/></button>

    </div>      </div>
  )      
}
export default OurCharitiesSection;