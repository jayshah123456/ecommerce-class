import React from 'react'
import {Link} from "react-router-dom"
function Productcard(props) {
  return (
   
    <>
          <div className="card" style={{width: '18rem'}}>
        <img src={props.data.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.data.name}</h5>
          <p className="card-text">Rs.{props.data.price}</p>
          <Link to ={"/product_details/"+props.data.slug} className="btn btn-primary">view details</Link>
        </div>
      </div>
    </>
  )
}

export default Productcard