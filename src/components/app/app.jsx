import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../layouts/header';
import Footer from '../layouts/footer';
import {
    HomePage,
    PageNotFound,
} from '../pages';

import '../assets/styles/reset.scss';
import './app.scss';
import '../assets/styles/fonts.scss';

const App = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    if (loading) {
        return <p>Loading</p>;
    }

    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route component={PageNotFound} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;
