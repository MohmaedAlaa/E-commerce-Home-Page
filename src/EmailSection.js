import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const EmailSection = () => {
    
    return (
        <div className='email-section' id='email-section'>
            <div className='input-area'>
                <h1>join Our Newsletter</h1>
                <p>Subscribe today for free and we will send tips on how to live sustainably.</p>
                {/* <div className='input'>
                    <FontAwesomeIcon className='email-icon' icon={faEnvelope}/>
                    <input type="email" id="email" name="email" placeholder='Enter You Email'></input>
                </div> */}
                <div className="inputWithIcon">
                    <input type="email" id="email" name="email" placeholder='Enter You Email'></input>
                    <FontAwesomeIcon className='email-icon' icon={faEnvelope}/>
                </div>
                <button className="btn-search">Subscribe</button>
            </div>
            <div>
                <img src={require('./Imgs/vector - dummy 2@2x.png')} alt='vector - dummy'></img>
            </div>
        </div>
        
      )
}
export default EmailSection