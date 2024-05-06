import React from "react";
import Navbar from "./components/navbar";
import HomePage from "./components/Home";
import Mission from "./components/mission";
import AboutUs from "./components/aboutus";
import ReasonsToChooseMela from "./components/choosemela";
import OurSchools from "./components/ourschools";
import Offer from "./components/offer";
import Future from "./components/future";
import Footer from "./components/footer";
import EnrollForm from "./components/enrolldisplay";
// import AdmissionForm from "./components/admission";
// import Kindergarten from "./components/kindergarten";
// import PreparatorySchool from "./components/preparatory";
// import JuniorHighSchool from "./components/juniorhighschool";
// import SeniorHighSchool from "./components/seniorhighschool";
// import FeeStructure from "./components/feestructure";
// import EnrollmentForm from "./components/enrollnow";
// import SignUpAdmin from "./components/signup";
// import SigninPage from "./components/signin";
// import DisplayApplicants from "./components/display";

function App(){
  return (
    <div>
     <Navbar/> 
     <HomePage/>
     <Mission/>
     <AboutUs/>
     <ReasonsToChooseMela/>
     <OurSchools/>
     <Offer/>
     <Future/>
     <Footer/>
     {/* <AdmissionForm/>
     <Kindergarten/>
     <PreparatorySchool/>
     <JuniorHighSchool/>
     <SeniorHighSchool/>
     <FeeStructure/>
     <EnrollmentForm/>
     <SignUpAdmin/>
     <SigninPage/>
     <DisplayApplicants/> */}
     <EnrollForm/>

     

     
     

    </div>
  );
};

export default App;