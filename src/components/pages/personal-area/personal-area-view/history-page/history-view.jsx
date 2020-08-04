/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useTranslation } from 'react-i18next';
import DatePicker from 'react-datepicker';
import style from './history.module.scss';
import './history.scss';

const HistoryView = ({ date, changeDate }) => {
    const { t } = useTranslation();

    return (
        <div className={style.history}>
            <div className={style.history__tabsWrapper}>
                <DatePicker
                    selected={date}
                    onChange={changeDate}
                    dateFormat="dd/MM/yyyy"
                    className={style.history__tabsWrapper_datePicker}
                    placeholderText={t('general.datePlaceholder')}
                />
                <div className={style.history__tabsWrapper_item}>
                    {t('history.operationsHistory')}
                </div>
                <div className={style.history__tabsWrapper_item}>
                    {t('history.betHistory')}
                </div>
            </div>

        </div>
    );
};

export default HistoryView;
