import React from 'react'
import "./whoyouare.css"
function Whoyouare() {
  return (
    <div className='mainRDUblock'>
      <p>I am a </p>
      <button>
        <div className="RDUblock">
          <span>DOCTOR</span>
          <div className="RDUimage">
            <img src="/public/assests/doctorDog.png" alt="" />
          </div>
        </div>
      </button>
      <button>
        <div className="RDUblock">
          <span>RESCUER</span>
          <div className="RDUimage">
            <img src="/public/assests/images.jpeg" alt="" />
          </div>
        </div>
      </button>
      <button>
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
