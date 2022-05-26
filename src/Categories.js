import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';

const Categories= () => {

    return (
        <div id='categories-section'>
            <div className="section-header categories-section-header">
                <h1>Browse Categories</h1>
                <a href='#top'> <span>See All</span> <FontAwesomeIcon icon={faAngleRight}/> </a>
            </div>
            <div className='categories-container'>
                <div className='categories-first-row'>
                    <div>
                        <a href='#home'>Household</a>
                    </div>
                    <div>
                        <a href='#home'>Accessories</a>
                    </div>
                    <div>
                        <a href='#home'>Clothing</a>
                    </div>                   
                </div>
                <div className='categories-second-row'>
                    <div>
                        <a href='#home'>Beauty</a>
                    </div>
                    <div>
                        <a href='#home'>Technology</a>
                    </div>
                    <div>
                        <a href='#home'>Pets</a>
                    </div>
                </div>
            </div>
        </div>
        
      )
}
export default Categories