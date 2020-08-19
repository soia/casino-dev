import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Burger from 'react-css-burger';
import ReactWOW from 'react-wow';
import { Drawer } from 'antd';
import { authModalActions } from '../../../../actions/authModal.actions';
import Button from '../../../small-components/button';
import { compose } from '../../../../utils';
import useDocumentScrollThrottled from './useDocumentScrollThrottled';
import SelectLanguage from '../../../language';
import logo from '../../../assets/images/logo.svg';
import style from './header.module.scss';
import './header.scss';
import 'antd/dist/antd.css';

const Header = ({ dispatch, loggedIn }) => {
    const { t } = useTranslation();

    const [shouldHideHeader, setShouldHideHeader] = useState(false);
    const [shouldShowShadow, setShouldShowShadow] = useState(false);
    const [activeBurger, setBurgerState] = useState(false);
    const MINIMUM_SCROLL = 80;
    const TIMEOUT_DELAY = 400;

    useDocumentScrollThrottled(callbackData => {
        const { previousScrollTop, currentScrollTop } = callbackData;
        const isScrolledDown = previousScrollTop < currentScrollTop;
        const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

        setShouldShowShadow(currentScrollTop > 2);

        setTimeout(() => {
            setShouldHideHeader(isScrolledDown && isMinimumScrolled);
        }, TIMEOUT_DELAY);
    });

    const toggleBurger = () => {
        setBurgerState(!activeBurger);
    };

    const minHeight = document.documentElement.scrollTop > 500;
    const shadowStyle = minHeight && shouldShowShadow ? 'shadow' : '';
    const hiddenStyle = minHeight && shouldHideHeader ? 'hidden' : '';

    const openLogin = () => {
        dispatch(authModalActions.openLogin());
    };

    const openSignUp = () => {
        dispatch(authModalActions.openSignUp());
    };

    let drawerWidth;
    let drawerPaddingTop;
    if (window.innerWidth < 500) {
        drawerWidth = '100vw';
        drawerPaddingTop = '35vw';
    } else if (window.innerWidth > 499 && window.innerWidth < 1050) {
        drawerWidth = '50vw';
        drawerPaddingTop = '10vw';
    }

    const mobileMenuBody = {
        backgroundColor: '#FAFBFF',
        padding: `${drawerPaddingTop} 0 0 0`,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: 'inherit',
    };

    return (
        <header className={`header ${shadowStyle} ${hiddenStyle}`}>
            <div className={style.header} id="header">
                <ReactWOW
                    disabled={!(window.innerWidth > 767)}
                    animation="fadeInDown"
                    delay="0.01s"
                >
                    <Link to="/" className={style.header__logo}>
                        <img src={logo} alt="logo" />
                    </Link>
                </ReactWOW>
                <div className={style.header__rightSide}>
                    {loggedIn ? null
                        : (
                            <div className={style.header__rightSide_buttonWrapper}>
                                <ReactWOW
                                    disabled={!(window.innerWidth > 767)}
                                    animation="fadeInDown"
                                    delay="0.01s"
                                >
                                    <Button
                                        className={style.header__login}
                                        onClick={openLogin}
                                        type="button"
                                    >
                                        <span className={style.buttonText}>{t('header.signIn')}</span>
                                    </Button>
                                    <Button
                                        onClick={openSignUp}
                                        type="button"
                                        className={style.header__signUp}
                                    >
                                        <span className={style.buttonText}>{t('header.registration')}</span>
                                    </Button>
                                </ReactWOW>
                            </div>
                        )
                    }
                    <ReactWOW
                        disabled={!(window.innerWidth > 767)}
                        animation="fadeInDown"
                        delay="0.01s"
                    >
                        <div style={{ display: 'flex' }}>
                            <SelectLanguage />
                        </div>
                    </ReactWOW>
                </div>
                <div className={style.header__burgerMenu}>
                    <Burger
                        onClick={() => toggleBurger()}
                        active={activeBurger}
                        burger="spin"
                        color="white"
                        marginTop="0"
                        scale={0.65}
                    />
                    <Drawer
                        placement="right"
                        closable={false}
                        onClose={() => toggleBurger()}
                        visible={activeBurger}
                        bodyStyle={mobileMenuBody}
                        height="100vh"
                        width={drawerWidth}
                    >
                        <p style={{ textAlign: 'center' }}>Жду дизайн!</p>
                    </Drawer>
                </div>
            </div>
        </header>
    );
};

const mapStateToProps = state => {
    const {
        authModal: { login },
        authentication: { loggedIn },
    } = state;

    return {
        login,
        loggedIn,
    };
};

Header.defaultProps = {
    dispatch: () => {},
    loggedIn: false,
};

Header.propTypes = {
    dispatch: PropTypes.func,
    loggedIn: PropTypes.bool,
};

export default compose(connect(mapStateToProps))(Header);
