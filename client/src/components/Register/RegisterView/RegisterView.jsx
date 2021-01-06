// import React, { Component } from "react";
// import axios from "axios";

// const headerAuxios = axios.create({
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
// export default class RegisterView extends Component {
//   state = {
//     firstName: "test",
//     lastName: "test",
//     email: "",
//     password: "tester",
//   };

//   onChangeFirstName = (event) => {
//     this.setState({ firstName: event.target.value });
//   };
//   onChangeLastName = (event) => {
//     this.setState({ lastName: event.target.value });
//   };
//   onChangeUserEmail = (event) => {
//     this.setState({ email: event.target.value });
//   };
//   onChangePassWord = (event) => {
//     this.setState({ password: event.target.value });
//   };
//   handleSubmit = (event) => {
//     event.preventDefault();
//     const userObject = {
//       firstname: this.state.firstName,
//       lastname: this.state.lastName,
//       email: this.state.email,
//       password: this.state.password,
//     };
//     headerAuxios
//       .post("http://localhost:5000/user/register", userObject)
//       .then((res) => {
//         console.log(res.data);
//       })
//       .catch((error) => {
//         console.log(error, "error");
//       });
//   };
//   render() {
//     return (
//       <div className="container my-4">
//         <p className="font-weight-bold">
//           Examples of bootstrap registration forms
//         </p>

//         <section id="register-form">
//           {/* <!--Title--> */}
//           <h2 className="section-heading mb-4 h2">Register / Sign up form</h2>

//           {/* <!--Grid row--> */}
//           <div className="row">
//             {/* <!--Grid column--> */}
//             <div className="col-lg-6 m-auto">
//               {/* <!--Section: Live preview--> */}
//               <section>
//                 {/* <!-- Default form register --> */}
//                 <form className="text-center border border-light p-5">
//                   <p className="h4 mb-4">Sign up</p>

//                   <div className="form-row mb-4">
//                     <div className="col">
//                       {/* <!-- First name --> */}
//                       <input
//                         type="text"
//                         id="defaultRegisterFormFirstName"
//                         className="form-control"
//                         placeholder="First name"
//                         value={this.state.firstName}
//                         onChange={this.onChangeFirstName}
//                       />
//                     </div>
//                     <div className="col">
//                       {/* <!-- Last name --> */}
//                       <input
//                         type="text"
//                         id="defaultRegisterFormLastName"
//                         className="form-control"
//                         placeholder="Last name"
//                         value={this.state.lastName}
//                         onChange={this.onChangeLastName}
//                       />
//                     </div>
//                   </div>

//                   {/* <!-- E-mail --> */}
//                   <input
//                     type="email"
//                     id="defaultRegisterFormEmail"
//                     className="form-control mb-4"
//                     placeholder="E-mail"
//                     value={this.state.email}
//                     onChange={this.onChangeUserEmail}
//                   />

//                   {/* <!-- Password --> */}
//                   <input
//                     type="password"
//                     id="defaultRegisterFormPassword"
//                     className="form-control"
//                     placeholder="Password"
//                     aria-describedby="defaultRegisterFormPasswordHelpBlock"
//                     value={this.state.password}
//                     onChange={this.onChangePassWord}
//                   />
//                   <small
//                     id="defaultRegisterFormPasswordHelpBlock"
//                     className="form-text text-muted mb-4"
//                   >
//                     At least 8 characters and 1 digit
//                   </small>

//                   {/* <!-- Phone number --> */}
//                   <input
//                     type="text"
//                     id="defaultRegisterPhonePassword"
//                     className="form-control"
//                     placeholder="Phone number"
//                     aria-describedby="defaultRegisterFormPhoneHelpBlock"
//                   />
//                   <small
//                     id="defaultRegisterFormPhoneHelpBlock"
//                     className="form-text text-muted mb-4"
//                   >
//                     Optional - for two step authentication
//                   </small>

//                   {/* <!-- Sign up button --> */}
//                   <button
//                     className="btn btn-info my-4 btn-block waves-effect waves-light"
//                     type="submit"
//                     onClick={this.handleSubmit}
//                   >
//                     Sign in
//                   </button>

//                   {/* <!-- Social register --> */}
//                   {/* <p>or sign up with:</p>

//                           <a type="button" className="light-blue-text mx-2">
//                             <i className="fab fa-facebook-f"></i>
//                           </a>
//                           <a type="button" className="light-blue-text mx-2">
//                             <i className="fab fa-twitter"></i>
//                           </a>
//                           <a type="button" className="light-blue-text mx-2">
//                             <i className="fab fa-linkedin-in"></i>
//                           </a>
//                           <a type="button" className="light-blue-text mx-2">
//                             <i className="fab fa-github"></i>
//                           </a> */}

//                   {/* <!-- Terms of service --> */}
//                   <p>
//                     By clicking
//                     <em>Sign up</em> you agree to our
//                     <a href="" target="_blank">
//                       terms of service
//                     </a>
//                   </p>
//                 </form>
//                 {/* <!-- Default form register --> */}
//               </section>
//               {/* <!--Section: Live preview--> */}
//             </div>
//             {/* <!--Grid column--> */}
//           </div>
//           {/* <!--Grid row--> */}
//         </section>
//       </div>
//     );
//   }
// }
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../../auth";
const RegisterView = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, success, error } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          error: "",
          success: true,
        });
      }
    });
  };

  const signUpForm = () => (
    <form className="text-center border border-light p-5">
      <p className="h4 mb-4">Sign up</p>

      <div className="form-row mb-4">
        <div className="col">
          <div className="form-group">
            <label className="text-muted">Name</label>
            <input
              onChange={handleChange("name")}
              type="text"
              className="form-control"
              value={name}
            />
          </div>
        </div>
      </div>

      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          onChange={handleChange("email")}
          type="email"
          className="form-control"
          value={email}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          onChange={handleChange("password")}
          type="password"
          className="form-control"
          value={password}
        />
      </div>
      <small
        id="defaultRegisterFormPasswordHelpBlock"
        className="form-text text-muted mb-4"
      >
        At least 8 characters and 1 digit
      </small>

      {/* <!-- Phone number --> */}
      <input
        type="text"
        id="defaultRegisterPhonePassword"
        className="form-control"
        placeholder="Phone number"
        aria-describedby="defaultRegisterFormPhoneHelpBlock"
      />
      <small
        id="defaultRegisterFormPhoneHelpBlock"
        className="form-text text-muted mb-4"
      >
        Optional - for two step authentication
      </small>

      {/* <!-- Sign up button --> */}
      <button
        className="btn btn-info my-4 btn-block waves-effect waves-light"
        type="submit"
        onClick={clickSubmit}
      >
        Sign in
      </button>

      <p>
        By clicking
        <em>Sign up</em> you agree to our
        <a href="" target="_blank">
          terms of service
        </a>
      </p>
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

  const showSuccess = () => (
    <div
      className="alert alert-info"
      style={{ display: success ? "" : "none" }}
    >
      New account is created. Please <Link to="/signin">Signin</Link>
    </div>
  );

  return (
    <div className="container my-4">
      <p className="font-weight-bold">
        Examples of bootstrap registration forms
      </p>

      <section id="register-form">
        <h2 className="section-heading mb-4 h2">Register / Sign up form</h2>
        <div className="row">
          <div className="col-lg-6 m-auto">
            <section>
              {showSuccess()}
              {showError()}
              {signUpForm()}
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterView;
