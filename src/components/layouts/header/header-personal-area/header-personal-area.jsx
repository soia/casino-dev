import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SelectLanguage from '../../../language';
import { compose } from '../../../../utils';
import Img from '../../../small-components/img/img';
import {
    personalAreaPath,
    depositPath,
    profileDataPath,
} from '../../../../constants/pathLocation';
import logo from '../../../assets/images/logoBlueText.svg';
import mobileLogo from '../../../assets/images/mobile-logo.svg';
import avatar from './avatar.png';
import style from './header-personal-area.module.scss';

const HeaderPersonalArea = () => {
    const { t } = useTranslation();
    return (
        <header className={style.header}>
            <Link to="/" className={style.header__logo}>
                <img className={style.header__logo_img} src={logo} alt="logo" />
                <img className={style.header__logo_imgMobile} src={mobileLogo} alt="logo" />
            </Link>
            <div className={style.header__balanceWrapper}>
                <p className={style.header__balanceWrapper_title}>{t('general.yourCurrentBalance')}</p>
                <p className={style.header__balanceWrapper_amount}>20,03453335 CNG</p>
            </div>
            <div className={style.header__buttonWrapper}>
                <Link to={`${personalAreaPath}${depositPath}`} className={style.deposit}>
                    <span>{t('general.deposit')}</span>
                </Link>
            </div>
            <div className={style.header__rightSide}>
                <div className={style.header__rightSide_language}>
                    <SelectLanguage />
                </div>
                <Link
                    to={`${personalAreaPath}${profileDataPath}`}
                    className={style.header__rightSide_settings}
                >
                    <svg
                        width="19"
                        height="20"
                        viewBox="0 0 19 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17.0926 7.4612L18.5529 7.78609C18.8139 7.84424 19 8.08056 19 8.35382V11.6463C19 11.9195 18.8139 12.1559 18.5529 12.214L17.0926 12.5389C16.9657 12.9368 16.8084 13.3249 16.6227 13.6987L17.4311 14.9856C17.5755 15.2156 17.5437 15.5175 17.355 15.7106L15.08 18.0388C14.8913 18.2321 14.5963 18.2644 14.3716 18.1167L13.1141 17.2893C12.7488 17.4794 12.3696 17.6403 11.9808 17.7703L11.6634 19.2648C11.6067 19.5318 11.3756 19.7223 11.1086 19.7223H7.8914C7.62438 19.7223 7.39332 19.5318 7.33664 19.2648L7.01918 17.7703C6.6304 17.6403 6.25119 17.4794 5.88589 17.2893L4.62838 18.1167C4.40369 18.2644 4.1087 18.232 3.91997 18.0388L1.64499 15.7106C1.45625 15.5175 1.42451 15.2156 1.56889 14.9856L2.37732 13.6987C2.19163 13.3249 2.03435 12.9368 1.90736 12.5389L0.447052 12.214C0.186127 12.1559 0 11.9195 0 11.6463V8.35382C0 8.08056 0.186127 7.84424 0.447052 7.78609L1.90736 7.4612C2.03435 7.06333 2.19163 6.67525 2.37732 6.30141L1.56889 5.01448C1.42451 4.78454 1.45625 4.48265 1.64499 4.28949L3.91997 1.9613C4.1087 1.76815 4.40369 1.73566 4.62838 1.88342L5.88589 2.71076C6.25119 2.52073 6.6304 2.35977 7.01918 2.22981L7.33664 0.735341C7.39332 0.468313 7.62438 0.277832 7.8914 0.277832H11.1086C11.3756 0.277832 11.6067 0.468313 11.6634 0.735341L11.9808 2.22981C12.3696 2.35977 12.7488 2.52073 13.1141 2.71076L14.3716 1.88342C14.5963 1.73566 14.8913 1.76815 15.08 1.9613L17.355 4.28949C17.5437 4.48265 17.5755 4.78454 17.4311 5.01448L16.6227 6.30141C16.8084 6.67525 16.9657 7.06333 17.0926 7.4612ZM9.5 13.4861C11.3782 13.4861 12.9064 11.9222 12.9064 10.0001C12.9064 8.07789 11.3782 6.51399 9.5 6.51399C7.62177 6.51399 6.09362 8.07789 6.09362 10.0001C6.09362 11.9222 7.62177 13.4861 9.5 13.4861Z"
                            fill="#D8D6ED"
                        />
                    </svg>
                </Link>
                <Link to={`${personalAreaPath}${profileDataPath}`} className={style.header__logoWrapper}>
                    <Img
                        className={style.header__rightSide_logo}
                        src={avatar}
                        userName="Aquaman Washington"
                    />
                    <p className={style.header__rightSide_name}>
                        Aquaman <br /> Washington
                    </p>
                </Link>
            </div>
        </header>
    );
};

const mapStateToProps = state => {
    const {
        authentication: { loggedIn },
    } = state;

    return {
        loggedIn,
    };
};

export default compose(connect(mapStateToProps))(HeaderPersonalArea);
