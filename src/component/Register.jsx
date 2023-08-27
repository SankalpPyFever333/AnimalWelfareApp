import React, { useState } from "react";
import app from "./firebase";
import { RecaptchaVerifier, signInWithPhoneNumber} from "firebase/auth";
// import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "./Register.css"
import { Link, Route } from "react-router-dom";
import authentication from "../component/firebase";
import Verifyotp from "./Verifyotp";
// import { IconButton } from "@mui/material";

function Register(){

      const [phone , setPhone]  = useState(""); 
      const [OTP, setOTP]  = useState("");
      const [isenabled  , setIsenabled] = useState(false);
      

      const generateRecaptchaVerifier = ()=>{
            // creating a global instance of RecaptchaVerifier class.
            window.recaptchaVerifier = new RecaptchaVerifier(
                  authentication, 
                  "recaptchaContainer",
                  {
                        "size": "visible",
                        
                  }
            );
      }

      const handleSendotp = async ()=>{
            if(!app){
                  console.log("App not initialised");
                  return;
            }
            console.log("App is created in Register");
            if(phone.length===13){
                  generateRecaptchaVerifier();
                  console.log("reCptcha verified!!");
                  let appVeifier = window.recaptchaVerifier;
                  signInWithPhoneNumber(authentication,phone, appVeifier)
                  .then((confirmationResult)=>{
                        window.confirmationResult = confirmationResult;
                  })
                  .catch((error)=>{
                        console.log(error);
                  })
                  
            }


      }

      const verifyOtp = ()=>{
            console.log(OTP);
            if(OTP.length===6){
                  console.log("OTP verified");
            }
            else{
                  console.log("Not verified");
            }
      }

      // DO THE DIGIT CONFIRMATION NOT THE LENGTH.

      return(
            <div className="main">
                  <div className="mainContainer">

                        <div className="animalAnimation">
                              <img src="" alt="" />
                        </div>
                        
                        <div className="AnimalServiceText">
                              <span>
                                    Discover animal friendly services & explore products
                              </span>
                        </div>

                        <div className="inputMobileNumber">
                              
                              <input type="text" onChange={(e)=>{
                                    setPhone(e.target.value)
                                    if(phone.length === 12){
                                          setIsenabled(true);
                                    }
                                    else{
                                          setIsenabled(false);
                                    }
                              }}/>
                              <label htmlFor="" 
                              className={`labelclass ${phone ? 'labelTrans': ""}`}
                              >Mobile Number</label>
                        </div>
                        <div className="continueBtn">
                              {/* here, btn is a static class, but out of those 2 classes, one will be applied to it. */}
                              <Link to={verifyOtp} >
                                    <button className= {`btn ${isenabled ? 'button-85': 'disabled'}`} onClick={handleSendotp}>
                                          Continue
                                    </button>
                              
                              </Link>

                              
                        </div>
                        {/* <label htmlFor="otpInput" className="form-label"></label>
                        <input type="text" id="otpInput" value={OTP} className="form-control" 
                              onChange={(e)=>{
                                    setOTP(e.target.value);
                              }}
                        /> */}

                        {/* providing value attribute , it becomes a controlled input which is managed by react state */}

                        {/* <button onClick={verifyOtp} >verify</button> */}
                        <div id="recaptchaContainer">
                              {/* recaptcha will be displayed in this div. */}
                        </div>
                  </div>
            </div>

      )
}

export default Register;