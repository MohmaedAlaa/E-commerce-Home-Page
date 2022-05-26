import {BrowserRouter,Route} from 'react-router-dom';
import React, {Component} from 'react'
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


class BooksApp extends Component {
  state = {
    bestSellerProducts : [],
    query : '',
    searchedBooks : [],
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
  }
  render() {
    const {query,bestSellerProducts} = this.state
    return (
      <div className="app">
          <BrowserRouter>
          <Route exact path='/' render={()=> 
          <div>
            <Navbar></Navbar>
            <SearchSection query={query} searchedProductsFn={this.searchedProductsFn}></SearchSection>
            <SalesSection></SalesSection>
            <TopRanked></TopRanked>
            <Categories></Categories>
            <OurCharities></OurCharities>
            <HowItWorks></HowItWorks>
            <BestSeller bestSellerProducts={bestSellerProducts}></BestSeller>
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

export default BooksApp

