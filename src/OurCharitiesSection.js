import React from 'react'
import OurCharities from './OurCharities';
// import Carousel from 'react-elastic-carousel';
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import Carousel from "react-elastic-carousel";
import Item from "./Item";

const OurCharitiesSection = ({ourCharitiesData,items}) => {
    
    return(  
        
      
    <div className='OurCharities-section'>
      {ourCharitiesData.data?ourCharitiesData.data.map((ourCharity)=>(
      <div className='best-seller-card-section'>
      <OurCharities
      ourCharity={ourCharity} 
      >
      </OurCharities>
      </div>
      )):"loading"}          
    </div>      
  )      
}
export default OurCharitiesSection;