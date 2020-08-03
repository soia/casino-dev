import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../layouts/header';
import Footer from '../layouts/footer';
import PasswordRecovery from '../auth/password-recovery';
import Login from '../auth/login';
import Registration from '../auth/registration';
import {
    HomePage,
    PageNotFound,
    LoadingPage,
    TermOfUse,
    PrivacyPolicy,
    PersonalArea,
} from '../pages';
import { termOfServicePath, privacyPolicyPath, personalAreaPath } from '../../constants';
import '../assets/styles/reset.scss';
import '../assets/styles/search-select.scss';
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
        return <LoadingPage />;
    }

    return (
        <Router>
            <Header />
            <Login />
            <Registration />
            <PasswordRecovery />
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path={termOfServicePath} component={TermOfUse} exact />
                <Route path={privacyPolicyPath} component={PrivacyPolicy} exact />
                <Route path={personalAreaPath} component={PersonalArea} />
                <Route component={PageNotFound} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;
