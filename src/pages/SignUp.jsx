import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// var navigate = useNavigate();

function SignUp(props) {
  const navigate = useNavigate()
  const [userEntered, setUserEntered] = useState();
  const [pwdEntered, setpwdEntered] = useState();
  const user = props.user
  const setUser = props.setUser
  function handleUserE(e) {
    setUserEntered(e.target.value);
  }

  function handlePwdE(e) {
    setpwdEntered(e.target.value);
  }

  function handleAdd(){
    setUser([...user, {username: userEntered, password: pwdEntered}])
    navigate("/")
  }

  return (
    <div className="bg-black p-10">
      <div className="bg-white p-5 border rounded-md flex flex-col gap-5">
        <p className="text-xl">Hey Hi</p>
        <p>I help you to manage your activities after you loing : ) </p>
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
        <input
          type="text"
          className="w-52 p-1 border border-black border rounded-md"
          placeholder="Confirm Password"
        />
        <button 
        className="w-20 bg-orange-400 border border-black p-1 border rounded-md"
        onClick={handleAdd}
        >
          SignUp
        </button>
        <p>
          Already have an account ? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
