/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import backgroundImage from './images/right-aside-image.svg';
import { compose } from '../../../../../utils';

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
};

Aside.propTypes = {
    t: PropTypes.func,
};

const mapStateToProps = state => {
    const {
        authentication: { loggedIn },
    } = state;

    return {
        loggedIn,
    };
};

export default compose(withTranslation(), connect(mapStateToProps))(Aside);
