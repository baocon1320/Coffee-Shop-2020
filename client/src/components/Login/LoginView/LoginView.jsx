import FacebookIcon from "@material-ui/icons/Facebook";
import "./loginView.scss";

import React, { useState } from "react";
import { Redirect } from "react-router-dom";
// import Layout from "../core/Layout";
import { signin, authenticate, isAuthenticated } from "../../auth/";

const LoginView = () => {
  const [values, setValues] = useState({
    email: "tester1@tester.com",
    password: "tester1",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });

  const { email, password, loading, error, redirectToReferrer } = values;
  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            redirectToReferrer: true,
          });
        });
      }
    });
  };

  const signUpForm = () => (
    <form class="form-signin">
      <div class="form-label-group">
        <input
          onChange={handleChange("email")}
          type="email"
          className="form-control"
          value={email}
        />
        <label for="inputEmail">Email address</label>
      </div>

      <div class="form-label-group">
        <input
          onChange={handleChange("password")}
          type="password"
          className="form-control"
          value={password}
        />
        <label for="inputPassword">Password</label>
      </div>

      <div class="custom-control custom-checkbox mb-3">
        <input type="checkbox" class="custom-control-input" id="customCheck1" />
        <label class="custom-control-label" for="customCheck1">
          Remember password
        </label>
      </div>
      <button
        class="btn btn-lg btn-primary btn-block text-uppercase"
        type="submit"
        onClick={clickSubmit}
      >
        Sign in
      </button>

      <hr class="my-4" />

      <button
        class="btn btn-lg btn-facebook btn-block text-uppercase"
        type="submit"
      >
        <FacebookIcon className="btn-facebook" /> Sign in with Facebook
      </button>
    </form>
  );

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showLoading = () =>
    loading && (
      <div className="alert alert-info">
        <h2>Loading...</h2>
      </div>
    );

  const redirectUser = () => {
    if (redirectToReferrer) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/user/dashboard" />;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  return (
    <div class="container login-container">
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="card card-signin my-5">
            <div class="card-body">
              <h5 class="card-title text-center">Sign In</h5>
              <div>
                {showLoading()}
                {showError()}
                {signUpForm()}
                {redirectUser()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
