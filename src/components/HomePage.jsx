import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const HomePage = () => {
  return (
    <div>
        <div className="row ">
            
            <div className='col-md-5 pt-5' >
                <figure>
                <img src="cosloimages/Come eliminare la plastica dalla cucina_ 9 idee per cambiare.jpg" alt="" height='710px'/>
                <figcaption>
                    <p>⎯ OUR PHILOSOPHY</p>
                    <h1>Quality selection meets affordability</h1>
                    <p>Quality meets convenience in our family-run grocery store, where every product is selected with care to enhance your shopping experience. Our commitment is to deliver fresh and affordable groceries that make your meals delightful. Each item reflects our dedication to quality and customer satisfaction, making your kitchen a hub of flavor and nutrition.</p>
                    <Link className=' text-white btn' to='shop' id='lo'>Visit our shop</Link>
                </figcaption>
                </figure>
            </div>
            <div className='col-md-2'>
            </div>
            
            <div className='col-md-4 pr'>
                <motion.div
                animate={{y:50}}
                transition={{type:"spring",bounce:5,repeat:Infinity,duration:3}}>
                    <img src="cosloimages/Screenshot_2026-03-20_141329-removebg-preview.png" alt=""  />
                           
                </motion.div>
                <br />
                <br />
                <br />
                <br />
                <br />

                <figure>
                    <figcaption>
                        
                        <p>Welcome to Coslo Grocery Store, your one-stop destination for fresh produce, quality groceries, and everyday essentials!</p>
                    </figcaption>
                <img src="cosloimages/What are good sources of plant-based protein_.jpg" alt="" height='700px'/>
                </figure>

            </div>
            
            
        </div>
        <br />
        <br />
       <div className='col-md-8'> 
            <h1>Offering products that reflect quality,
        affordability, and sustainability.</h1>
       </div>
        <div className="row p-5">
            <div className='col-md-3'>
                <figure>
                    <img src="cosloimages/harvesting.jpg" alt="" height='200px' width='200px'/>
                    <figcaption><h3>Farm</h3></figcaption>
                </figure>
            </div>

            <div className='col-md-3'>
                <figure>
                    <img src="cosloimages/transport.jpg" alt="" height='200px' width='200px'/>
                    <figcaption><h3>Transport</h3></figcaption>
                </figure>
            </div>

            <div className='col-md-3'>
                <figure>
                    <img src="cosloimages/display.jpg" alt="" height='200px' width='200px'/>
                    <figcaption><h3>Shelving</h3></figcaption>
                </figure>
            </div>

            <div className='col-md-3'>
                <figure>
                    <img src="cosloimages/customer.jpg" alt=""  height='200px' width='200px'/>
                    <figcaption><h3>Shopping</h3></figcaption>
                </figure>
            </div>
        </div>
    </div>
  )
}

export default HomePage