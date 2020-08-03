import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import {
    personalAreaPath,
    balancePath,
    historyPath,
    profileDataPath,
    documentsPath,
} from '../../../../constants';

import { compose } from '../../../../utils';
import LeftAside from './left-aside';
import RightAside from './right-aside';
import Balance from './balance-page';
import History from './history-page';
import ProfileData from './profile-data-page';
import Documents from './documents-page';
import style from './personal-area.module.scss';

const PersonalAreaView = () => (
    <div className={style.personalAreaWrapper}>
        <LeftAside />
        <Switch>
            <Route path={`${personalAreaPath}${balancePath}`} component={Balance} exact />
            <Route path={`${personalAreaPath}${historyPath}`} component={History} exact />
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
        <RightAside />
    </div>
);

export default compose(withRouter)(PersonalAreaView);
