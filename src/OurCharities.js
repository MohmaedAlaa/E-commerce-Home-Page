import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';

const OurCharities= () => {

    return (
        <div id='OurCharities-section'>
            <div className="section-header OurCharities-section-header">
                <h1>Our charities</h1>
                <a href='#home'> <span>See All</span> <FontAwesomeIcon icon={faAngleRight}/> </a>
            </div>
            <div className="container container-OurCharities">
                <div className="OurCharities-content">
                {/* background for the content */}
                    <div className="OurCharities-content-overlay"></div> 
                    <img className="OurCharities-content-image"  src={require('./Imgs/img - charity 1@2x.png')} alt='img - charity'></img>
                        <div className="OurCharities-content-details">
                        <h3 className="OurCharities-content-title">SeedMadagascar</h3>
                        <p className="OurCharities-content-text">We implement sustainable development projects spanning four key areas - conservation, community health, education and livelihoods <a href='#home'> .....See More</a> </p>
                    </div>
                </div>
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
            <div className="container container-OurCharities">
                <div className="OurCharities-content">
                {/* background for the content */}
                    <div className="OurCharities-content-overlay"></div> 
                    <img className="OurCharities-content-image"  src={require('./Imgs/img - charity 1@2x.png')} alt='img - charity'></img>
                        <div className="OurCharities-content-details">
                        <h3 className="OurCharities-content-title">SeedMadagascar</h3>
                        <p className="OurCharities-content-text">We implement sustainable development projects spanning four key areas - conservation, community health, education and livelihoods <a href='#home'> .....See More</a> </p>
                    </div>
                </div>
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
export default OurCharities