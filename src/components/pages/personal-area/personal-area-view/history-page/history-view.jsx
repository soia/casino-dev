/* eslint-disable react/no-array-index-key */
import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import DatePicker from 'react-datepicker';
import { compose } from '../../../../../utils';
import style from './history.module.scss';

const HistoryView = ({
    date,
    changeDate,
    match: {
        params: { id },
    },
}) => {
    const { t } = useTranslation();

    return (
        <div className={style.history}>
            <div className={style.history__headerContainer}>
                <p className={style.history__headerContainer__id}>{id}</p>
                <DatePicker
                    selected={date}
                    onChange={changeDate}
                    dateFormat="dd/MM/yyyy"
                    className={style.history__headerContainer_datePicker}
                    placeholderText={t('general.datePlaceholder')}
                />
            </div>

        </div>
    );
};

HistoryView.defaultProps = {
    date: '',
    match: {},
    changeDate: () => {},
};

HistoryView.propTypes = {
    date: PropTypes.any,
    match: PropTypes.object,
    changeDate: PropTypes.func,
};

export default compose(withRouter)(HistoryView);
