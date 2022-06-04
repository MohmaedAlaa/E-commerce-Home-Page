import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';

const CategoriesMobileNav= () => {

    return (
        <div id='mobile-nav-categories-section'>
            <div className='mobile-nav-categories-container'>
                <div className='mobile-nav-categories-first-row'>
                    <div>
                        <a href='#home'>Household</a>
                    </div>
                    <div>
                        <a href='#home'>Beauty</a>
                    </div>
                    <div>
                        <a href='#home'>Clothing</a>
                    </div>                   
                </div>
                <div className='mobile-nav-categories-second-row'>
                    <div>
                        <a href='#home'>Accessories</a>
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
export default CategoriesMobileNav