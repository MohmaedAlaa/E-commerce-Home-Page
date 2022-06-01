import {BrowserRouter,Route} from 'react-router-dom';
import React, {Component , useRef} from 'react'
import './App.css'
// import FilterBar from './FilterBar'
import Navbar from './NavBar';
import SearchSection from './SearchSection';
import SalesSection from './SalesSection';
// import CookiesBar from './CookiesBar';
import TopRanked from './TopRanked';
import Categories from './Categories';
import OurCharities from './OurCharities';
import HowItWorks from './HowItWorks';
import BestSeller from './BestSeller';
import EmailSection from './EmailSection';
import Footer from './Footer';
import * as HomePageAPI from './HomePageAPI';
import App from './HomePageAPI';
import BestSellerSection from './BestSellerSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleRight,faCartShopping} from '@fortawesome/free-solid-svg-icons';
import TopRankedSection from './TopRankedSection';
import OurCharitiesSection from './OurCharitiesSection';
class MytreetyApp extends Component {
  state = {
    bestSellerProducts : [],
    ourCharitiesData : [],
    query : '',
    sidebarOpen: true,
      items: [
        {id: 1, title: 'item #1'},
        {id: 2, title: 'item #2'},
        {id: 3, title: 'item #3'},
        {id: 4, title: 'item #4'},
        {id: 5, title: 'item #5'}
      ],
  }
  searchedProductsFn = async(query) => {
    //make query clear before using it in the searching
    this.setState(() => ({
      query: query.replaceAll("^[ \"]+|[ \"]+$", "")
    }))
  }
  componentDidMount(){
    HomePageAPI.getAllBestSeller().then((bestSellerProducts)=>{
      this.setState(()=>({
       bestSellerProducts
      }))
    })
    HomePageAPI.getAllCharities().then((ourCharitiesData)=>{
      this.setState(()=>({
       ourCharitiesData
      }))
    })
  }
  style = {
    root: {
      position: "static",
      overflow: "visible"
    },
    sidebar: {
      position: "fixed",
      top:0,
      backgroundColor: 'white',
      width:'23em',
      height: '100%',
    },
    content: {
      position: "static",
      overflow: "visible",
    },
    overlay: {
      zIndex: 1,
      position: "fixed",
      visibility: "hidden",
      overflow: "visible",
    },
    dragHandle: {
      position: "static",
    }
  };
  render() {
    const {query,bestSellerProducts,ourCharitiesData,items} = this.state
    const {searchedProductsFn,style} = this
    return (

      <div className="app">
          <BrowserRouter>
          <Route exact path='/' render={()=> 
          <div>
            {/* <App></App> */}
            <Navbar></Navbar>

            <SearchSection query={query} searchedProductsFn={searchedProductsFn}></SearchSection>

            <SalesSection></SalesSection>

            <div className="section-header">
                <h1>Top Top Ranked Sustainable products</h1>
                <a href='#home'> <span>See All</span> <FontAwesomeIcon icon={faAngleRight}/> </a>
            </div>
            <TopRankedSection
            bestSellerProducts={bestSellerProducts}
            style={style}
            ></TopRankedSection>

            <Categories></Categories>

            <div className="section-header OurCharities-section-header">
                <h1>Our charities</h1>
                <a href='#home'> <span>See All</span> <FontAwesomeIcon icon={faAngleRight}/> </a>
            </div>
            <OurCharitiesSection
            ourCharitiesData={ourCharitiesData}
            items={items}
            ></OurCharitiesSection>

            {/* <HowItWorks></HowItWorks> */}

            <div className="section-header BestSeller-header">
              <h1>Best Seller</h1>
              <a href='#home'> <span>See All</span> <FontAwesomeIcon icon={faAngleRight}/> </a>
            </div>
            <BestSellerSection 
            bestSellerProducts={bestSellerProducts}
            style={style}
            ></BestSellerSection>
            <EmailSection></EmailSection>
            <Footer></Footer>
          </div>
          }
          />
          </BrowserRouter>
      </div>
    )
  }
}

export default MytreetyApp

