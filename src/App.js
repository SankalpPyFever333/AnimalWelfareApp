import React, { useEffect } from "react";
import "./App.css";
import app from "./component/firebase"
import { BrowserRouter, Routes , Route } from "react-router-dom";


import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import Register from "./component/Register";
import Verifyotp from "./component/Verifyotp";
import Whoyouare from "./component/Whoyouare"
import Userprofiledetails from "./component/Userprofiledetails";
import Rescuerprofiledetail from "./component/Rescuerprofile";
import Doctorprofiledetails from "./component/Doctorprofiledetails";
function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />}></Route>
          <Route path="/verify" element={<Verifyotp />}></Route>
          <Route path="/verify/whoyouare" element={<Whoyouare />}></Route>
          <Route
            path="/verify/whoyouare/userprofiledetails"
            element={<Userprofiledetails />}
          ></Route>
          <Route
            path="/verify/whoyouare/rescuerprofiledetails"
            element={<Rescuerprofiledetail />}
          ></Route>
          <Route
            path="/verify/whoyouare/doctorprofiledetails"
            element={<Doctorprofiledetails />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
