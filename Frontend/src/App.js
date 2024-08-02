import React from "react";
import HomePage from "./components/Home";
import Mission from "./components/mission";
import AboutUs from "./components/aboutus";
import ReasonsToChooseMela from "./components/choosemela";
import OurSchools from "./components/ourschools";
import Offer from "./components/offer";
import Future from "./components/future";

function App(){
  return (
    <div>
     <HomePage/>
     <Mission/>
     <AboutUs/>
     <OurSchools/>
     <Offer/>
     <ReasonsToChooseMela/>
     <Future/>
    </div>
  );
};

export default App;