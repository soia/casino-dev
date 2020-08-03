/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import backgroundImage from './images/right-aside-image.svg';
import { compose } from '../../../../../utils';
import {
    personalAreaPath,
    balancePath,
    historyPath,
    profileDataPath,
    documentsPath,
} from '../../../../../constants';

import style from './aside.module.scss';

class Aside extends Component {
    mounted = true;

    state = {};

    componentWillUnmount() {
        this.mounted = false;
    }

    render() {
        const { t } = this.props;

        return (
            <aside id="right-aside" className={style.aside}>
                <p className={style.aside__name}>
                    Aquaman <br /> Washington
                </p>
                <div className={style.aside__balanceWrapper}>
                    <p className={style.aside__balanceWrapper_title}>
                        {t('general.yourCurrentBalance')}:
                    </p>
                    <p className={style.aside__balanceWrapper_amount}>20,03453335 </p>
                </div>
                <img
                    className={style.aside__backgroundImage}
                    src={backgroundImage}
                    alt="backgroundImage"
                />
            </aside>
        );
    }
}

Aside.defaultProps = {
    t: () => {},
    onClickAside: () => {},
};

Aside.propTypes = {
    t: PropTypes.func,
    onClickAside: PropTypes.func,
};

const mapStateToProps = state => {
    const {
        authentication: { loggedIn },
    } = state;

    return {
        loggedIn,
    };
};

export default compose(withTranslation(), connect(mapStateToProps), withRouter)(Aside);
