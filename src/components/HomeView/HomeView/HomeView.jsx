import React from 'react';
import SliderImages from '../SliderImages/SliderImages';
import Footer from '../../CommonView/Footer/Footer';
import Intro from '../Intro/Intro';
import introDetail from '../../../resouces/Text/Intro/introDetail';
import ShopOverview from '../ShopOverview/ShopOverview';
import BestSeller from '../BestSeller/BestSeller';
import { Container } from 'react-bootstrap';

function HomeView() {
  return (
    <div>
      <SliderImages />
      <Intro
        phoneNumber={introDetail.homeview.phoneNumber}
        quickIntro={introDetail.homeview.quickIntro}
        address={introDetail.homeview.address}
        fullAddress={introDetail.homeview.fullAddress}
        days={introDetail.homeview.days}
        hours={introDetail.homeview.hours}
      />
      <ShopOverview />
      <Container>
        <BestSeller />
      </Container>

      <Footer />
    </div>
  );
}

export default HomeView;
