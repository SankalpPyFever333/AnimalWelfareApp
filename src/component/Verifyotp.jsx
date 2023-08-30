import React, { useRef,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Verifyotp.css"
function Verifyotp() {

  const inputRefs = useRef([]);
  const [OTP, setOTP]  = useState(Array(6).fill(""));
  // let index = 0;
  // creating 6 reference for each input box.
  const navigate = useNavigate();
    inputRefs.current = [];

  const addtoRef  = (element)=>{
    // add element to inputref array:

    // Before adding element to inputRefs, check it whether it is in the array or not:
    // if element is null or it is already in the array, then it will not be added to array.
    if(element && !inputRefs.current.includes(element)){
      inputRefs.current.push(element);
    }
    console.log("inputRefs element are :" ,inputRefs.current);
  }

  // const [currentIndex , setCurrentIndex] = useState(0); // for givin index value to input element.
  const handleChange = (index ,e)=>{
    // select all the input box and check whether it reaches to its maxlength or not, if yes, shift the focus to next input box.

    // destructuring array using spread operator:
    const otpvalues = [...OTP];
    const {value} = e.target;
    otpvalues[index] = value;
    setOTP(otpvalues);
    
    
    if(value.length ===1 && index < inputRefs.current.length-1){
      ++index;
      inputRefs.current[index].focus();
    }
  }

  const verifyOtp = ()=>{
            console.log(OTP);
            if(OTP.length===6){
                  console.log("OTP verified");
                  navigate("/verify/whoyouare");

            }
            else{
                  console.log("Not verified");
            }
      }
      // DO THE DIGIT CONFIRMATION NOT THE LENGTH.



  return (
    <div>
      <div className="logoImage">
        <img src="#" alt="logo" />
      </div>
      <div className="otpLabel">
        <span>
          Please enter the otp sent to this mobile Number
        </span>
      </div>
      <div className="inputBoxOtp">
        <input ref={addtoRef} key={0} className='enterotp' onChange={(e) => {
        handleChange(0,e);
        }} maxLength={1} type="text" autoFocus />
        {/*  when you pass a function as a prop, it will be executed every time the component re-renders. In your case, when the onChange event occurs in the input element, both the handleChange callback and the addtoRef method will be executed. */}
        {/* So, to ensure that, you can check whether that element is already in the array or not. */}
        <input ref={addtoRef} key={1} className='enterotp' onChange={(e) => {handleChange(1,e)}} maxLength={1} type="text" />
        <input ref={addtoRef} key={2} className='enterotp' onChange={(e) => {handleChange(2,e)}} maxLength={1}  type="text" />
        <input ref={addtoRef} key={3} className='enterotp' onChange={(e) => {handleChange(3,e)}} maxLength={1} type="text" />
        <input ref={addtoRef} key={4} className='enterotp' onChange={(e) => {handleChange(4,e)}} maxLength={1} type="text" />
        <input ref={addtoRef} key={5} className='enterotp' onChange={(e) => {handleChange(5,e)}} maxLength={1} type="text" />
      </div>

      <div className="VerifyButton">
        <button onClick={verifyOtp} >Verify OTP</button>
      </div>

      <div className="ResendTimer">
        <span>Resend OTP</span>
        <br />
        <span>Please wait 38s to resend OTP</span>
      </div>

    </div>
  )
}

// Add keys event to navigate.

export default Verifyotp
