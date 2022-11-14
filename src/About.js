import React from "react";
import Common from "./Common";
import web from "../src/Pictures/img3.png";

function About() {
  return (
    <>
        
      <Common
        name="Welcome to the world of"
        imgsrc={web}
        visit="/contact"
        btname="Contact Us"
      />
      {/* <div className="abt">
      <h3>
         Tattoos worldz has been in this line past 7 years and has more than 250+ happy customers not only in India but around the globe with 500+ small tattoo projects and 15 full body tattoos.
         Have specialist in tattoo on sensitive areas and also in hiding scars or stretch marks. 
         Tattoos Worldz have 2 brances one in Delhi and other in Chandigarh and are going to open 2 more one in mumbai and other in bangalore. 

     </h3>
      </div> */}
    </>
    
  );
  
}

export default About;
