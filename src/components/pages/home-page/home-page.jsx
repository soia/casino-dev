import React, { Fragment } from 'react';
import FirstScreen from './first-screen';
import AllGames from './all-games';
import NewGames from './new-games';
import Advantages from './advantages';
import WorkPrinciples from './work-principles';
import SmartContract from './smart-contract';
import Referals from './referals';
import AirDrop from './airDrop';
import LatestNews from './latest-news';

const HomePage = () => (
    <Fragment>
        <FirstScreen />
        <AllGames />
        <NewGames />
        <Advantages />
        <WorkPrinciples />
        <SmartContract />
        <Referals />
        <AirDrop />
        <LatestNews />
    </Fragment>
);

export default HomePage;
