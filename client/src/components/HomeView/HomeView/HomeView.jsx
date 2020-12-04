import React, { useState, useEffect } from 'react';
import SliderImages from '../SliderImages/SliderImages';
import Intro from '../Intro/Intro';
//import introDetail from '../../../resouces/Text/Intro/introDetail';
import ShopOverview from '../ShopOverview/ShopOverview';
import BestSeller from '../BestSeller/BestSeller';
import { Container } from 'react-bootstrap';

function HomeView(props) {

  const infoData = props.infoData;

  return (
    <React.Fragment>
      <div>
        <SliderImages images={infoData.info.images} />

        <Intro
          phoneNumber={infoData.info.phoneNumber}
          quickIntro={infoData.info.intro}
          address={infoData.info.shortAddress}
          fullAddress={infoData.info.address}
          days={infoData.info.hours.split(/\r?\n/)[0]}
          hours={infoData.info.hours.split(/\r?\n/)[1]}
        />

        <ShopOverview name={infoData.info.name} fullIntro={infoData.info.fullIntro}/>
        <Container>
          <BestSeller bestDrinksIntro={infoData.info.bestDrinksIntro} />
        </Container>
      </div>
    </React.Fragment>

  );
}

export default HomeView;
