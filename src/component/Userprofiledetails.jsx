import React ,{useRef ,useState} from 'react'
import "./userprofile.css"
import { red } from '@mui/material/colors';
function Userprofiledetails() {
  const [File, setFile] = useState('');
  const inputref = useRef(null);


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
  
  return (
    <div>
      <div className="userImagePrfile" onClick={handleImageClick}>
        <img  src="./assests/profileIcon.jpeg" alt="" style={{border:"3px solid red",width:"35vw", height:"16vh"}} />
        {
          File ? (
            <img src= {URL.createObjectURL(File)} alt="" />
          ) : 
          (
            <img src="./assests/profileIcon.jpeg" alt="Icon" />
          )
        }
        <input type="File" onChange={handleImageChange} ref={inputref} style={{display:"none"}} />
      </div>
    </div>
  )
}

export default Userprofiledetails
