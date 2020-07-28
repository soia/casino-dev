import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { message } from 'antd';
import ReactWOW from 'react-wow';
import Button from '../../small-components/button';
import useDocumentScrollThrottled from './useDocumentScrollThrottled';
import SelectLanguage from '../../language';
import logo from '../../assets/images/logo.svg';
import style from './header.module.scss';
import './header.scss';
import 'antd/dist/antd.css';
import rectangleGrey from '../../assets/images/rectangle-grey.svg';

const Header = () => {
    const { t } = useTranslation();

    const [shouldHideHeader, setShouldHideHeader] = useState(false);
    const [shouldShowShadow, setShouldShowShadow] = useState(false);

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

    const minHeight = document.documentElement.scrollTop > 500;
    const shadowStyle = minHeight && shouldShowShadow ? 'shadow' : '';
    const hiddenStyle = minHeight && shouldHideHeader ? 'hidden' : '';

    const regtangleButtonStyle = {
        backgroundImage: `url(${rectangleGrey})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
    };

    const openLogin = () => {
        message.success('Coming Soon!', 2);
    };

    const openSignUp = () => {
        message.success('Coming Soon!', 2);
    };

    return (
        <header className={`header ${shadowStyle} ${hiddenStyle}`}>
            <div className={style.header} id="header">
                <ReactWOW animation="fadeInDown" delay="0.10s">
                    <Link to="/" className={style.header__logo}>
                        <img src={logo} alt="logo" />
                    </Link>
                </ReactWOW>
                <div className={style.header__rightSide}>
                    <ReactWOW animation="fadeInDown" delay="0.10s">
                        <Button
                            className={style.header__login}
                            onClick={openLogin}
                            type="button"
                            style={regtangleButtonStyle}
                        >
                            {t('header.signIn')}
                        </Button>
                        <Button
                            onClick={openSignUp}
                            type="button"
                            className={style.header__signUp}
                            style={regtangleButtonStyle}
                        >
                            {t('header.registration')}
                        </Button>
                    </ReactWOW>
                    <ReactWOW animation="fadeInDown" delay="0.10s">
                        <div style={{ display: 'flex' }}>
                            <SelectLanguage />
                        </div>
                    </ReactWOW>
                </div>
            </div>
        </header>
    );
};

export default Header;
