import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-section" id="footer-section">
      <div className="footer-section-container">
        <div className="footer-section-top ">
          <div className="footer-section-top-one hide-mobile-2 w-100-sx">
            <img
              src={require("./Imgs/b.svg")}
              alt="b"
              className="logo-footer"
            />
            <p>All prices include VAT.</p>
            <p>Follow us on</p>
            <div className="social-icons w-100-sx">
              <FontAwesomeIcon
                className="social-single-icon"
                icon={faFacebookF}
              />
              <FontAwesomeIcon
                className="social-single-icon"
                icon={faLinkedinIn}
              />
              <FontAwesomeIcon
                className="social-single-icon"
                icon={faTwitter}
              />
              <FontAwesomeIcon
                className="social-single-icon"
                icon={faInstagram}
              />
              {/* <img src={'./Imgs/facebook-f-brands.svg'} alt="React Logo"/> */}
            </div>
          </div>
          <div className="footer-section-top-two hide-mobile-1">
            <h4 className="title-footer">Shopping</h4>
            <a href="#home">Our Brands</a>
            <a href="#home">Our Charities</a>
            <a href="#home">Gift Cards</a>
            <a href="#home">My Wishlist</a>
            <a href="#home">Featured Products</a>
          </div>
          <div className="footer-section-top-three hide-mobile-1">
            <h4 className="title-footer">Service</h4>
            <a href="#home">FAQ/Help</a>
            <a href="#home">Returns</a>
            <a href="#home">Contact Us</a>
            <a href="#home">Become a Seller</a>
            <a href="#home">Become a Charity partner</a>
          </div>
          <div className="footer-section-top-four hide-mobile-1">
            <h4 className="title-footer">Mytreety</h4>
            <a href="#home">About Us</a>
            <a href="#home">Sustainability</a>
            <a href="#home">Jobs</a>
          </div>
          <div className="footer-section-top-five hide-mobile-1">
            <h4 className="title-footer">&nbsp;Payment Methods</h4>
            <img
              src={require("./Imgs/Img - Visa_Inc._logo.svg@2x.png")}
              alt="Visa_Inc._logo"
            />
            <img
              src={require("./Imgs/Img - Mastercard-logo.svg@2x.png")}
              alt="Mastercard-logo"
            />
            <img src={require("./Imgs/Img - PayPal.svg@2x.png")} alt="PayPal" />
            <img
              src={require("./Imgs/Img - Klarna_Logo_black.svg@2x.png")}
              alt="Klarna_Logo"
            />
            <img
              src={require("./Imgs/Img - Single_Euro_Payments_Area_logo.svg@2x.png")}
              alt="Single_Euro_Payments_Area_logo"
            />
            <img
              src={require("./Imgs/Img - Giropay.svg@2x.png")}
              alt="Giropay"
            />
          </div>
          <div className="footer-section-top-mobile">
            <div className="footer-section-top-mobile-right">
              <a href="#home">About Us</a>
              <a href="#home">Sustainability ranking</a>
              <a href="#home">Vendor Portal</a>
            </div>{" "}
            <div className="footer-section-top-mobile-left">
              <a href="#home">Jobs</a>
              <a href="#home">Become a Seller</a>
              <a href="#home">Become a Charity partner</a>
            </div>
          </div>
          <div className="footer-section-top-mobile-bottom">
            <a href="#home">Buyer/Seller/Charity Policies</a>
             <a className="point-footer" href="#home">Privacy Policy</a>
            <a className="point-footer" href="#home">Imprint</a>
            <a href="#home">General terms and conditions</a>
          </div>
        </div>
        <hr className="hr-footer"/>
        <div className="footer-section-bottom">
          <p className="hide-mobile-1">
            Buyer/Seller/Charities Policies <span>.</span> Privacy Policy{" "}
            <span>.</span> Imprint <span>.</span> General terms and conditions
          </p><p className="footer-show-mobile">
          All prices include VAT.
          </p >
          <p className="footer-show-mobile">Ⓒ2022 Mytreety Revolutionizing Sustainable E-commerce</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
