import React from 'react'
import Navbar from './navbar'

const Header = () => {
  return (
    <div className='banner'>
        <Navbar/>
        <div className='banner_content'>
            <div className='container'>
              <div className='banner_text'>  
              <h1>Delicious & Tasty food</h1>
               <h4>Buffet Breakfast | Lunch | Banquet Hall Available</h4><br></br>
               <p> We Serve the Best food</p>
              < div className="banner__btn">
              <a href="" className="btn btn-smart">
                ORDER NOW
              </a>
            </div>
               </div> 
               
            </div>
        </div>
        </div>
  )
}

export default Header