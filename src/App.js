import React from "react";
import {Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import ArticlesR from "./routes/ArticlesR";
import ContactR from "./routes/ContactR";
import FaqR from "./routes/FaqR";
import InformationR from "./routes/InformationR";

function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/information" element={<InformationR/>}/>
        <Route path="/articles" element={<ArticlesR/>}/>
        <Route path="/faq" element={<FaqR/>}/>
        <Route path="/contact" element={<ContactR/>}/>
        <Route path="/*" element={<ContactR/>}/>
     </Routes>
    </>
  );
}

export default App;