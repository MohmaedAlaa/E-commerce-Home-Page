import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe} from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
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
                        <a href='##' className='help'><FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon> Help</a>
                    </button>
                    <button>
                        <a href='###' className='Deutsch'><FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon> Deutsch</a>
                    </button>
                </div>
            </div>
        </div>
        
      )
}
export default Navbar