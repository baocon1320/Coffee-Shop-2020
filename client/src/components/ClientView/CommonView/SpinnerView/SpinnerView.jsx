import React from "react";
import { Spinner } from "react-bootstrap";

function SpinnerView(props) {

    return (
        <div className="d-flex justify-content-center mt-5">
        <Spinner animation="border" role={props.role}>
            <span className="sr-only">Loading...</span>
        </Spinner>
        </div>
    );

}

export default SpinnerView