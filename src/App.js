import React, { useEffect } from "react";
import "./App.css";
import app from "./component/firebase"
import { BrowserRouter, Routes , Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import Register from "./component/Register";
import Verifyotp from "./component/Verifyotp";
function App() {

  // useEffect(()=>{
  //   if(!app){
  //     console.log("firebase is not initialized");
  //     return;
  //   }
  //   const unsubscribe = onAuthStateChanged((user)=>{
  //     if(user){
  //       console.log("user is logged in" , user)
  //     }
  //     else{
  //       console.log("No user logged in app");
  //     }
  //   })
  //   return ()=>{
  //     unsubscribe();
  //   }
  // },[]);


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />}></Route>
          <Route path="/verify" element={<Verifyotp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
