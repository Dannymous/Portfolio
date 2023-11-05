
import {  BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from "./component/Home";
import About from "./component/About";
import Header from "./inc/Header";
import "./component/style.css"
import Contact from "./component/Contact";
import Page from "./component/Page";







function App() {
  return (
   <BrowserRouter>
      <div>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="*" element={<Page/>}/>
      </Routes>
    
      
      </div>
      </BrowserRouter>
    
       
  );
}

export default App;