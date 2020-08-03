import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose } from '../../../../utils';
import logo from '../../../assets/images/logoBlueText.svg';
import style from './header-personal-area.module.scss';

const HeaderPersonalArea = () => (
    <header className={style.header}>
        <Link to="/" className={style.header__logo}>
            <img src={logo} alt="logo" />
        </Link>
    </header>

);

const mapStateToProps = state => {
    const {
        authentication: { loggedIn },
    } = state;

    return {
        loggedIn,
    };
};

export default compose(
    connect(mapStateToProps),
)(HeaderPersonalArea);
