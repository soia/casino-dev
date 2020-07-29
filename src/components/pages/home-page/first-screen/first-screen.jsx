import React from 'react';
import { useTranslation } from 'react-i18next';
import TextTruncate from 'react-text-truncate';
import ReactWOW from 'react-wow';
import firstScreenBg from './images/firstScreenBg1.svg';
import firstScreenIcon from './images/firstScreenIcon.svg';
import chip from './images/chip.svg';
import style from './first-screen.module.scss';

const FirstScreen = () => {
    const { t } = useTranslation();

    const bgImage = {
        backgroundImage: `url(${firstScreenBg})`,
    };

    return (
        <div
            className={style.firstScreen}
            style={window.innerWidth > 767 ? bgImage : null}
        >
            <ReactWOW disabled={!(window.innerWidth > 767)} animation="fadeInRight" delay="0.01s">
                <img
                    className={style.firstScreen__icon}
                    src={firstScreenIcon}
                    alt="firstScreenIcon"
                />
            </ReactWOW>
            <ReactWOW disabled={!(window.innerWidth > 767)} animation="bounceInDown" delay="1s">
                <img
                    className={style.firstScreen__chip}
                    src={chip}
                    alt="firstScreenIcon"
                />
            </ReactWOW>
            <div className={style.firstScreen__leftSide}>
                <div>
                    <ReactWOW disabled={!(window.innerWidth > 767)} animation="fadeInLeft" delay="0.01s">
                        <div className={style.firstScreen__leftSide_titleWrapper}>
                            <div className={style.firstScreen__leftSide_title}>
                                <TextTruncate
                                    line={2}
                                    element="h1"
                                    truncateText="…"
                                    text="CNG-"
                                />
                            </div>
                            <div className={style.firstScreen__leftSide_title}>
                                <TextTruncate
                                    line={2}
                                    element="div"
                                    truncateText="…"
                                    text={t('firstScreen.title')}
                                />
                            </div>
                        </div>
                    </ReactWOW>
                    <ReactWOW disabled={!(window.innerWidth > 767)} animation="fadeInLeft" delay="0.01s">
                        <div>
                            <div className={style.firstScreen__leftSide_subtitle}>
                                <TextTruncate
                                    line={10}
                                    element="div"
                                    truncateText="…"
                                    text={t('firstScreen.subtitle')}
                                />
                            </div>
                        </div>
                    </ReactWOW>
                </div>
            </div>
        </div>
    );
};

export default FirstScreen;
