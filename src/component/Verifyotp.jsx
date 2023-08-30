import React from 'react'
import "./Verifyotp.css"
function Verifyotp() {

  const handleChange = (e)=>{
    // select all the input box and chack whether it reaches to its maxlength or not, if yes, shift the focus to next input box.
    
  }






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
        <input className='enterotp' onChange={handleChange} maxLength={1} type="text" />
        <input className='enterotp' onChange={handleChange} maxLength={1} type="text" />
        <input className='enterotp' onChange={handleChange} maxLength={1}  type="text" />
        <input className='enterotp' onChange={handleChange} maxLength={1} type="text" />
        <input className='enterotp' onChange={handleChange} maxLength={1} type="text" />
        <input className='enterotp' onChange={handleChange} maxLength={1} type="text" />
      </div>

      <div className="VerifyButton">
        <button>Verify OTP</button>
      </div>

      <div className="ResendTimer">
        <span>Resend OTP</span>
        <br />
        <span>Please wait 38s to resend OTP</span>
      </div>

    </div>
  )
}

export default Verifyotp
