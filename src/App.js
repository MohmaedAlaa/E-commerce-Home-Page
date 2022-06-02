import {BrowserRouter,Route} from 'react-router-dom';
import React, {Component} from 'react'
import './App.css'
// import FilterBar from './FilterBar'
import Navbar from './NavBar';
import SearchSection from './SearchSection';
import SalesSection from './SalesSection';
// import CookiesBar from './CookiesBar';
import Categories from './Categories';
import HowItWorks from './HowItWorks';
import EmailSection from './EmailSection';
import Footer from './Footer';
import * as HomePageAPI from './HomePageAPI';
import BestSellerSection from './BestSellerSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import TopRankedSection from './TopRankedSection';
import OurCharitiesSection from './OurCharitiesSection';

class MytreetyApp extends Component {
  state = {
    bestSellerProducts : [],
    ourCharitiesDataPageOne : [],
    ourCharitiesDataPageTwo : [],
    query : '',
    sidebarOpen: true,
    email: ''
  }
  searchedProductsFn = async(query) => {
    // make query clear before using it in the searching
    this.setState(() => ({
      query: query.replaceAll("^[ \"]+|[ \"]+$", "")
    }))
  }
  emailFn = async(email) => {
    //make mail clear before using it in the searching
    this.setState(() => ({
      email: email.replaceAll("^[ \"]+|[ \"]+$", "")
    }))
  }
  sendEmailFn = async(email) => {
    // if(email){
    //   HomePageAPI.postSubscribe(email)
    //   console.log(email)
    // }
    // else{
    //   HomePageAPI.postSubscribe('There is an error')
    //   console.log('There is an error')
    // }
    try {
      HomePageAPI.postSubscribe(email)
      console.log(email)
    }
    catch(err) {
      HomePageAPI.postSubscribe(err)
      console.log(err)
    }
  }
  componentDidMount(){
    HomePageAPI.getAllBestSeller().then((bestSellerProducts)=>{
      this.setState(()=>({
       bestSellerProducts
      }))
    })
    HomePageAPI.getAllCharitiesPageOne().then((ourCharitiesDataPageOne)=>{
      this.setState(()=>({
       ourCharitiesDataPageOne
      }))
    })
    HomePageAPI.getAllCharitiesPageTwo().then((ourCharitiesDataPageTwo )=>{
      this.setState(()=>({
       ourCharitiesDataPageTwo 
      }))
    })
    HomePageAPI.getAllCharitiesPageTwo().then((ourCharitiesDataPageTwo )=>{
      this.setState(()=>({
       ourCharitiesDataPageTwo 
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
    const {query,bestSellerProducts,ourCharitiesDataPageOne,ourCharitiesDataPageTwo,email} = this.state
    const {searchedProductsFn,emailFn,sendEmailFn,style} = this
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
                <h1>Top Ranked Sustainable products</h1>
                <a href='#home'> <span>See All</span> <FontAwesomeIcon icon={faAngleRight}/> </a>
            </div>
            <TopRankedSection
            bestSellerProducts={bestSellerProducts}
            style={style}
            ></TopRankedSection>

            <Categories></Categories>

            <div className="section-header OurCharities-section-header">
                <h1>Our Charities</h1>
                <a href='#home'> <span>See All</span> <FontAwesomeIcon icon={faAngleRight}/> </a>
            </div>
            <OurCharitiesSection
            ourCharitiesDataPageOne={ourCharitiesDataPageOne}
            ourCharitiesDataPageTwo ={ourCharitiesDataPageTwo }
            ></OurCharitiesSection>

            <HowItWorks></HowItWorks>

            <div className="section-header BestSeller-section-header">
              <h1>Best Seller</h1>
              <a href='#home'> <span>See All</span> <FontAwesomeIcon icon={faAngleRight}/> </a>
            </div>
            <BestSellerSection 
            bestSellerProducts={bestSellerProducts}
            style={style}
            ></BestSellerSection>

            <EmailSection 
            email={email}
            emailFn={emailFn}
            sendEmailFn={sendEmailFn}
            ></EmailSection>

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

