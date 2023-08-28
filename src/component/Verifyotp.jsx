import React from 'react'

function Verifyotp() {
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
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>

      <div className="VerifyButton">
        <button>Verify</button>
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
