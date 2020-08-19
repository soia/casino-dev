import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ReactWOW from 'react-wow';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { store } from 'react-notifications-component';
import {
    termOfServicePath,
    privacyPolicyPath,
    personalAreaPath,
} from '../../../constants';
import { compose } from '../../../utils';
import logo from '../../assets/images/logo.svg';
import logoBlueText from '../../assets/images/logoBlueText.svg';
import style from './footer.module.scss';
import footerCoins from '../../assets/images/footerCoins.svg';
import mobileLogo from '../../assets/images/mobile-logo-with-blue-text.svg';

const Footer = ({ location: { pathname } }) => {
    const { t } = useTranslation();

    const comingSoon = () => {
        store.addNotification({
            message: 'Coming soon!',
            type: 'default',
            insert: 'top',
            container: 'top-right',
            animationIn: ['animated', 'slideInRight'],
            animationOut: ['animated', 'zoomOut'],
            dismiss: {
                duration: 3000,
                pauseOnHover: true,
            },
        });
    };

    const pathName = pathname;
    const matchPathName = pathName.split('/')[1];
    if (`/${matchPathName}` === personalAreaPath) {
        return (
            <footer className={style.footerPersonalArea}>
                <Link to="/" className={style.footerPersonalArea__logo}>
                    <img
                        src={logoBlueText}
                        alt="logo"
                        className={style.footerPersonalArea__logo_img}
                    />
                    <img
                        src={mobileLogo}
                        alt="logo"
                        className={style.footerPersonalArea__logo_mobileImg}
                    />
                </Link>
                <div className={style.footerPersonalArea__column}>
                    <h4 className={style.footerPersonalArea__title}>
                        {t('footer.company')}
                    </h4>
                    <div className={style.footerPersonalArea__linksWrapper}>
                        <Link to="/" className={style.footerPersonalArea__link}>
                            {t('header.about')}
                        </Link>
                        <Link to="/" className={style.footerPersonalArea__link}>
                            {t('advantages.title')}
                        </Link>
                    </div>
                </div>
                <div className={style.footerPersonalArea__column}>
                    <h4 className={style.footerPersonalArea__title}>
                        {' '}
                        {t('footer.support')}
                    </h4>
                    <div className={style.footerPersonalArea__linksWrapper}>
                        <Link to="/" className={style.footerPersonalArea__link}>
                            FAQ
                        </Link>
                        <Link to="/" className={style.footerPersonalArea__link}>
                            {t('general.privacyPolicy')}
                        </Link>
                    </div>
                </div>
                <div className={style.footerPersonalArea__column}>
                    <h4 className={style.footerPersonalArea__title}>
                        {t('general.socialNetwork')}
                    </h4>
                    <div className={style.footerPersonalArea__linksWrapper}>
                        <a
                            href="/"
                            target="_blank"
                            className={style.footerPersonalArea__link}
                        >
                            Facebook
                        </a>
                        <a
                            href="/"
                            target="_blank"
                            className={style.footerPersonalArea__link}
                        >
                            YouTube
                        </a>
                    </div>
                </div>
                <div className={style.footerPersonalArea__copyright}>
                    Copyright © <br /> {new Date().getFullYear()} CNG token
                </div>
            </footer>
        );
    }

    return (
        <footer className={style.footer}>
            <ReactWOW
                disabled={!(window.innerWidth > 767)}
                animation="fadeInUp"
                delay="0.01s"
            >
                <img className={style.footer_coins} src={footerCoins} alt="footerCoins" />
            </ReactWOW>
            <div className={style.footer__copyright}>
                <Link to="/" className={style.footer__logo}>
                    <img src={logo} alt="logo" />
                </Link>
                <p className={style.footer__copyright_content}>
                    Copyright
                    <span className={style.footer__copyright_symbol}>&#169;</span>
                    <span>2020 CNG tokens</span>
                </p>
            </div>
            <div className={style.footer__linksWrapper}>
                <div className={style.footer__about}>
                    <h3 className={style.footer__title}>{t('footer.company')}</h3>

                    <AnchorLink href="/" className={style.footer__links}>
                        {t('footer.aboutUs')}
                    </AnchorLink>
                    <AnchorLink href="/" className={style.footer__links}>
                        {t('footer.benefits')}
                    </AnchorLink>
                    <AnchorLink href="/" className={style.footer__links}>
                        {t('footer.gameToken')}
                    </AnchorLink>
                    <AnchorLink href="/" className={style.footer__links}>
                        {t('footer.principleOfOperation')}
                    </AnchorLink>
                    <AnchorLink href="/" className={style.footer__links}>
                        {t('footer.tokenImplementation')}
                    </AnchorLink>
                </div>
                <div className={style.footer__support}>
                    <h3 className={style.footer__title}>{t('footer.support')}</h3>
                    <Link to={termOfServicePath} className={style.footer__links}>
                        {t('general.termOfUse')}
                    </Link>
                    <Link to={privacyPolicyPath} className={style.footer__links}>
                        {t('footer.privacyPolice')}
                    </Link>
                </div>
                <div className={style.footer__services}>
                    <h3 className={style.footer__title}> {t('footer.helpCenter')}</h3>
                    <span onClick={() => comingSoon()} className={style.footer__links}>
                        Facebook
                    </span>
                    <span onClick={() => comingSoon()} className={style.footer__links}>
                        YouTube
                    </span>
                    <span onClick={() => comingSoon()} className={style.footer__links}>
                        Instagram
                    </span>
                </div>
            </div>
            <p className={style.footer__copyright_contentMobile}>
                Copyright
                <span className={style.footer__copyright_symbol}>&#169;</span>
                <span>{new Date().getFullYear()} CNG tokens</span>
            </p>
        </footer>
    );
};

Footer.defaultProps = {
    location: {},
};

Footer.propTypes = {
    location: PropTypes.object,
};

export default compose(withRouter)(Footer);
