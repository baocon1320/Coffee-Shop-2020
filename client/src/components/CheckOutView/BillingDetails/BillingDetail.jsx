import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { Component } from 'react'
let userID = JSON.parse(localStorage.getItem('userID'))

export default class SubCheckOut extends Component {
    state = {
        user: []
    }

    handleGetUser = async(id) =>{
        await axios.get('http://localhost:5000/user/' + id)
        .then(res => {
            const userData = res.data;
            this.setState({user: userData });
          })
        console.log(this.state.user)

    } 
    componentDidMount(){

        this.handleGetUser(userID)
    }
    render() {
        return (
            <div className="container">
            <div class="col-xl-8 ftco-animate fadeInUp ftco-animated">
<form action="#" class="billing-form ftco-bg-dark p-3 p-md-5">
<h3 class="mb-4 billing-heading">Billing Details</h3>
<div class="row align-items-end">
<div class="col-md-6">
<div class="form-group">
<label for="firstname">Firt Name</label>
<input type="text" class="form-control" placeholder="" value={this.state.user.firstname}/>
</div>
</div>
<div class="col-md-6">
<div class="form-group">
<label for="lastname">Last Name</label>
<input type="text" class="form-control" placeholder=""  value={this.state.user.lastname}/>
</div>
</div>

<div class="w-100"></div>
<div class="col-md-6">
<div class="form-group">
<label for="streetaddress">Street Address</label>
<input type="text" class="form-control" placeholder="House number and street name"/>
</div>
</div>
<div class="col-md-6">
<div class="form-group">
<input type="text" class="form-control" placeholder="Appartment, suite, unit etc: (optional)"/>
</div>
</div>
<div class="w-100"></div>
<div class="col-md-6">
<div class="form-group">
<label for="towncity">Town / City</label>
<input type="text" class="form-control" placeholder=""/>
</div>
</div>
<div class="col-md-6">
<div class="form-group">
<label for="postcodezip">Postcode / ZIP *</label>
<input type="text" class="form-control" placeholder="" />
</div>
</div>
<div class="w-100"></div>
<div class="col-md-6">
<div class="form-group">
<label for="phone">Phone</label>
<input type="text" class="form-control" placeholder=""/>
</div>
</div>
<div class="col-md-6">
<div class="form-group">
<label for="emailaddress">Email Address</label>
<input type="text" class="form-control" placeholder=""  value={this.state.user.email}/>
</div>
</div>
<div class="w-100"></div>
<div class="col-md-12">
<div class="form-group mt-4">
<div class="radio">
<label class="mr-3"><input type="radio" name="optradio"/> Create an Account? </label>
<label><input type="radio" name="optradio"/> Ship to different address</label>
</div>
</div>
</div>
</div>
</form>

</div>
          
          </div>
        )
    }
}
