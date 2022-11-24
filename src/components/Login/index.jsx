import React, { useState, useContext } from "react";
import { MdOutlineAlternateEmail as EmailIcon } from "react-icons/md";
import { AiOutlineEye as EyeOn } from "react-icons/ai";
import { AiOutlineEyeInvisible as EyeOff } from "react-icons/ai";
import "./LoginForm.css";
import Input from "../Input";
import { ContextAPi } from "../../context";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passToggle, setPassToggle] = useState(true);
  const LoginValid = "Successfully Login";
  const { setLogin } = useContext(ContextAPi);
  const navigate = useNavigate();

  const TogglePass = () => {
    setPassToggle(!passToggle);
  };

  const LoginHandleForm = (evn) => {
    evn.preventDefault();
    if (email && password) {
      axios
        .post("/login", { email: email, password: password })
        .then((response) => {
          alert(response.data.message);
          if (response.data.message === LoginValid) {
            setLogin(true);
            navigate("/dashboard/allBook");
          } else {
            setLogin(false);
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="LoginForm">
      <form onSubmit={LoginHandleForm}>
        <label className="label">Email</label>
        <Input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="Login-Input"
        />
        <EmailIcon className="EmailIcon" />
        <label className="label">Password</label>
        <Input
          type={passToggle ? "password" : "text"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="Login-Input"
        />
        <span onClick={TogglePass} className="password-wrapper-icon">
          {passToggle ? <EyeOff /> : <EyeOn />}
        </span>
        <button className="login-btn">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
