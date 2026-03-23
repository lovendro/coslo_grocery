import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {FaSearch} from 'react-icons/fa';
import { motion} from 'framer-motion'




const SearchComponents=()=>{
 
  const[loading,setLoading]=useState("")
  const[error,setError]=useState(false)
  const[products,setProducts]=useState([])
  const image_url="http://lovendro.alwaysdata.net/static/images/"
  const navigate=useNavigate()
  const[search,setSearch]=useState("")
  
  
  
 

   const fetchproducts=async(e)=>{
    e.preventDefault();
    

      setLoading("please wait as we retrieve your products...")
    try {
    const data=new FormData()
    data.append("product_name",search)

    const response=await axios.get("http://lovendro.alwaysdata.net/api/getproductsdetails",data)
    setLoading("");
    if (response.data && response.data.length >0) {
      
     const filteredProducts=response.data.filter((products)=>{return products.product_name.toLowerCase().includes(search.toLowerCase())});

      if(filteredProducts.length >0) {
        setProducts(filteredProducts)
        
        
      } 
      else {
    
        
                    setError("No matching product found")
                    setTimeout(() => {
                        setError("")
                        
                    }, 2000);

        
      }
      
      

      
    } else {
      
      
        setError("Product not found")
        
    
      
    }
        
      
      
    } catch (error) {
      
      setLoading("")
      
        setError(error.message)
      
      
    }
  }



 

  // END OF FUNCTION WHERE WE CALL USEEffect
  
  return (
    <div className='row justify-content-center'>
      

          <form className=" col-md-4 " onSubmit={fetchproducts}>
            <div className="input-group ">
            <input type="text"
            className="form-control   input" placeholder="Type to search" required value={search} onChange={(e)=>setSearch(e.target.value) }   />
            <button type="submit"
            className="btn btn-secondary "
            >
            <FaSearch/>
            </button>
            </div>          
          </form>
      
              <p className='text-warning'>{loading}</p>
              <motion.p
               className='text-danger'
               
               animate={{y:2}}
               transition={{type:"spring",bounce:5,repeat:Infinity,duration:3}}
               


              >{error}</motion.p>
      
              
              
              
              <br />
              <br />
              {/* calling.map to iterate through each item */}
               {products.map((product)=>(
              
              <div className='col-md-3 justify-content-centre'>
                <div className='card shadow m-4'>
                  <img src={image_url + product.product_photo} alt="shoe" className='product_img'/>
                  <div className='card-body'>
                    <h5 className='text-success'>{product.product_name}</h5>
                    <p className='text-dark'>{product.product_description}</p>
                    <p className='text-secondary'>{product.product_cost}</p>
                    <input type="button" className='btn btn-secondary w-100' value='Purchase now' onClick={()=>navigate("/mpesa",{state:{product}})}/>
      
                  </div>
      
                </div>
      
              </div>
              ))}
             
      
    </div>
  )}


export default SearchComponents
