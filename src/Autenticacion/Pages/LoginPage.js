import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext";

export const LoginPage = () => {

  const navigate = useNavigate();
  const {login} = useContext(AuthContext);

  const onLogin = () => {

      login('Lautaro Fayanas');

      navigate('/' , {
        replace: true
      });
  }

  return (
    <div className="container mt-5">
      <h1> Login </h1>
      <hr />

      <button 
      onClick={onLogin}
      className="btn btn-primary"> 
      Login </button>

    </div>
  )
}
