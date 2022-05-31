import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { BsGlobe } from "react-icons/bs";

const Navbar = () => {

    return (
        <div>
            <div className="navBar" id='naBar'>
                <p>Free shopping in all products!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;30 days refund period</p>
                <div className='navBottons'>
                    <button>
                        <a href='/#' className='mytreetyPlus'>Mytreety <span>Plus</span></a>
                    </button>
                    <button>
                        <a href='##' className='help'><FontAwesomeIcon icon={faCircleQuestion} style={{fontSize: '1.25em'}}></FontAwesomeIcon> Help</a>
                    </button>
                    <button>
                        <a href='###' className='Deutsch'><BsGlobe style={{fontSize: '1.25em'}}></BsGlobe> Deutsch</a>
                    </button>
                </div>
            </div>
        </div>
        
      )
}
export default Navbar