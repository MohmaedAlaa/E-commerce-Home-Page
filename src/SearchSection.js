import React from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown ,faClockRotateLeft ,faMagnifyingGlass ,faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {MdOutlineRemoveShoppingCart} from   'react-icons/md'
const SearchSection = ({query,searchedProductsFn}) => {

    // const [color,setColor]=useState('');
    // const handleSelectColor=(e)=>{
    //     console.log(e);
    //     setColor(`${e} \t`);
    // }
    return (
        <div className='search-section-background' id='search-section'>
            {/* background of the search menu */}
            {query.length?<div className='fake-size-search-menu'></div>:''}

            <div className='search-section'>
            <img src={require('./Imgs/b.svg')} alt='b'></img>
            <div className='search-section-icons-mobile'>
                <img src={require('./icons/Icon - Account.svg')} className='profile-icon-mobile' alt='b'></img>
                <img src={require('./icons/Icon - cart.svg')} className="shopping-icon-mobile" alt='b'></img>
            </div>
                <div>
                    {/* catch the query and pass it to the searchedBooksFn to search for the books by it */}
                    <div className="search-inputWithIcon">
                        <input type="text" id="text" name="text" 
                        placeholder='Search all products or categories' 
                        value={query}
                        onChange={(event) => searchedProductsFn(event.target.value)}
                        ></input>
                        <FontAwesomeIcon className='email-icon' icon={faMagnifyingGlass}/>
                    </div>  
                    {/* <div className="search-bar">
                        <input type="text"
                        placeholder=" Search all products or categories" 
                        className="search-input"
                        value={query}
                        onChange={(event) => searchedProductsFn(event.target.value)}
                        />
                        <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass}/>
                    </div> */}
    
                    {
                        query.length?
                        <div className='search-menu'>
                            <div className='search-menu-content'>
                                <p>Recent</p>
                                <div className='row'>
                                    <a href='#home'><FontAwesomeIcon className='recent-icon' icon={faClockRotateLeft}/> &nbsp; snack dog</a>
                                    <button>Remove</button>
                                </div>
                                <div className='row'>
                                    <a href='#home#home'><FontAwesomeIcon className='recent-icon' icon={faClockRotateLeft}/> &nbsp; snack dog</a>
                                    <button>Remove</button>
                                </div>
                                <div className='row'>
                                    <a href='#home#home#home'><FontAwesomeIcon className='recent-icon' icon={faClockRotateLeft}/> &nbsp; snack dog</a>
                                    <button>Remove</button>
                                </div>
                                <p>Suggestions</p>
                                <div>
                                    <a href='#home#home#home#home'><FontAwesomeIcon className='recent-icon' icon={faMagnifyingGlass}/> &nbsp; snack dog</a>
                                </div>
                                <div>
                                    <a href='#home#home#home#home#home'><FontAwesomeIcon className='recent-icon' icon={faMagnifyingGlass}/> &nbsp; snack dog</a>
                                </div>
                                <div>
                                    <a href='#home#home#home#home#home#home'><FontAwesomeIcon className='recent-icon' icon={faMagnifyingGlass}/> &nbsp; snack dog</a>
                                </div>
                                <p>products & Brands</p>
                                <div>
                                    <a href='#home'><FontAwesomeIcon className='recent-icon' icon={faMagnifyingGlass}/> &nbsp; snack dog</a>
                                </div>
                                <div>
                                    <a href='#home#home'><FontAwesomeIcon className='recent-icon' icon={faMagnifyingGlass}/> &nbsp; snack dog</a>
                                </div>
                            </div>
                            <button className='view-all'> <span> View All Result </span> <FontAwesomeIcon icon={faAngleRight}/> </button>
                        </div>
                        :''
                    }
                                 
                </div>
                <div >
                <DropdownButton
                    title=" All "
                    className='search-section-dropdown'
                    // onSelect={handleSelectColor}
                >
                    <p className='search-section-header'>All</p>
                    <p className='sustainability-ranking'>Sustainability Ranking</p>
                    <Dropdown.Item eventKey="Good Sustainability">Good Sustainability</Dropdown.Item>
                    <Dropdown.Item eventKey="Great Sustainability">Great Sustainability</Dropdown.Item>
                    <Dropdown.Item eventKey="Excellent Sustainability">Excellent Sustainability</Dropdown.Item>

                    <p className='search-section-p'>Categories</p>
                    <Dropdown.Item eventKey="Good Sustainability">Clothing</Dropdown.Item>
                    <Dropdown.Item eventKey="Great Sustainability">Accessories</Dropdown.Item>
                    <Dropdown.Item eventKey="Excellent Sustainability">Household</Dropdown.Item>
                    <Dropdown.Item eventKey="Good Sustainability">Beauty</Dropdown.Item>
                    <Dropdown.Item eventKey="Great Sustainability">Technology</Dropdown.Item>
                    <Dropdown.Item eventKey="Excellent Sustainability">Pets</Dropdown.Item>
                </DropdownButton>
                </div>       
                <button type="button" className="btn-search">Search</button>  
                <div className='search-section-icons'>
                {/* <img src={require('./icons/Icon - cart.svg')} className="shopping-icon" alt='b'></img>
                <img src={require('./icons/Icon - wishlist.svg')} className='favorite-icon' alt='b'></img>
                <img src={require('./icons/Icon - Account.svg')} className='profile-icon' alt='b'></img> */}
                <div className='hover-section'>
                    <div className="dropdown dropdown-hover dropdown-hover-shopping-icon">
                            <span><img src={require('./icons/Icon - cart.svg')} className="shopping-icon" alt='b'></img></span>
                            <div className='fake-size-drop-menu'>
                                <div className="dropdown-content">
                                    <div className='contant-rows'>
                                        <div className='shopping-icon-content'>
                                            <MdOutlineRemoveShoppingCart className='Remove-shopping-cart'></MdOutlineRemoveShoppingCart>
                                            <p className='shopping-icon-content-p'>Your cart is empty</p>
                                            <a href='#home' className='shopping-icon-content-p-second'>Start shopping your favorite sustainable products!</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown dropdown-hover">
                            <span><img src={require('./icons/Icon - wishlist.svg')} className='favorite-icon' alt='b'></img></span>
                            <div className='fake-size-drop-menu'>
                                {/* <div className="dropdown-content">
                                    <div className='contant-rows'>
                                        <div className='content-first-line'>
                                            <p>Women</p>
                                            <a href='#home'>Tops</a>
                                            <a href='#home'>Khitwear</a>
                                            <a href='#home'>Coats & Jakets</a>
                                            <a href='#home'>Dresses</a>
                                            <a href='#home'>Skirts</a>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="dropdown dropdown-hover">
                            <span><img src={require('./icons/Icon - Account.svg')} className='profile-icon' alt='b'></img></span>
                            <div className='fake-size-drop-menu profile-menu'>
                                <div className="dropdown-content">
                                    <div className='contant-rows'>
                                        <div className='content-first-line profile-hover'>
                                            <button type="button" className="btn-search">Login</button>
                                            <p className="p-the-first">Don't have an account?</p>
                                            {/* <a href='#home'>My Account</a> */}
                                            <a href='#home' className='p-the-second'>Register</a>
                                            <hr></hr>
                                            <a href='#home'>My Account</a>
                                            <a href='#home'>My Orders</a>
                                            <a href='#home'>My Addresses</a>
                                            <a href='#home'>MyTreety<span>Plus</span></a>
                                            <a href='#home'>Help</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <hr></hr>
            </div>
            <div className='hover-section'>
                <div className="dropdown dropdown-hover dropdown-hover-firstOne">
                    <span>Clothing</span>
                    <div className='fake-size-drop-menu'>
                        <div className="dropdown-content">
                            <div className='contant-rows'>
                                <div className='content-first-line'>
                                    <p>Women</p>
                                    <a href='#home'>Tops</a>
                                    <a href='#home'>Khitwear</a>
                                    <a href='#home'>Coats & Jakets</a>
                                    <a href='#home'>Dresses</a>
                                    <a href='#home'>Skirts</a>
                                </div>
                                <div className='content-second-line'>
                                    <p>Men</p>
                                    <a href='#home'>Tops</a>
                                    <a href='#home'>Khitwear</a>
                                    <a href='#home'>Coats & Jakets</a>
                                    <a href='#home'>Dresses</a>
                                    <a href='#home'>Skirts</a>
                                </div>
                                <div className='content-third-line'>
                                    <p>Kids</p>
                                    <a href='#home'>Tops</a>
                                    <a href='#home'>Khitwear</a>
                                    <a href='#home'>Coats & Jakets</a>
                                    <a href='#home'>Dresses</a>
                                    <a href='#home'>Skirts</a>
                                </div>
                                <div className='content-fourth-line'>
                                    <p>unisex</p>
                                    <a href='#home'>Tops</a>
                                    <a href='#home'>Khitwear</a>
                                    <a href='#home'>Coats & Jakets</a>
                                    <a href='#home'>Dresses</a>
                                    <a href='#home'>Skirts</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-hover">
                    <span>Accessories</span>
                    <div className='fake-size'>
                        <div className="dropdown-content">
                            <div className='contant-rows'>
                                <div className='content-first-line'>
                                    <p>Women</p>
                                    <a href='#home'>Tops</a>
                                    <a href='#home'>Khitwear</a>
                                    <a href='#home'>Coats & Jakets</a>
                                    <a href='#home'>Dresses</a>
                                    <a href='#home'>Skirts</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-hover">
                    <span>Household</span>
                    <div className='fake-size'>
                        <div className="dropdown-content">
                            <div className='contant-rows'>
                                <div className='content-first-line'>
                                    <p>Women</p>
                                    <a href='#home'>Tops</a>
                                    <a href='#home'>Khitwear</a>
                                    <a href='#home'>Coats & Jakets</a>
                                    <a href='#home'>Dresses</a>
                                    <a href='#home'>Skirts</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-hover">
                    <span>Beauty</span>
                    <div className='fake-size'>
                        <div className="dropdown-content">
                            <div className='contant-rows'>
                                <div className='content-first-line'>
                                    <p>Women</p>
                                    <a href='#home'>Tops</a>
                                    <a href='#home'>Khitwear</a>
                                    <a href='#home'>Coats & Jakets</a>
                                    <a href='#home'>Dresses</a>
                                    <a href='#home'>Skirts</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-hover">
                    <span>Technology</span>
                    <div className='fake-size'>
                        <div className="dropdown-content">
                            <div className='contant-rows'>
                                <div className='content-first-line'>
                                    <p>Women</p>
                                    <a href='#home'>Tops</a>
                                    <a href='#home'>Khitwear</a>
                                    <a href='#home'>Coats & Jakets</a>
                                    <a href='#home'>Dresses</a>
                                    <a href='#home'>Skirts</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-hover">
                    <span>Pets</span>
                    <div className='fake-size'>
                        <div className="dropdown-content">
                            <div className='contant-rows'>
                                <div className='content-first-line'>
                                    <p>Women</p>
                                    <a href='#home'>Tops</a>
                                    <a href='#home'>Khitwear</a>
                                    <a href='#home'>Coats & Jakets</a>
                                    <a href='#home'>Dresses</a>
                                    <a href='#home'>Skirts</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-hover">
                    <span>Gift Cards</span>
                    <div className='fake-size'>
                        <div className="dropdown-content">
                            <div className='contant-rows'>
                                <div className='content-first-line'>
                                    <p>Women</p>
                                    <a href='#home'>Tops</a>
                                    <a href='#home'>Khitwear</a>
                                    <a href='#home'>Coats & Jakets</a>
                                    <a href='#home'>Dresses</a>
                                    <a href='#home'>Skirts</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-hover Sustainability-dropdown-content">
                    <span>Sustainability criteria &nbsp;<FontAwesomeIcon icon={faChevronDown}/></span>
                    <div className='fake-size'>
                    <div className="dropdown-content">
                            <div className='contant-rows'>
                                <div>
                                    <p className='sustainability-header'>Sustainability Ranking</p>
                                    <div className='content-first-line'>
                                    <div className='contant-rows'>
                                        <div>
                                            <img src={require('./Imgs/Icon - sustainability 1@2x.png')} alt='b'></img>
                                        </div>
                                        <div>
                                            <p>Good in Sustainability</p>
                                            <p>1-3 Sustainability icons</p>
                                        </div>
                                    </div>
                                    <div className='contant-rows'>
                                        <div>
                                            <img src={require('./Imgs/Icon - sustainability 1@2x.png')} alt='b'></img>
                                        </div>
                                        <div>
                                            <p>Great in Sustainability</p>
                                            <p>4-5 Sustainability icons</p>
                                        </div>
                                    </div>
                                    <div className='contant-rows'>
                                        <div>
                                            <img src={require('./Imgs/Icon - sustainability 1@2x.png')} alt='b'></img>
                                        </div>
                                        <div>
                                            <p>Excellent in Sustainability</p>
                                            <p>4-5 Sustainability icons</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className='vl'></div>
                                <div className='content-second-line'>
                                    <div>
                                        <p className='sustainability-header'>Sustainability Icons</p>
                                        <div className='sustainability-icons'>
                                            <div  className='contant-rows'>
                                                <div>
                                                <img src={require('./Imgs/Compostable@2x.png')} alt='b'></img>
                                                <p>Recycled</p>
                                                </div>
                                                <div>
                                                <img src={require('./Imgs/Compostable@2x.png')} alt='b'></img>
                                                <p>Vegan</p>
                                                </div>
                                                <div>
                                                <img src={require('./Imgs/Compostable@2x.png')} alt='b'></img>
                                                <p>Women owned</p>
                                                </div>
                                                <div>
                                                <img src={require('./Imgs/Compostable@2x.png')} alt='b'></img>
                                                <p>100% Organic</p>
                                                </div>
                                            </div>
                                            <div className='contant-rows'>
                                                <div>
                                                <img src={require('./Imgs/Compostable@2x.png')} alt='b'></img>
                                                <p>100% Natural</p>
                                                </div>
                                                <div>
                                                <img src={require('./Imgs/Compostable@2x.png')} alt='b'></img>
                                                <p>Biodegradable</p>
                                                </div>
                                                <div>
                                                <img src={require('./Imgs/Compostable@2x.png')} alt='b'></img>
                                                <p>Recycled content</p>
                                                </div>
                                                <div>
                                                <img src={require('./Imgs/Compostable@2x.png')} alt='b'></img>
                                                <p>Recycled content</p>
                                                </div>
                                            </div>
                                            <div className='contant-rows'>
                                                <div>
                                                <img src={require('./Imgs/Compostable@2x.png')} alt='b'></img>
                                                <p>Recycled content</p>
                                                </div>
                                                <div>
                                                <img src={require('./Imgs/Compostable@2x.png')} alt='b'></img>
                                                <p>Recycled content</p>
                                                </div>
                                                <div>
                                                <img src={require('./Imgs/Compostable@2x.png')} alt='b'></img>
                                                <p>Recycled content</p>
                                                </div>
                                                <div>
                                                <img src={require('./Imgs/Compostable@2x.png')} alt='b'></img>
                                                <p>Recycled content</p>
                                                </div>
                                            </div>         
                                        </div>
                                        <div className='section-header'>
                                            <a href='#home'> <span>See All</span> <FontAwesomeIcon icon={faAngleRight}/> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
      )
}
export default SearchSection