import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { useCurrentUserContext } from "../context/userContext";

const backUrl = import.meta.env.VITE_BACKEND_URL;

export default function Form() {
  const { setUser, setToken } = useCurrentUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const SuccessSignIn = () => {
      toast("Success login", {
        icon: "👍",
      });
    };
    event.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      email,
      password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };
    if (email && password) {
      fetch(`${backUrl}/api/login`, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          setUser(data.user);
          setToken(data.token);
          SuccessSignIn();
          navigate("/Dashboard");
        })
        .catch(console.error);
    } else {
      setErrorMessage("Please specify email and password");
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          name="email"
          id="email"
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          name="password"
          id="password"
        />
        <button type="submit">Sign in</button>
      </form>
      <div>
        <Toaster position="top-center" reverseOrder />
      </div>
      <div>{errorMessage}</div>
    </div>
  );
}
