import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ReactWOW from 'react-wow';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { message } from 'antd';
import { termOfServicePath, privacyPolicyPath, personalAreaPath } from '../../../constants';
import { compose } from '../../../utils';
import logo from '../../assets/images/logo.svg';
import style from './footer.module.scss';
import footerCoins from '../../assets/images/footerCoins.svg';

const Footer = ({ location: { pathname } }) => {
    const { t } = useTranslation();

    const comingSoon = () => {
        message.success('Coming Soon!', 2);
    };

    const pathName = pathname;
    const matchPathName = pathName.split('/')[1];
    if (`/${matchPathName}` === personalAreaPath) {
        return null;
    }

    return (
        <footer className={style.footer}>
            <ReactWOW disabled={!(window.innerWidth > 767)} animation="fadeInUp" delay="0.01s">
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
                    <Link
                        to={termOfServicePath}
                        className={style.footer__links}
                    >
                        {t('general.termOfUse')}
                    </Link>
                    <Link
                        to={privacyPolicyPath}
                        className={style.footer__links}
                    >
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

export default compose(
    withRouter,
)(Footer);
