import React, { useRef ,Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {usePopup, DialogType} from "react-custom-popup";
import Popup from 'reactjs-popup';
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import App from "./popup";


class OurCharitiesPageTwo extends Component {


   
    render (){
        const {data} = this.props;
        {console.log(data.data)}
        return (
            
            <div id='OurCharities-section'>
                <div className="container-OurCharities" >
                    <div className="OurCharities-content">
                        <div className="OurCharities-content-overlay"></div> 
                        <img className="OurCharities-content-image"  src={`https://testing.mytreety.com/${data.image}`} alt='img - charity'></img>
                        <div className="OurCharities-content-details">
                            <h3 className="OurCharities-content-title">{data.name}</h3>
                            <p className="OurCharities-content-text">{data.description} </p>
                            <App ourCharityName={data.name} ourCharityDescription={data.description}></App>
                        </div>
                    </div>
                </div>
            </div>
            
          )
    }
    
}
export default OurCharitiesPageTwo