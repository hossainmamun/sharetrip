import React from 'react';
import DashBoard from '../DashBoard/DashBoard.js';
import Navigation from '../Navigation/Navigation.js';
import ShowSearch from '../ShowSearch/ShowSearch.js';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <ShowSearch/>
            <DashBoard/>
        </div>
    );
};

export default Home;