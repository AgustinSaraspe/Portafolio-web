import React from "react";
import Articles from "./Articles";
import Contact from "./Contact";
import Faq from "./Faq";
import Footer from "./Footer";
import Hero from "./Hero";
import "./HomeStyles.css";
import Information from "./Information";
import Navbar from "./Navbar";

const Home = () =>{
    return(
       <div>
          <Navbar/>
          <Hero/>
          <Information/>
          <Articles/>
          <Faq/>
          <Contact/>
          <Footer/>
       </div>
    );
};

export default Home