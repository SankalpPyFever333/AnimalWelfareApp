import React, { useState } from "react";
import app from "./firebase";
import { RecaptchaVerifier, signInWithPhoneNumber} from "firebase/auth";
// import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "./Register.css"
import { useNavigate} from "react-router-dom";
import authentication from "../component/firebase";
import CountrySelect from "./CountrySelect";

// import { IconButton } from "@mui/material";

function Register(){

      const navigate = useNavigate();
      const [phone , setPhone]  = useState(""); 
      
      const [isenabled  , setIsenabled] = useState(false);
      const [isOtpSent, setIsOtpSent] = useState(false);

      

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
                  
                  let appVeifier = window.recaptchaVerifier;
                  signInWithPhoneNumber(authentication,phone, appVeifier)
                  .then((confirmationResult)=>{
                        window.confirmationResult = confirmationResult;
                        console.log("recaptcha verified!! and navigating to verifyOTP");
                        // verification is successful, now go to Verifyotp.jsx component.
                        // navigate("./Verifyotp");
                        setIsOtpSent(true);
                        
                  })
                  .catch((error)=>{
                        console.log(error);
                  })    
                  
            }


      }

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
                              <div className="countryselect">
                                    <CountrySelect/>
                              </div>
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
                              {/* <Link to= "./Verifyotp.jsx" >
                              </Link> */}
                              {/* here, btn is a static class, but out of those 2 classes, one will be applied to it. */}

                              {!isOtpSent ? <button className= {`btn ${isenabled ? 'button-85': 'disabled'}`} onClick={handleSendotp}>
                                          Continue
                                    </button>   : 
                                    <button className= {`btn ${isenabled ? 'button-85': 'disabled'}`} onClick={()=>{
                                          navigate("/verify");
                                    }}>
                                          VerifyOtp
                                    </button>
                                    }

{/* when otp is sent successfully, then VerifyOtp button rendered and upon clicking on that , we navigate to Verifyotp.jsx component. */}

                                    {/* <button className= {`btn ${isenabled ? 'button-85': 'disabled'}`} onClick={handleSendotp}>
                                          Continue
                                    </button>                               */}
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