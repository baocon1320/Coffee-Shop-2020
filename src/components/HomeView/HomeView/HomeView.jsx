import React from "react";
import SliderImages from "../SliderImages/SliderImages";
import Footer from "../../CommonView/Footer/Footer";
import Intro from "../Intro/Intro";
import introDetailt from "../../../resouces/Text/Intro/introDetail";
import ShopOverview from "../ShopOverview/ShopOverview";
import BestSeller from "../BestSeller/BestSeller";
import { Container } from "react-bootstrap";

function HomeView() {
  return (
    <div>
      <SliderImages />
      <Intro phoneNumber={introDetailt.phoneNumber}
          quickIntro={introDetailt.quickIntro}
          address={introDetailt.address}
          fullAddress={introDetailt.fullAddress}
          days={introDetailt.days}
          hours={introDetailt.hours} />
          <ShopOverview />
      <Container>
       
        
        <BestSeller />
      </Container>

      <Footer />
    </div>
  );
}

export default HomeView;
