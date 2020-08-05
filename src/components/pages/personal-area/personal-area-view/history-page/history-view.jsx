/* eslint-disable react/no-array-index-key */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import DatePicker from 'react-datepicker';
import style from './history.module.scss';

const HistoryView = ({
    date, changeDate, activeTab, TABS, setActiveTab,
}) => {
    const { t } = useTranslation();

    let operationStyle = {};
    let betHistoryStyle = {};

    if (activeTab === TABS.OPERATIONS_HISTORY) {
        operationStyle = style.history__tabsWrapper_itemActive;
    }

    if (activeTab === TABS.BET_HISTORY) {
        betHistoryStyle = style.history__tabsWrapper_itemActive;
    }

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
                <div
                    onClick={() => setActiveTab(TABS.OPERATIONS_HISTORY)}
                    className={classNames(
                        style.history__tabsWrapper_item,
                        operationStyle,
                    )}
                >
                    {t('history.operationsHistory')}
                </div>
                <div
                    onClick={() => setActiveTab(TABS.BET_HISTORY)}
                    className={classNames(
                        style.history__tabsWrapper_item,
                        betHistoryStyle,
                    )}
                >
                    {t('history.betHistory')}
                </div>
            </div>
        </div>
    );
};

HistoryView.defaultProps = {
    date: '',
    activeTab: '',
    changeDate: () => {},
    setActiveTab: () => {},
};

HistoryView.propTypes = {
    date: PropTypes.any,
    activeTab: PropTypes.string,
    TABS: PropTypes.object.isRequired,
    changeDate: PropTypes.func,
    setActiveTab: PropTypes.func,
};

export default HistoryView;
