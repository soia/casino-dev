/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useTranslation } from 'react-i18next';
import style from './withdrawal.module.scss';
import './withdrawal.scss';

const WithdrawalView = () => {
    const { t } = useTranslation();

    return (
        <div className={style.withdrawal}>
            {t('general.withdrawal')}
        </div>
    );
};

export default WithdrawalView;
