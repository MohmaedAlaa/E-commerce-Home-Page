import React from 'react'
import OurCharities from './OurCharities';
// import Carousel from 'react-elastic-carousel';
import Item from "./Item";
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import Carousel from 'react-elastic-carousel';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';


function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <div disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      Left
    </div>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <div disabled={isLastItemVisible} onClick={() => scrollNext()}>
      Right
    </div>
  );
}

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