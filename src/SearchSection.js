import React from 'react'
// import {useState} from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping , faChevronDown ,faClockRotateLeft ,faMagnifyingGlass ,faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';

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
            <img src={require('./Imgs/b@2x.png')} alt='b'></img>
                <div>
                    {/* catch the query and pass it to the searchedBooksFn to search for the books by it */}
                    <div className="search-bar">
                        <input type="text"
                        placeholder=" Search all products or categories" 
                        className="search-input"
                        value={query}
                        onChange={(event) => searchedProductsFn(event.target.value)}
                        />
                        <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass}/>
                    </div>
    
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
                <div>
                <DropdownButton
                    title=" All "
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
                <FontAwesomeIcon className='shopping-icon' icon={faCartShopping}/>
                <FontAwesomeIcon className='favorite-icon' icon={faHeart}/>  
                <FontAwesomeIcon className='profile-icon' icon={faUser}/>    
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
                <div className="dropdown dropdown-hover">
                    <span>Sustainability criteria &nbsp;<FontAwesomeIcon icon={faChevronDown}/></span>
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
            </div>
        </div>    
      )
}
export default SearchSection