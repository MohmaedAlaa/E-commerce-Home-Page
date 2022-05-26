import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF ,faLinkedinIn ,faTwitter ,faInstagram} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    
    return (
        <div className='footer-section' id='footer-section'>
            <div className='footer-section-container'>
                <div className='footer-section-top'>
                    <div className='footer-section-top-one'>
                        <img src={require('./Imgs/b@2x.png')} alt='b'></img>
                        <p>All prices include VAT.</p>
                        <p>Follow us on</p>
                        <div className='social-icons'>
                            <FontAwesomeIcon className='social-single-icon' icon={faFacebookF}/> 
                            <FontAwesomeIcon className='social-single-icon' icon={faLinkedinIn}/> 
                            <FontAwesomeIcon className='social-single-icon' icon={faTwitter}/> 
                            <FontAwesomeIcon className='social-single-icon' icon={faInstagram}/> 
                            {/* <img src={'./Imgs/facebook-f-brands.svg'} alt="React Logo"/> */}
                        </div>
                    </div>
                    <div className='footer-section-top-two'>
                        <h4>Shopping</h4>
                        <a href='#home'>Our Brands</a>
                        <a href='#home'>Our Charities</a>
                        <a href='#home'>Gift Cards</a>
                        <a href='#home'>My Wishlist</a>
                        <a href='#home'>Featured Products</a>
                    </div>
                    <div className='footer-section-top-three'>
                        <h4>Service</h4>
                        <a href='#home'>FAQ/Help</a>
                        <a href='#home'>Returns</a>
                        <a href='#home'>Contact Us</a>
                        <a href='#home'>Become a Seller</a>
                        <a href='#home'>Become a Charity partner</a>
                    </div>
                    <div className='footer-section-top-four'>
                        <h4>Mytreety</h4>
                        <a href='#home'>About Us</a>
                        <a href='#home'>Sustainability</a>
                        <a href='#home'>Jobs</a>
                    </div>
                    <div className='footer-section-top-five'>
                        <h4>&nbsp;Payment Methods</h4>
                        <img src={require('./Imgs/Img - Visa_Inc._logo.svg@2x.png')} alt='Visa_Inc._logo'></img>
                        <img src={require('./Imgs/Img - Mastercard-logo.svg@2x.png')} alt='Mastercard-logo'></img>
                        <img src={require('./Imgs/Img - PayPal.svg@2x.png')} alt='PayPal'></img>
                        <img src={require('./Imgs/Img - Klarna_Logo_black.svg@2x.png')} alt='Klarna_Logo'></img>
                        <img src={require('./Imgs/Img - Single_Euro_Payments_Area_logo.svg@2x.png')} alt='Single_Euro_Payments_Area_logo'></img>
                        <img src={require('./Imgs/Img - Giropay.svg@2x.png')} alt='Giropay'></img>
                    </div>
                </div>
                <hr></hr>
                <div className='footer-section-bottom'>
                    <p>Buyer/Seller/Charities Policies <span>.</span> Privacy Policy <span>.</span> Imprint <span>.</span> General terms and conditions</p>
                    <p>Ⓒ2022 Mytreety Revolutionizing SustainableE-commerce</p>
                </div>
            </div>
        </div>
        
      )
}
export default Footer