/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useTranslation } from 'react-i18next';
import style from './history.module.scss';
import './history.scss';

const HistoryView = () => {
    const { t } = useTranslation();

    return (
        <div className={style.history}>
            {t('aside.history')}
        </div>
    );
};

export default HistoryView;
