/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useTranslation } from 'react-i18next';
import style from './deposit.module.scss';
import './deposit.scss';

const DepositView = () => {
    const { t } = useTranslation();

    return (
        <div className={style.deposit}>
            {t('general.deposit')}
        </div>
    );
};

export default DepositView;
