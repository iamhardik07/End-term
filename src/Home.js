import React from "react";
import Common from "./Common";
import web from "../src/Pictures/img2.png";

function Home() {
  return (
    <>
      <Common
        name="Get Your Dream Tattoo With"
        imgsrc={web}
        visit="/service"
        btname="Ready for tattoo"
      />
    </>
  );
}

export default Home;
