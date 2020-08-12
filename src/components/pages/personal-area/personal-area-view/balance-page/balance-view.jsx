/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import background from './images/background.svg';
import style from './balance.module.scss';
import './balance.scss';
import {
    personalAreaPath,
    depositPath,
    withdrawalPath,
} from '../../../../../constants/pathLocation';

const BalanceView = () => {
    const { t } = useTranslation();

    return (
        <div className={style.balance}>
            <div className={style.balance__container}>
                <div className={style.balance__wrapper}>
                    <p className={style.balance__wrapper_title}>
                        {t('general.yourCurrentBalance')}
                    </p>
                    <p className={style.balance__wrapper_amount}>20,03453335 CNG</p>
                </div>
                <div className={style.balance__buttonWrapper}>
                    <Link
                        to={`${personalAreaPath}${depositPath}`}
                        className={style.balance__buttonWrapper_deposit}
                    >
                        <span>{t('general.topUpMyBalance')}</span>
                    </Link>
                    <Link
                        to={`${personalAreaPath}${withdrawalPath}`}
                        className={style.balance__buttonWrapper_withdrawal}
                    >
                        <span>{t('general.iWantToWithdraw')}</span>
                    </Link>
                </div>
            </div>
            <img
                className={style.balance__backgroundImage}
                src={background}
                alt="background"
            />
        </div>
    );
};

export default BalanceView;
