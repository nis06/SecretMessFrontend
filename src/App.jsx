import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Passrecovery from "./components/Passrecovery";
import PostSecret from "./components/PostSecret";
import Allmess from "./components/Allmess";
import PrivateRoute from "./components/PrivateRouter";

export default function App() {
  const [isLoggedin,setLoggedIn]=useState(false)
  return (
    <div className=" h-[100vh] overflow-x-hidden relative z-[50] bg-amber-300 ">
      <Routes>
        <Route path='/' element={<Login setLoggedIn={setLoggedIn}/>} />
        <Route path='/signup' element={<Signup setLoggedIn={setLoggedIn}/>}/>
        <Route path='/passrecover' element={<Passrecovery/>}/>
        <Route path='/home' element={  <PrivateRoute isLoggedin={isLoggedin}>
            <PostSecret/>
          </PrivateRoute>}/>
        <Route path="/allmess" element={  <PrivateRoute isLoggedin={isLoggedin}>
            <Allmess/>
          </PrivateRoute>} />
      </Routes>
    </div>
  )
}
