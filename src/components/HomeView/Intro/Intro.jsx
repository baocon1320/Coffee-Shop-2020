import React from "react";
import { Row } from "react-bootstrap"; 
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CallIcon from '@material-ui/icons/Call';
import HomeIcon from '@material-ui/icons/Home';
//import {CallIcon, HomeIcon, WatchLaterIcon} from '@material-ui/icons';
import IntroCard from "./IntroCard";

function Intro(props){
    return (
    <Row className="text-light py-5">
       <IntroCard title={props.phoneNumber} info={props.quickIntro}>
           <CallIcon fontSize="large" color="secondary" />
       </IntroCard>
       <IntroCard title={props.address} info={props.fullAddress}>
           <HomeIcon fontSize="large" color="secondary" />
       </IntroCard>
       <IntroCard title={props.days} info={props.hours}>
           <WatchLaterIcon fontSize="large" color="secondary" />
       </IntroCard>
    </Row>
    );
}

export default Intro;