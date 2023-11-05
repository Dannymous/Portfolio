import React from "react";
import { FaRegAddressBook } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaMarsDouble } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaAlignRight } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaVoteYea } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

function About() {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md mt-5 g-4 text-center">
        <div className="row">
          <div className="col-md-4">
            <h3
              style={{
                color: "black",
                fontFamily: "sans-serif",
                fontWeight: "700",
                marginTop: "-50px",
              }}
            >
              {" "}
              <span
                style={{ textDecoration: "line-through", color: "red" }}
              ></span>
              <br />
              <FaVoteYea /> &nbsp;FULL STACK <br/> Web-Developer{" "}
            </h3>
          </div>

          <div className="col-md-4">
            {" "}
            <button type="button" className="btn btn-warning" id="vertical">
              HIRE ME
            </button>
          </div>

          <div className="col-md-4">
            <span
              style={{
                fontWeight: "bolder",
                fontFamily: "serif",
                fontSize: "xxx-large",
                paddingLeft: "40px",
              }}
            >
              1 +
            </span>{" "}
            &nbsp;
            <span style={{ fontWeight: "bolder", fontFamily: "serif" }}>
              {" "}
              YEAR Experiances In Web Development
            </span>
            <br />
            <span style={{ fontWeight: "bolder", fontFamily: "serif" }}>
              {" "}
              Project Completed In My Carrier
            </span>
            &nbsp;
            <span
              style={{
                fontWeight: "bolder",
                fontFamily: "serif",
                fontSize: "xxx-large",
                color: "red",
              }}
            >
              {" "}
              &nbsp;6 +
            </span>
          </div>
        </div>
      </div>
      <hr />
      {/* ............. */}

      <h2
        style={{
          paddingTop: "40px",
          textAlign: "center",
          fontWeight: "700",
          paddingBottom: "20px",
        }}
      >
        Project Completed
      </h2>
      <p style={{ textAlign: "center" }}>
        All Project Are Execute And Completed By ME.
      </p>
      <div class="row row-cols-1 text-center shadow  bg-body-rounded reg  ">
        <h5>
          {" "}
          <span style={{ color: "red" }}>
            HTML5,CSS,JAVASCRIPT,REACT AND NODE.JS
          </span>
        </h5>
        <div className="container p-5">
          <div className="row">
            <div className="col-md-6">
              <div>
                <img
                  src="https://th.bing.com/th/id/OIP.o_FT1xPalINKatX474oWVgHaEK?pid=ImgDet&rs=1"
                  class="card-img-top"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <div class="card h-100">
                  <div class="card-body  shadow  bg-body-rounded reg">
                    <h5 class="card-title" style={{ fontWeight: "700" }}>
                      {" "}
                      <span style={{ fontWeight: "bolder", color: "black" }}>
                        App/Web
                      </span>
                      <br />
                      Mini TO-DO-LIST.
                    </h5>
                    <h6 style={{ textDecoration: "line-through" }}>
                      TO-DO-LIST
                    </h6>
                    <br />
                    <p
                      class="card-text"
                      style={{ marginLeft: "10px", marginRight: "10px" }}
                    >
                      A Mini To-Do-List App.
                      <br />
                      Where You Can Upload A Task,Edit Task And Delete Task.
                      <br />
                      With Time And Date.
                      <br />
                      Responsive To All Kind's Of Screen.
                    </p>
                    <br />
                    <p
                      className=""
                      style={{
                        color: "black",
                        fontWeight: "bolder",
                        paddingTop: "11%",
                      }}
                    >
                      <h6>HTML5,CSS AND JAVASCRIPT.</h6>
                      Rating:
                      <span style={{ color: "black" }}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                      </span>
                    </p>
                    <h5
                      class="card-title"
                      style={{
                        fontFamily: "sans-serif",
                        fontWeight: "bolder",
                        marginLeft: "5%",
                      }}
                    >
                      <a
                        href="https://todo-2rf6.onrender.com/ho"
                        target="_blank"
                        className="btn btn-primary"
                      >
                        VIEW
                      </a>
                    </h5>

                    {/* <video width={'100%'} src={vedio1} controls type='vedio/ogg'></video> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="container p-5">
        <div className="row row-cols-1 text-center shadow  bg-body-rounded reg ">
          <div className="col-md-6">
            <div>
              <img
                src="https://th.bing.com/th/id/R.e769c22cbf0cc58302af155dd2bf367a?rik=b5b%2fOtHY0VvbWA&pid=ImgRaw&r=0"
                class="card-img-top"
                alt="..."
              />
            </div>
          </div>
          <div className="col-md-6">
            <div class="card h-100">
              <div class="card-body  shadow  bg-body-rounded reg">
                <h5 class="card-title" style={{ fontWeight: "700" }}>
                  {" "}
                  <span style={{ fontWeight: "bolder", color: "black" }}>
                    App/Web
                  </span>
                  <br />
                  Mini Stundent Votting Platform.
                </h5>
                <h6 style={{ textDecoration: "line-through" }}>
                  VOTTING PLATFORM
                </h6>
                <br />
                <p
                  class="card-text"
                  style={{ marginLeft: "10px", marginRight: "10px" }}
                >
                  A Mini Mini Stundent Votting Platform App.
                  <br />
                  Where All Stundent Can Cast Each Of Their Vote By Inputing
                  Their Details.And Access To LOG Out Of The Platform ,When Done
                  With The Tasks.Responsive To All Kind's Of Screen
                  <br />
                  With Time And Date.
                  <br />
                  Responsive To All Kind's Of Screen.
                </p>
                <br />
                <p
                  className=""
                  style={{
                    color: "black",
                    fontWeight: "bolder",
                    paddingTop: "11%",
                  }}
                >
                  <h6>HTML5,CSS,React And Node.js.</h6>
                  Rating:
                  <span style={{ color: "black" }}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </span>
                </p>
                <h5
                  class="card-title"
                  style={{
                    fontFamily: "sans-serif",
                    fontWeight: "bolder",
                    marginLeft: "5%",
                  }}
                >
                  <a
                    href="https://todo-2rf6.onrender.com/ho"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    VIEW
                  </a>
                </h5>

                {/* <video width={'100%'} src={vedio1} controls type='vedio/ogg'></video> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="container p-5">
        <div className="row row-cols-1 text-center shadow  bg-body-rounded reg ">
          <div className="col-md-6">
            <div>
              <img
                style={{ width: "50%" }}
                src="https://th.bing.com/th/id/R.05a967537164dbe776a0f0334dc63584?rik=l5hVTBWCjGWx%2bw&pid=ImgRaw&r=0"
                class="card-img-top"
                alt="..."
              />
            </div>
          </div>
          <div className="col-md-6">
            <div class="card h-100">
              <div class="card-body  shadow  bg-body-rounded reg">
                <h5 class="card-title" style={{ fontWeight: "700" }}>
                  <span style={{ fontWeight: "bolder", color: "black" }}>
                    App/Web
                  </span>
                  <br />
                  React Hotel Templete
                </h5>
                <h6 style={{ textDecoration: "line-through" }}>
                  HOTEL TEMPLETE
                </h6>
                <br />
                <p
                  class="card-text"
                  style={{ marginLeft: "10px", marginRight: "10px" }}
                >
                  A Mini React Hotel Templete App.
                  <br />
                  Responsive To All Kind's Of Screen.
                </p>
                <br />
                <p
                  className=""
                  style={{
                    color: "black",
                    fontWeight: "bolder",
                    paddingTop: "11%",
                  }}
                >
                  <h6>HTML5,CSS AND REACT.</h6>
                  Rating:
                  <span style={{ color: "black" }}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </span>
                </p>
                <h5
                  class="card-title"
                  style={{
                    fontFamily: "sans-serif",
                    fontWeight: "bolder",
                    marginLeft: "5%",
                  }}
                >
                  <a
                    href="https://hotel-demo-six.vercel.app/"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    VIEW
                  </a>
                </h5>

                {/* <video width={'100%'} src={vedio1} controls type='vedio/ogg'></video> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="container p-5">
        <div className="row  row-cols-1 text-center shadow  bg-body-rounded reg ">
          <div className="col-md-6">
            <div>
              <img
                style={{ width: "" }}
                src="https://th.bing.com/th/id/OIP.fD2aFK8tA2R7TDOyOUqsmAAAAA?pid=ImgDet&rs=1"
                class="card-img-top"
                alt="..."
              />
            </div>
          </div>
          <div className="col-md-6">
            <div class="card h-100">
              <div class="card-body  shadow  bg-body-rounded reg">
                <h5 class="card-title" style={{ fontWeight: "700" }}>
                  <span style={{ fontWeight: "bolder", color: "black" }}>
                    App/Web
                  </span>
                  <br />
                  Mini Movie Blog
                </h5>
                <h6 style={{ textDecoration: "line-through" }}>MOVIE BLOG</h6>
                <br />
                <p
                  class="card-text"
                  style={{ marginLeft: "10px", marginRight: "10px" }}
                >
                  A Mini Movie Blog App.
                  <br />
                  Where Vedioes Can Be Access By Wacthing
                  <br />
                  Also Advertise With The Platform/Blog.
                  <br />
                  Responsive To All Kind's Of Screen.
                </p>
                <br />
                <p
                  className=""
                  style={{
                    color: "black",
                    fontWeight: "bolder",
                    paddingTop: "11%",
                  }}
                >
                  <h6>HTML5,CSS, REACT AND CLOUDINARY STORAGE.</h6>
                  Rating:
                  <span style={{ color: "black" }}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </span>
                </p>
                <h5
                  class="card-title"
                  style={{
                    fontFamily: "sans-serif",
                    fontWeight: "bolder",
                    marginLeft: "5%",
                  }}
                >
                  <a
                    href="https://react-project-wrr2.vercel.app/"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    VIEW
                  </a>
                </h5>

                {/* <video width={'100%'} src={vedio1} controls type='vedio/ogg'></video> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* .... */}
      <div className="container p-5">
        <div className="row  row-cols-1 text-center shadow  bg-body-rounded reg ">
          <div className="col-md-6">
            <div>
              <img
                style={{ width: "" }}
                src="https://th.bing.com/th/id/OIP.1ZHiOe8g1K3DmvwnsJHfHAHaDa?pid=ImgDet&rs=1"
                class="card-img-top"
                alt="..."
              />
            </div>
          </div>
          <div className="col-md-6">
            <div class="card h-100">
              <div class="card-body  shadow  bg-body-rounded reg">
                <h5 class="card-title" style={{ fontWeight: "700" }}>
                  {" "}
                  <span style={{ fontWeight: "bolder", color: "black" }}>
                    App/Web
                  </span>
                  <br />
                  Mini Portfolio App
                </h5>
                <h6 style={{ textDecoration: "line-through" }}>
                  PORTFOLIO APP
                </h6>
                <br />
                <p
                  class="card-text"
                  style={{ marginLeft: "10px", marginRight: "10px" }}
                >
                  A Mini Portfolio App.
                  <br />
                  Where All My Other Project Can Be Access
                  <br />
                  Including My Bio.
                  <br />
                  Responsive To All Kind's Of Screen.
                </p>
                <br />
                <p
                  className=""
                  style={{
                    color: "black",
                    fontWeight: "bolder",
                    paddingTop: "11%",
                  }}
                >
                  <h6>HTML5,CSS AND REACT.</h6>
                  Rating:
                  <span style={{ color: "black" }}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </span>
                </p>
                <h5
                  class="card-title"
                  style={{
                    fontFamily: "sans-serif",
                    fontWeight: "bolder",
                    marginLeft: "5%",
                  }}
                >
                  <a href="" className="btn btn-primary">
                    VIEW
                  </a>
                </h5>

                {/* <video width={'100%'} src={vedio1} controls type='vedio/ogg'></video> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
