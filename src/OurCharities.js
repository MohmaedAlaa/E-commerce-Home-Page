import React, { useRef ,Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {usePopup, DialogType} from "react-custom-popup";
import Popup from 'reactjs-popup';
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import App from "./popup";


class OurCharities extends Component {


    render (){
        const {ourCharity} = this.props;
        return (
            
            <div id='OurCharities-section'>
                 {console.log(ourCharity)}
                 {/* {console.log(ourCharity.id)} */}
                 {/* {console.log(ourCharity.name)} */}
                 {console.log(ourCharity.image)}
                <div className="container-OurCharities" >
                    <div className="OurCharities-content">
                    {/* background for the content */}
                        <div className="OurCharities-content-overlay"></div> 
                        <img className="OurCharities-content-image"  src={require('./Imgs/img - charity 1@2x.png')} alt='img - charity'></img>
                        <div className="OurCharities-content-details">
                            <h3 className="OurCharities-content-title">{ourCharity.name}</h3>
                            <p className="OurCharities-content-text">{ourCharity.description} </p>
                            {/* <Popup trigger={<button className="SeeMore">  .....See More </button>} position="left">
                                <p className='SeeMore-popup'>{ourCharity.description}</p>
                            </Popup> */}
                            <App ourCharityName={ourCharity.name} ourCharityDescription={ourCharity.description}></App>
                            {/* <a href='#home' className="SeeMore">e</a> */}
                        </div>
                    </div>
                </div>
                <div className="container-OurCharities">
                    <div className="OurCharities-content">
                    {/* background for the content */}
                        <div className="OurCharities-content-overlay"></div> 
                        <img className="OurCharities-content-image"  src={require('./Imgs/img - charity 1@2x.png')} alt='img - charity'></img>
                        <div className="OurCharities-content-details fadeIn-bottom">
                            <h3 className="OurCharities-content-title">SeedMadagascar</h3>
                            <p className="OurCharities-content-text">We implement sustainable development projects spanning four key areas - conservation, community health, education and livelihoods <a href='#home'> .....See More</a> </p>
                        </div>
                    </div>
                </div>
            </div>
          )
    }
    
}
export default OurCharities