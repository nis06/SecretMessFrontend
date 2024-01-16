import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Passrecovery from "./components/Passrecovery";
import PostSecret from "./components/PostSecret";
import Allmess from "./components/Allmess";

export default function App() {
  return (
    <div className="bg-black h-[100vh] overflow-x-hidden relative z-[50] ">
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/passrecover' element={<Passrecovery/>}/>
        <Route path='/home' element={<PostSecret/>}/>
        <Route path="/allmess" element={<Allmess/>} />
      </Routes>
    </div>
  )
}
