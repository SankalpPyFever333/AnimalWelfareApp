import React ,{useRef ,useState } from 'react'
import "./userprofile.css"
import { useNavigate } from 'react-router-dom';



function Userprofiledetails() {
  const inputref = useRef([]);
  const [File, setFile] = useState('');
  const [length, setLength] = useState(false);
  const navigate = useNavigate();
  const [isenabled, setIsenabled] = useState(false);
  // const inputref = useRef([]);

  inputref.current = []

  // const addtoRef = (element)=>{
  //   if(element && !inputref.current.includes(element)){
  //     inputref.current.push(element);
  //   }
  // }

  // CHECK WHETHER ALL THE INPUT BOX HAVE SOME VALUES OR NOT, IF YES ENABLE THE CONTINUE BUTTON ELSE NOT.

  const handleChangeInput = (e)=>{
    if(e.target.value.length!== 0){
      setLength(true);
    }
    else{
      setLength(false);

    }
  }

  const handleImageClick = ()=>{
    inputref.current.click();
  }

  const handleImageChange = (e)=>{
    console.log("File event", e.target.files);
    //  it contains several details like lastModified, date, type , path, name etc.
    const file = e.target.files[0];
    console.log(file);
    setFile(file);
  }

  const handleNavigation = ()=>{

  }
  
  return (
    <div className='userprofiledetailsmaindiv'>
        <p>Add your details</p>
      <div className="userImageProfile" onClick={handleImageClick}>
        {
          File ? (
            <img src= {URL.createObjectURL(File)} className='userimage'  alt="" />
          ) : 
          (
            <img src="./assests/profileIcon.jpeg" alt=""  className='userimage' />
          )
        }
        <input type="File" onChange={handleImageChange} ref={inputref} style={{display:"none"}} />
      </div>
      <div className="userdata">
        <div className="form">
          <input  type="text" id="username" onChange={(e)=> handleChangeInput} className='form-input' autoComplete='off'/>
          <label htmlFor="username" className="form_label">Your name</label>
        </div>
        <div className="form">
          <input  type="text" id="statename" className='form-input' autoComplete='off'/>
          <label htmlFor="statename" className="form_label">Your state</label>
        </div>
        <div className="form">
          <input  type="text" id="cityname" className='form-input' autoComplete='off'/>
          <label htmlFor="cityname" className="form_label">Your state</label>
        </div>
        
        {/* add more fields after discussing with simanshi */}

        <div className="continueBtn">
          {!length ? <button className= {`btn ${isenabled ? 'button-85': 'disabled'}`} onClick={handleNavigation}>
                      Continue
                </button>   : 
                <button className= {`btn ${isenabled ? 'button-85': 'disabled'}`} onClick={()=>{
                      navigate("/verify");
                }}>
                      VerifyOtp
                </button>
                }
        </div>
      </div>
    </div>
  )
}

export default Userprofiledetails
