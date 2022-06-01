import React, { useRef ,Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleRight,faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Sidebar from "react-sidebar";
import { CloseButton } from "@chakra-ui/close-button"
import PopupGfg from "./Item";
import Popup from 'reactjs-popup';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";

class BestSeller extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
      }
      onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
      }
      
    render (){
        const {bestSellerProduct,style} = this.props

        return(
            <div id='topRanked-section' className="topRanked-section-container">
            <Sidebar 
                sidebar={<div id="mySidenav" className="sidenav">
                <div className='sidenav-container'>
                    <div className='sidenav-first-line'>
                        <p> <span className="checkmark"></span>Added to cart</p>
                        {/* <a href="#home" className="closebtn">&times;</a> */}
                    </div>
                    <div className='sidenav-second-line'>
                        <div>
                        <img src={`https://testing.mytreety.com/${bestSellerProduct.thumbnail_image}`} alt='Img - product'></img>
                        </div>
                        <div className='sidenav-second-line-right'>
                        <p>{bestSellerProduct.name}</p>
                        <p className='price'>{bestSellerProduct.main_price}</p>
                        </div>
                    </div>    
                        <hr></hr>
                        <div className='sidenav-third-line'>
                        <p> Cart sub Total &nbsp; <span> (1 item) </span> </p>
                        <p className='price'>{bestSellerProduct.stroked_price}</p>
                        </div>
                        <button className='cart-button'><span>Cart</span></button>
                        <button className='checkout-btn'>Checkout</button>
                </div>
            </div>
}
                open={this.state.sidebarOpen}
                onSetOpen={this.onSetSidebarOpen}
                styles={style}
                pullRight={true}
            >
            <div className='container dropup'>
                <div className='card dropbtn'>
                <p className='sale'>15% off</p>
                <img src={require('./Imgs/Icon - sustainability 1@2x.png')} alt='Icon - sustainability' className='sustainability-icon'></img>
                    <img src={`https://testing.mytreety.com/${bestSellerProduct.thumbnail_image}`} alt='Img - product'></img>
                    
                    <div className='card-text-area'>
                        <div className='hover-content'>
                        <img src={`https://testing.mytreety.com/${bestSellerProduct.thumbnail_image}`} alt='Img - product'></img>
                        </div>
                        <p>{bestSellerProduct.name}</p>
                        <p className='price'>{bestSellerProduct.stroked_price}</p>
                        <hr className='card-hr' id='card-hr'></hr>
                    </div>
                    <div className='card-hover-menu dropup-content'>
                    {/* <div className='card-hover-menu'> */}
                    <ul>
                        <li>
                            <input type="checkbox" id="myCheckbox1" />
                            <label for="myCheckbox1"><img src={`https://testing.mytreety.com/${bestSellerProduct.thumbnail_image}`} alt='Img - product'></img></label>
                        </li>
                        <li>
                            <input type="checkbox" id="myCheckbox2" />
                            <label for="myCheckbox2"><img src={`https://testing.mytreety.com/${bestSellerProduct.thumbnail_image}`} alt='Img - product'></img></label>
                        </li>
                        <li>
                            <input type="checkbox" id="myCheckbox3" />
                            <label for="myCheckbox3"><img src={`https://testing.mytreety.com/${bestSellerProduct.thumbnail_image}`} alt='Img - product'></img></label>
                        </li>
                        <li>
                            <input type="checkbox" id="myCheckbox4" />
                            <label for="myCheckbox4"><img src={`https://testing.mytreety.com/${bestSellerProduct.thumbnail_image}`} alt='Img - product'></img></label>
                        </li>
                    </ul>

                    <ul className='label-size'>
                        <li>
                            <input type="checkbox" id="myCheckbox5" />
                            <label for="myCheckbox5">S</label>
                        </li>
                        <li>
                            <input type="checkbox" id="myCheckbox6" />
                            <label for="myCheckbox6">M</label>
                        </li>
                        <li>
                            <input type="checkbox" id="myCheckbox7" />
                            <label for="myCheckbox7">L</label>
                        </li>
                        <li>
                            <input type="checkbox" id="myCheckbox8" />
                            <label for="myCheckbox8">XL</label>
                        </li>
                        <li>
                            <input type="checkbox" id="myCheckbox9" />
                            <label for="myCheckbox9">XXL</label>
                        </li>
                        <li>
                            <input type="checkbox" id="myCheckbox10" />
                            <label for="myCheckbox10">3XL</label>
                        </li>
                    </ul>
                    </div>
                    <div className='card-btn'>
                        <button className='heart-button'><FontAwesomeIcon icon={faHeart}/></button>
                        <button 
                        className='cart-button popup' 
                        onClick={() => this.onSetSidebarOpen(true)}
                        > <MdOutlineShoppingCart className="cart-icon"></MdOutlineShoppingCart>
                            &nbsp;&nbsp;&nbsp;
                            <span>Add To Cart</span>
                          </button>                                         
                    </div>
                </div>
            </div>
            </Sidebar>
        </div>
        )
    }
}
export default BestSeller