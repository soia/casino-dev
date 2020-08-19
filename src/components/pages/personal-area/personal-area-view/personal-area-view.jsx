import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import ReactNotification from 'react-notifications-component';
import {
    personalAreaPath,
    balancePath,
    historyPath,
    profileDataPath,
    documentsPath,
    depositPath,
    withdrawalPath,
} from '../../../../constants';

import { compose } from '../../../../utils';
import LeftAside from './left-aside';
import Balance from './balance-page';
import History from './history-page';
import ProfileData from './profile-data-page';
import Deposit from './deposit-page';
import Documents from './documents-page';
import style from './personal-area.module.scss';
import Withdrawal from './withdrawal-page';

const PersonalAreaView = () => (
    <div className={style.personalAreaWrapper}>
        <LeftAside />
        <Switch>
            <Route path={`${personalAreaPath}${depositPath}`} component={Deposit} exact />
            <Route path={`${personalAreaPath}${withdrawalPath}`} component={Withdrawal} exact />
            <Route path={`${personalAreaPath}${balancePath}`} component={Balance} exact />
            <Route path={`${personalAreaPath}${historyPath}/:id?`} component={History} exact />
            <Route
                path={`${personalAreaPath}${profileDataPath}`}
                component={ProfileData}
                exact
            />
            <Route
                path={`${personalAreaPath}${documentsPath}`}
                component={Documents}
                exact
            />
        </Switch>
        <ReactNotification />
    </div>
);

export default compose(withRouter)(PersonalAreaView);
