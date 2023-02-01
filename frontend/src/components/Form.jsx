import React, { useState } from "react";

import { toast, Toaster } from "react-hot-toast";

const backUrl = import.meta.env.VITE_BACKEND_URL;
export default function Form() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [country, setCountry] = useState("");
  const [userRole, setUserRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const SuccessSignUp = () => {
    toast("Account created", {
      icon: "👍",
    });
  };
  const ErrorPassword = () => {
    toast("Password Does not match", {
      icon: "👎",
    });
  };
  const ErrorRegexPassword = () => {
    toast(
      "Password must be at least 8 characters long and contain at least one number and one letter one Uppercase and one special character",
      {
        icon: "👎",
      }
    );
  };
  const ErrorEmail = () => {
    toast("Email is not correct", {
      icon: "👎",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.warn("firstname", firstname);
    console.warn("lastname", lastname);
    console.warn("country", country);
    console.warn("role", userRole);
    console.warn("email", email);

    if (password !== confirmPassword) {
      ErrorPassword();
      return;
    }
    // verify that the password is at least 8 characters long and contains at least one number and one letter (regex)
    if (
      !password.match(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
      )
    ) {
      ErrorRegexPassword();
      return;
    }
    // verify that the email is valid (regex)
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      ErrorEmail();
      return;
    }
    // headers
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      email,
      firstname,
      lastname,
      country,
      userRole,
      password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };
    // send the data to the backend
    fetch(`${backUrl}/api/register`, requestOptions)
      .then((data) => {
        console.warn("Success:", data);
        SuccessSignUp();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div>
        <Toaster position="top-center" reverseOrder />
      </div>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First name</label>
        <input
          onChange={(event) => setFirstname(event.target.value)}
          type="text"
          name="firstname"
          id="firstname"
        />
        <label htmlFor="lastname">Last name</label>
        <input
          onChange={(event) => setLastname(event.target.value)}
          type="text"
          name="lastname"
          id="lastname"
        />
        <label htmlFor="country">Country</label>
        <input
          onChange={(event) => setCountry(event.target.value)}
          type="text"
          name="country"
          id="country"
        />
        <label htmlFor="role">Role</label>
        <select
          onChange={(event) => setUserRole(event.target.value)}
          name="role"
          id="role"
        >
          <option value="athlete">Athlete</option>
          <option value="coach">Coach</option>
        </select>
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
          type="text"
          name="password"
          id="password"
        />
        <label htmlFor="password">Confirm password</label>
        <input
          onChange={(event) => setConfirmPassword(event.target.value)}
          type="text"
          name="password"
          id="password"
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}
