import React from 'react'
import "./whoyouare.css"
import { useNavigate } from 'react-router-dom'
function Whoyouare() {
  const navigate = useNavigate();
  const handleDoctorProfile = ()=>{
    navigate("/verify/whoyouare/doctorprofiledetails")
  }
  const handleRescuerProfile = ()=>{
    navigate("/verify/whoyouare/rescuerprofiledetails")
  }
  const handleUserProfile = ()=>{
    navigate("/verify/whoyouare/userprofiledetails")
  }
  return (
    <div className='mainRDUblock'>
      <p>I am a </p>
      <button onClick={handleDoctorProfile}>
        <div className="RDUblock">
          <span>DOCTOR</span>
          <div className="RDUimage">
            <img src="/public/assests/doctorDog.png" alt="" />
          </div>
        </div>
      </button>
      <button onClick={handleRescuerProfile}>
        <div className="RDUblock">
          <span>RESCUER</span>
          <div className="RDUimage">
            <img src="/public/assests/images.jpeg" alt="" />
          </div>
        </div>
      </button>
      <button onClick={handleUserProfile}>
        <div className="RDUblock">
          <span>USER</span>
          <div className="RDUimage">
            <img src="/public/assests/girldog.png" alt="" />
          </div>
        </div>
      </button>
    </div>
  )
}

export default Whoyouare
