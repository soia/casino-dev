/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useTranslation } from 'react-i18next';
import style from './balance.module.scss';
import './balance.scss';

const BalanceView = () => {
    const { t } = useTranslation();

    return (
        <div className={style.balance}>
            {t('aside.balance')}
        </div>
    );
};

export default BalanceView;
