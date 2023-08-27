import React, { useEffect } from "react";
import "./App.css";
import app from "./component/firebase"
import { BrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import Register from "./component/Register";
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
        <Register />
      
      </BrowserRouter>
    </div>
  );
}

export default App;
