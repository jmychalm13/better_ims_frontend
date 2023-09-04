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
    <div id="login">
      <h1>Login</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          Email: <input className="form-control" name="email" type="email" />
        </div>
        <div className="form-group">
          Password: <input className="form-control" name="password" type="password" />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Login
        </button>
      </form>
    </div>
  );
}
