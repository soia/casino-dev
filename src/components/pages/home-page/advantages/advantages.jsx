import React, { Fragment } from 'react';
import ReactWOW from 'react-wow';
import { useTranslation } from 'react-i18next';

import blueCoin from '../../../assets/images/blueCoin.svg';
import advantages1 from './images/advantages1.svg';
import advantages2 from './images/advantages2.svg';
import advantages3 from './images/advantages3.svg';

import style from './advantages.module.scss';

const Advantages = () => {
    const { t } = useTranslation();

    return (
        <Fragment>
            <div className={style.advantages} id="advantages">
                <ReactWOW animation="fadeInUp" delay="0.05s">
                    <p className={style.advantages__title}>{t('advantages.title')}</p>
                    <div className={style.advantages__wrapper}>
                        <div className={style.advantages__wrapper_item}>
                            <img
                                className={style.advantages__wrapper_icon}
                                src={advantages1}
                                alt="advantages"
                            />
                            <p className={style.advantages__wrapper_content}>
                                {t('advantages.content1')}
                            </p>
                        </div>
                        <div className={style.advantages__wrapper_item}>
                            <img
                                className={style.advantages__wrapper_icon}
                                src={advantages2}
                                alt="advantages"
                            />
                            <p className={style.advantages__wrapper_content}>
                                {t('advantages.content2')}
                            </p>
                        </div>
                        <div className={style.advantages__wrapper_item}>
                            <img
                                className={style.advantages__wrapper_icon}
                                src={advantages3}
                                alt="advantages"
                            />
                            <p className={style.advantages__wrapper_content}>
                                {t('advantages.content3')}
                            </p>
                        </div>
                    </div>
                </ReactWOW>
                <ReactWOW animation="fadeInUp" delay="0.05s">
                    <img
                        className={style.advantages_coin}
                        src={blueCoin}
                        alt="blueCoin"
                    />
                </ReactWOW>
            </div>
        </Fragment>
    );
};

export default Advantages;
