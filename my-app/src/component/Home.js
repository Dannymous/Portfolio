import React from "react";
import Lottie from "lottie-react";
import animationData from "../component/animation_lok7z0zq.json"

function Home() {
  return (
    <div className="hom" >
      <div className="container ">
        <div className="row">
          <div className="col-md-6">
          <Lottie animationData={animationData} />
          </div>
          <div className="col-md-6 mt-5">
          <div >
      <h6 style={{ fontFamily: "serif" }}>There is my Small Slogan.</h6>
      <h1 style={{ fontFamily: "sans-serif", fontWeight: "700" }}>
        WELCOME TO MY PORTFOLIO.
      </h1>
      <p>
        About Leaving The Spot To Meet My SELF At Higher Stage In Programing. To
       Meet  Same Like's Minds Of Mine,Working Together To Secure The
        FUTURE.
      </p>
      <div>
      <img src="https://scontent.flos3-1.fna.fbcdn.net/v/t1.6435-9/102766530_173517847460695_5103451504059565653_n.jpg?stp=c0.23.206.206a_dst-jpg_p206x206&_nc_cat=106&ccb=1-7&_nc_sid=c21ed2&_nc_eui2=AeFQTH6K0APRs8nOpVJ_5TKU3vTKr0VwM_7e9MqvRXAz_ukY8UfMTzQFqASnBjxXjj_OoXpYzN49temKT3p9a5Zy&_nc_ohc=758Ri4ylIZMAX_FWAFU&_nc_ht=scontent.flos3-1.fna&oh=00_AfCSY9w0n_r2wz-eGM_gvbGsba8rshM0mKkFaV13pcfeZA&oe=656DF88C" alt=""/>
      </div> 
      <button
        style={{
          backgroundColor: "red",
          color: "white",
          marginLeft: "10px",
          textAlign: "center",
        }}
      >
        {" "}
        WELCOME
      </button>
      <button
      >
        {" "}
        WELCOME
      </button>
      <br />
      </div>
         
          </div>
        </div>
      </div>
      
    
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-10 p-5">
        <span className="dot"></span> &nbsp;
        <span className="dot"></span>&nbsp;
        <span className="dot"></span>&nbsp;
        <span className="dot"></span>&nbsp;
      </div>
      </div>
      </div>
      
    </div>
  
  );
}

export default Home;
