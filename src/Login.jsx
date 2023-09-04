import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");

if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log("Log here", response.data);
        axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.jwt}`;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/"; // change this to hide a modal or go to a specific page
      })
      .catch((error) => {
        console.log("Log here", error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  console.log(jwt);
  return (
    <div id="login" className="wrapper">
      <div className="text-center mt-4 name">Better IMS</div>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="p-3 mt-3">
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
          Email: <input className="form-control" name="email" type="email" />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          Password: <input className="form-control" name="password" type="password" />
        </div>
        <button type="submit" className="btn mt-3">
          Login
        </button>
      </form>
    </div>
  );
}
