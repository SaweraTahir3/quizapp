// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
// import Login from './Components/login/Login';

// import WelcomePage from './Components/WelcomePage'
// import StudentCourses from './Components/StudentCourses'
// import QuizQuizQuestion from './Components/QuizQuestion'
import Login from "./Components/login/Login"
import Signup from './Components/signup/Signup';
import {  Route, Routes } from 'react-router-dom';

function App() {
  
  return (
 <>
    
  <Routes>
     <Route path='/login' Component={Login}></Route> 
    <Route path='/signup' Component={Signup}></Route>
    </Routes>
    

  {/* <WelcomePage/>
    <StudentCourses/>
    <QuizQuizQuestion /> 
    
   */}
   </>

      )
}

export default App; 


