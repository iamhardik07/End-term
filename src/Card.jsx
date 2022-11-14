import React from "react";
import { NavLink } from "react-router-dom";

function Card({ title, imgsrc }) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={imgsrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            
            <NavLink style={{color:"blue"}} to="/contact" className="btn btn-primary" >
              Get Quote
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
