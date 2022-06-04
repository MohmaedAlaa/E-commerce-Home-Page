import React from 'react'
import { Link } from 'react-router-dom'
import './MobileNav.css'
import CategoriesMobileNav from './CategoriesMobileNav'
const MobileNav= () => {

    return (
        <div id='mobile-nav-section' className='mobile-nav-section'>
            <div className='header'>
                <Link className="back" to={{ pathname: '/'}}>
                    <img src={require('./icons/Icon - arrow right.svg')} alt='Icon - arrow right'></img>
                </Link>
                <p className='categories-title'>Mytreety Categories</p>
            </div>
            <div>
                <CategoriesMobileNav></CategoriesMobileNav>
            </div>
            <div className='links-part'>
                <Link className="back" to={{ pathname: '/'}}>
                    <img src={require('./icons/Icon - language.svg')} alt='Icon - language'></img> &nbsp; Deutsch
                </Link>
                <hr></hr>
                <Link className="back" to={{ pathname: '/'}}>
                    <img src={require('./icons/Icon - language.svg')} alt='Icon - language'></img> &nbsp; Gift cards
                </Link>
                <hr></hr>
                <Link className="back" to={{ pathname: '/'}}>
                    <img src={require('./icons/Icon - help.svg')} alt='Icon - help'></img> &nbsp; Help
                </Link>
                <hr></hr>
                <Link className="back" to={{ pathname: '/'}}>
                    Mytreety <span>Plus</span>
                </Link>
                <hr></hr>
                <Link className="back" to={{ pathname: '/'}}>
                    Sustainability Criteria
                </Link>
            </div>
            
        </div>
        
      )
}
export default MobileNav