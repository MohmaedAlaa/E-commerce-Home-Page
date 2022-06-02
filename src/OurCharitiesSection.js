import React from 'react'
import OurCharitiesPageTwo from './OurCharitiesPageTwo';
import OurCharitiesPageOne from './OurCharitiesPageOne';
import 'react-multi-carousel/lib/styles.css'
import Icon_arrow from './icons/Icon - arrow right white.svg';

const OurCharitiesSection = ({ourCharitiesDataPageOne,ourCharitiesDataPageTwo,items}) => {
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
        <div className='caver-OurCharities-section-page-one'>
        <button className="btn-scroll bg-green scroll-left "  type="button"   onClick={scroll_l} > <img src={Icon_arrow} alt="Icon - arrow left"/></button>

            <div>
              <div className='OurCharities-section' id="OurCharities-section">
                {ourCharitiesDataPageOne.data?ourCharitiesDataPageOne.data.map((data)=>(
                <div className='best-seller-card-section'>
                <OurCharitiesPageOne
                data={data} 
                >
                </OurCharitiesPageOne>
                </div>
                )):"loading"}  
              </div >

              <div className='caver-OurCharities-section-page-two'>
                  {/* <ourCharitiesDataPageTwo></ourCharitiesDataPageTwo> */}
                {ourCharitiesDataPageTwo.data?ourCharitiesDataPageTwo.data.map((data)=>(
                <div className='best-seller-card-section'>
                <OurCharitiesPageTwo
                data={data} 
                >
                </OurCharitiesPageTwo>
                </div>
                )):"loading"}
              </div>
            </div>
             
          <button className="btn-scroll bg-green scroll-right "  type="button"   onClick={scroll_r} > <img src={Icon_arrow} alt="Icon - arrow right"/></button>
        </div>      
    </div>
  )      
}
export default OurCharitiesSection;