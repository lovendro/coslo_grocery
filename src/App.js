
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import AvailableProducts from './components/AvailableProducts';
import SignUp from './components/SignUp';
import SingIn from './components/SingIn';
import AddProducts from './components/AddProducts';
import MpesaPayments from './components/MpesaPayments';
import CartProducts from './components/CartProducts';
import {FaShoppingCart,FaPaperPlane,FaClock,FaTruck} from "react-icons/fa"
import HomePage from './components/HomePage';
import BelowHundred from './components/BelowHundred';
import BelowPunch from './components/BelowPunch';
import BelowThao from './components/BelowThao';
import BelowTwok from './components/BelowTwok';
import BelowThreek from './components/BelowThreek';
import BelowFourk from './components/BelowFourk';
import BelowFivek from './components/BelowFivek';
import {MdEmail,MdPhone} from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6'; 







function App() {
  
  return (
    <Router>
    <div className="App">
      
       <section className="row fixed-top " >
        <div className="col-md-12" >
            <nav className="navbar bg-white navbar-light navbar-expand-md " >
                  <Link class="navbar-brand" to='/'><img src="cosloimages/Screenshot_2026-03-20_141329-removebg-preview.png" alt="" width='100px'/></Link>
                <button
                className="navbar-toggler btn bg-white"
                data-bs-toggle="collapse"
                data-bs-target="#navbarcollapse"
                >
                    <span className="navbar-toggler-icon "></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarcollapse">
                    <div className="navbar-nav">
                      <Link className='nav-link display-3'to='/' id='home'><b>Home</b></Link>
                      <Link className='nav-link p'to='/shop'>Shop</Link>
                      <Link className='nav-link  p'to='/signup'>signup</Link>
                      <Link className='nav-link p'to='/signin' >Signin</Link>
                      <Link className='nav-link p'to='/addproducts'>Add products</Link>
                      <div className='nav-item dropdown'>
                        <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pricing range</Link>
                        <div className='dropdown-menu'>
              
                          <Link className='dropdown-item nav-link ' id='ho' to='/saw'>Below 100</Link>
                          <Link className='dropdown-item nav-link ' id='ho' to='/punch'>Below 500</Link>
                          <Link className='dropdown-item nav-link ' id='ho' to='/thao'>Below 1000</Link>
                          <Link className='dropdown-item nav-link ' id='ho' to='/twk'>Below 2000</Link>
                          <Link className='dropdown-item nav-link ' id='ho' to='/trk'>Below 3000</Link>
                          <Link className='dropdown-item nav-link ' id='ho' to='/frk'>Below 4000</Link>
                          <Link className='dropdown-item nav-link ' id='ho' to='/fvk'>Below 5000</Link>

                        </div>
                        
                      </div>
                      
                                
                      
                    </div> 
                    
                    
                      <div className=' navbar-nav ms-auto cart'>
                      <Link className='nav-link nav-item  'to='/cart'  ><FaShoppingCart/></Link>
                      </div>
                     
                </div>
                 
            </nav>
                      
            
        </div>
<header id='navbar'></header>
     </section>
     <br /><br /><br />
     
     <header className="App-header ">
        <h1 className='text-white display-1'>Coslo Groceries</h1>
      </header>

      
      
     
       <Routes>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/signin' element={<SingIn/>}/>
          <Route path='/shop' element={<AvailableProducts/>}/>
          <Route path='/addproducts'element={<AddProducts/>}/>
          <Route path='/mpesa' element={<MpesaPayments/>}/>
          <Route path='/cart' element={<CartProducts/>}/>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/saw' element={<BelowHundred/>}/>
          <Route path='/punch' element={<BelowPunch/>}/>
          <Route path='/thao' element={<BelowThao/>}/>
          <Route path='/twk' element={<BelowTwok/>}/>
          <Route path='/trk' element={<BelowThreek/>}/>
          <Route path='/frk' element={<BelowFourk/>}/>
          <Route path='/fvk' element={<BelowFivek/>}/>
      </Routes>
         <br />
         <br />
         <br />
      <div className="row p-3">
        <div className='col-md-3 text-start '>
            <h1>About us</h1>
            <div className='card shadow'></div>
            <br />
            <p>We are located at Sarit center at the expo centre</p>
            
            <p>Our produce is fresh and directly from the farm with no processing as it prefered- farm to table</p>
            <h4>For more information you can reach us on:</h4>
            <p><MdEmail size={20}/> coslo@gmail.com</p>
            <p><MdPhone size={20}/> +254796569447</p>


        </div>

         <div className='col-md-4 text-start'>
          <h1>Customer Benefits</h1>
          <div className='card shadow'></div>
          <br />
          <p><FaTruck size={30}/> Fast delivery: Get your groceries delivered quickly.</p>
          
          <p><FaLocationDot size={30}/> Order Tracking: Track your grocery delivery in real-time, anytime.</p>
          <p><FaPaperPlane size={30}/> Free deliveries on orders above Ksh.2000</p>
          <p><FaClock size={30}/> Open 24Hrs for your convinience</p>


        </div>

        <div className='col-md-5'>
          <h1>Stay connected on socials</h1>
          <div className='card shadow'></div>
          <br />
          <div className='row'>
          <div className='col-md-2 pt-1'>
            
              <a href="https://www.instagram.com/?hl=en"> <img src="cosloimages/Instagram_Logo-removebg-preview.png" alt="" height='72px' /></a>

          

          </div>
           
            <div className='col-md-2 pt-2'>
              <a href="https://www.facebook.com/"> <img src="cosloimages/Facebook_Logo_Icon_Vector___Transparent_PNG-removebg-preview.png" alt="" height='55px' /></a>
              </div>

            

          
           <div className='col-md-2 pt-2'>
            
              <a href="https://x.com/"> <img src="cosloimages/X_Logo__Twitter___01_-removebg-preview.png" alt="" height='60px' /></a>

            

          </div>
          </div>

        </div>

      </div>
      <div className='row' id='foot'>
      <footer >
        <p>Developed by Paul &copy;Coslo Groceries 2026  All rights observed</p>
      </footer>
      </div>
    </div>
    </Router>
  );
}

export default App;
