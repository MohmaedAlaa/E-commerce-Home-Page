import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const EmailSection = ({email,emailFn,sendEmailFn}) => {
    
    return (
        <div className='email-section' id='email-section'>
            <div className='email-section-container'>
                <div className='input-area'>
                    <h1>Join Our Newsletter</h1>
                    <p>Subscribe today for free and we will send tips on how to live sustainably.</p>

                    <div className="inputWithIcon">
                        <input type="email" id="email" name="email" placeholder='Enter You Email' value={email} onChange={(event) => emailFn(event.target.value)}></input>
                        <FontAwesomeIcon className='email-icon' icon={faEnvelope}/>
                    </div>
                    <button className="btn-search" onClick={()=>sendEmailFn()}>Subscribe</button>
                </div>
                <div className='img-email-section'>
                    <img src={require('./icons/vector - dummy 2.svg')} alt='vector - dummy'></img>
                </div>
                {/* {console.log(email)} */}
            </div>
        </div>
        
      )
}
export default EmailSection