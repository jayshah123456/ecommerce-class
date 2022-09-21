import React ,{useState,useEffect}from 'react'
import Productcard from './Productcard'
import axios from 'axios'
function Productlist() {

    const[allproducts,setAllproducts]=useState([]);
 
 
    useEffect(()=>{
axios({
    url:"https://nepaligardencms.creatudevelopers.com.np/api/v1/product/get",method:"GET",
}).then((response)=>{
    setAllproducts(response.data.products.data)
  
})
    },[])
   
  return (
  <>
   
 <div className='row'>

{allproducts.map((product,index)=>(
      <div className='col-3' key={index}>
      <Productcard data ={product}/>
      
      </div>
))}


 </div>
  </>
  )
}

export default Productlist