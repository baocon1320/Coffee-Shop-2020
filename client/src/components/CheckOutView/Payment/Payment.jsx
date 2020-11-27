import React from 'react'

export default function Payment() {
    return (
        <div>
            <div class="col-md-6">
<div class="cart-detail ftco-bg-dark p-3 p-md-4">
<h3 class="billing-heading mb-4">Payment Method</h3>
<div class="form-group">
<div class="col-md-12">
<div class="radio">
<label><input type="radio" name="optradio" class="mr-2"/> Direct Bank Tranfer</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-md-12">
<div class="radio">
<label><input type="radio" name="optradio" class="mr-2"/> Check Payment</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-md-12">
<div class="radio">
<label><input type="radio" name="optradio" class="mr-2"/> Paypal</label>
</div>
</div>
</div>
<div class="form-group">
<div class="col-md-12">
<div class="checkbox">
<label><input type="checkbox" value="" class="mr-2"/> I have read and accept the terms and conditions</label>
</div>
</div>
</div>
<p><a href="#" class="btn btn-primary py-3 px-4">Place an order</a></p>
</div>
</div>
          
        </div>
    )
}
