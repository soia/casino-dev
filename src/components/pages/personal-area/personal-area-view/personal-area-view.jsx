import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { personalAreaPath, balancePath } from '../../../../constants';

import { compose } from '../../../../utils';
import LeftAside from './left-aside';
import RightAside from './right-aside';
import Balance from './balance-page';

import style from './personal-area.module.scss';

const PersonalAreaView = () => (
    <div className={style.personalAreaWrapper}>
        <LeftAside />
        <Switch>
            <Route
                path={`${personalAreaPath}${balancePath}`}
                component={Balance}
                exact
            />
        </Switch>
        <RightAside />
    </div>
);

export default compose(withRouter)(PersonalAreaView);
