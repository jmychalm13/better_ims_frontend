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
      .post("/sessions.json", params)
      .then((response) => {
        console.log("Log here", response.data);
        axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.jwt}`;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/orders"; // change this to hide a modal or go to a specific page
      })
      .catch((error) => {
        console.log("Log here", error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  console.log(jwt);
  return (
    <div className="container login-container">
      <div className="alert alert-info mt-3 alert-dismissible fade show" role="alert">
        <p>
          Signin info is: <strong>Email:</strong> jane@test.com | <strong>Password:</strong> password | Please allow 2 -
          3 minutes for backend to spinup after signing in.
        </p>
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center text-dark mt-5">Better IMS</h2>
          <div className="text-center mb-5 text-dark">A better way to manage your inventory</div>
          <div className="card my-5">
            <form onSubmit={handleSubmit} className="submit-form card-body cardbody-color p-lg-5">
              <ul>
                {errors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
              <div className="text-center">
                <img
                  src="/assets/logo-transparent-png.png"
                  alt=""
                  className="img-fluid profile-image-pic img-thumbnail rounded-circle mb-5"
                  width="200px"
                />
              </div>
              <div className="mb-3">
                <input className="form-control" name="email" type="email" placeholder="Email" />
              </div>
              <div className="mb-3">
                <input className="form-control" name="password" type="password" placeholder="password" />
              </div>
              <div className="text-center">
                <button type="submit" className="btn mt-3">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
