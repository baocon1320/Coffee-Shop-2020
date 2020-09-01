import React from "react";
import { Row } from "react-bootstrap"; 
import {Call, Home, WatchLater} from '@material-ui/icons';
import IntroCard from "./IntroCard";

function Intro(props){
    return (
    <Row className="text-light py-5">
       <IntroCard title={props.phoneNumber} info={props.quickIntro}>
           <Call fontSize="large" className="text-color-theme" />
       </IntroCard>
       <IntroCard title={props.address} info={props.fullAddress}>
           <Home fontSize="large" className="text-color-theme" />
       </IntroCard>
       <IntroCard title={props.days} info={props.hours}>
           <WatchLater fontSize="large" className="text-color-theme" />
       </IntroCard>
    </Row>
    );
}

export default Intro;