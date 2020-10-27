import React, { Component } from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import axios from 'axios'
import './loginView.scss'
export default class LoginView extends Component {
  state={
    email: 'test1@test.com',
    password: 'tester',
}
onChangeEmail = (event) =>{
    this.setState({email: event.target.value})
}
onChangePassword = (event) =>{
    this.setState({password: event.target.value})
}

handleSubmit = async(event) =>{
    event.preventDefault()
const userData = {
email: this.state.email,
password: this.state.password
}
console.log(userData)
let axiosConfig = {
headers: {
    'Content-Type': 'application/json;charset=UTF-8',
}
};
await axios.post('http://localhost:5000/user/login', userData, axiosConfig).then((res) =>{
localStorage.setItem('user', JSON.stringify(res.data.token))
localStorage.setItem('userID', JSON.stringify(res.data.id))
window.location.href = "/"

}).catch((error) =>{
console.log(error)
})

}
    render() {
        return (
            <div class="container login-container">
            <div class="row">
              <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div class="card card-signin my-5">
                  <div class="card-body">
                    <h5 class="card-title text-center">Sign In</h5>
                    <form class="form-signin">
                      <div class="form-label-group">
                        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus value={this.state.email} onChange={this.onChangeEmail}/>
                        <label for="inputEmail">Email address</label>
                      </div>
        
                      <div class="form-label-group">
                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required value = {this.state.password} onChange={this.onChangePassword}/>
                        <label for="inputPassword">Password</label>
                      </div>
        
                      <div class="custom-control custom-checkbox mb-3">
                        <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                        <label class="custom-control-label" for="customCheck1">Remember password</label>
                      </div>
                      <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit"  onClick={this.handleSubmit}>Sign in</button>
                      <hr class="my-4"/>
                      
                      <button class="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><FacebookIcon className="btn-facebook"/> Sign in with Facebook</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
