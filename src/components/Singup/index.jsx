import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Input";
import "./SingupForm.css";
import axios from "../../axios";

function SingupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const ValidNotify = "Registration Successfully Complete";

  // Singup Form Handle

  const SingUpFormHandle = (evn) => {
    evn.preventDefault();
    if (name && email && password === confirmPassword) {
      axios
        .post("/singup", { name: name, email: email, password: password })
        .then((response) => {
          alert(response.data.message);
          if (response.data.message === ValidNotify) {
            return navigate("/");
          }
          setName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        })
        .catch((err) => console.log(err));
    } else {
      window.alert("Invalid Input");
    }
  };

  return (
    <div className="SingupForm">
      <form onSubmit={SingUpFormHandle}>
        <label>Name</label>
        <Input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="Singup-input"
        />
        <label>Email</label>
        <Input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="Singup-input"
        />

        <label>Password</label>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="Singup-input"
        />
        <label>Confirm Password</label>
        <Input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="Singup-input"
        />
        <button className="singup-btn">Sing-Up</button>
      </form>
    </div>
  );
}

export default SingupForm;
