import { FaApple } from "react-icons/fa";
import { FaAtlassian } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa";
import { FaBity } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaHandPointUp } from "react-icons/fa";
import { FaDiceFour } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { FaMarsDouble } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";

function Contact() {
  return (
    <div>
      <div className=" text-center shadow bg-body-rounded reg container">
        <div className="col-md-6">
          <div className=" row row-cols-1 text-center shadow  bg-body-rounded reg">
            <div className="hom2 flex">
              <div className="dod">
                AM <br />
                ELIYAS
                <br />
                DANIEL
                <br />
                <FaDiceFour />
              </div>
              <div>
                <h3 style={{ fontWeight: "700" }}>$100/-</h3>
                <spa
                  style={{ backgroundColor: "black", borderRadius: "100px" }}
                >
                  {" "}
                  <FaApple />
                </spa>{" "}
                &nbsp; <FaAtlassian /> &nbsp;
                <FaBitcoin /> &nbsp; <FaBity />
              </div>
              <br />
              {/* .......... */}
            </div>
            <h6 style={{ fontWeight: "700" }}>
              <FaUserTie /> Name:ELIYAS DANIEL OLUWAFEMI
            </h6>
            <h6 style={{ fontWeight: "700" }}>
              <FaMarsDouble /> Job:FULL STACK Web-Developer
            </h6>
            <p>[HTML,CSS,REACT AND NODE.JS]</p>
            <h6 style={{ fontWeight: "700" }}>
              <FaUsers /> Contact:09070551310
            </h6>
            <h6 style={{ fontWeight: "700" }}>
              <FaAndroid /> Facebook:Eliyas Daniel
            </h6>
          </div>
        </div>
      </div>
      <br />
      {/* ........... */}
      <div className="hom2 flex">
        <div style={{ fontWeight: "700", fontFamily: "bold" }}>
          <span style={{ backgroundColor: "red" }}>
            <FaStar /> &nbsp;
            <FaStar />
            &nbsp;
            <FaStar />
            &nbsp;
            <FaStar />
            &nbsp;
            <FaStar />
          </span>
          <h3>
            STANDARDIZED
            <br />
            PROJECT OUTCOME
          </h3>
        </div>

        <div>
          <span className="do">
            Always
            <br />
            99%
            <br />
            <span style={{ textDecoration: "line-through" }}> Active</span>
          </span>
          <sup>
            {" "}
            <span className="dod" style={{ marginTop: "50px", color: "red" }}>
              <h5>
                GET
                <br />
                IT
                <br />
                DONE
              </h5>
              <FaHandPointUp />
            </span>
          </sup>
        </div>
        {/* ...... */}

        <div className="hom2 flex">
          <div className="dod">
            ELIYAS
            <br />
            DANIEL
            <br />
            <FaDiceFour />
          </div>
          <div>
            <h3 style={{ fontWeight: "700"  }}>$99/-</h3>
            <spa style={{ backgroundColor: "black", borderRadius: "100px" }}>
              {" "}
              <FaApple />
            </spa>{" "}
            &nbsp; <FaAtlassian /> &nbsp;
            <FaBitcoin /> &nbsp; <FaBity />
          </div>
          <br />
          {/* .......... */}
        </div>
      </div>
      {/* ...... */}
    </div>
  );
}

export default Contact;
