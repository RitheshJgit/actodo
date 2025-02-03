import { useState } from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Landing from "./pages/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App(){
  // var navigate = useNavigate()
  const [user, setUser] = useState([
    {
      username: "rithesh",
      password: "123",
    }
  ]);
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login user={user} />}></Route>
        <Route path="/signup"  element={<SignUp user={user} setUser={setUser}/>}></Route>
        <Route path='/landing' element={<Landing />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
