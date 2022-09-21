import React,{useState,useEffect} from 'react'
import{useParams} from "react-router-dom";
import axios from 'axios';
import parse from "html-react-parser"

function Productdetails() {
    const params=useParams();
    const [details,setDetails]=useState({});
  useEffect(()=>{
    axios({
        url:"https://nepaligardencms.creatudevelopers.com.np/api/v1/product/get/"+params.productSlug,
        method:"GET",
    }).then((response)=>{
        setDetails(response.data.data.product);
    })
  },[])
  return (
   <>
<img src={details.image}/>
<h4>{details.name}</h4>
<p><b>Rs.</b>{details.price}</p>
<p>{parse(details.detail?details.detail:"")}</p>
<p><b>Ingredients</b></p>
<p>{parse(details.ingredeints?details.ingredeints:"")}</p>



   </>
  )
}

export default Productdetails