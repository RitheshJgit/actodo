import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login(props) {
  const navigate= useNavigate() 
    const user = props.user
  const [userEntered, setUserEntered] = useState();
  const [pwdEntered, setpwdEntered] = useState();
  const [isRegister, setRegister] = useState(true)

  
  function handleUserE(e) {
    setUserEntered(e.target.value);
  }

  function handlePwdE(e) {
    setpwdEntered(e.target.value);
  }

  function handleCheck() {
    var userFound = false
    user.forEach(
        function (item){
            if(item.username === userEntered && item.password === pwdEntered){
                console.log("Login Successfull")
                userFound = true
                setRegister(true)
                navigate("/landing", {state : {user : userEntered}})
            }
           
        }
    )
    if(userFound === false){
      console.log("Login Failed")
      setRegister(false)
    }
  }
  return (
    <div className="bg-black p-10">
      <div className="bg-white p-5 border rounded-md flex flex-col gap-5">
        <p className="text-xl">Hey Hi</p>
        {
            isRegister ? <p>I help you to manage your activities after you login : ) </p> : <p className="text-red-700">Please Register before Login</p>
        }
        <input
          type="text"
          className="w-52 p-1 border border-black border rounded-md"
          placeholder="UserName"
          value={userEntered}
          onChange={handleUserE}
        />
        <input
          type="text"
          className="w-52 p-1 border border-black border rounded-md"
          placeholder="Password"
          value={pwdEntered}
          onChange={handlePwdE}
        />
        <button
         className="w-20 bg-violet-400 border border-black p-1 border rounded-md"
         onClick={handleCheck}
         >
          Login
        </button>
        <p>
          Don't have an account ? <Link to="/signup">SignUp</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
