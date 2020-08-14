/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import toFixedBigValue from '../../../../../helpers/big-number';
import Field from '../../../../small-components/field';
import style from './withdrawal.module.scss';
import './withdrawal.scss';

const WithdrawalView = ({
    address,
    amount,
    addressErrors,
    amountErrors,
    fee,
    inputOnchange,
    setMaxAmount,
    submit,
}) => {
    const { t } = useTranslation();

    const total = +amount > +fee ? toFixedBigValue(+amount - +fee, 8) : '';

    return (
        <div className={style.withdrawal}>
            <div className={style.withdrawal__container}>
                <div className={style.withdrawal__wrapper}>
                    <div className={style.withdrawal__inputWrapper}>
                        <Field
                            id="address"
                            type="text"
                            placeholder={t('general.typeHere')}
                            name="address"
                            value={address}
                            onChange={inputOnchange}
                            error={addressErrors}
                            inputStyle={style.withdrawal__input}
                            inputColor="#B0AED3"
                            labelText={t('general.withdrawalAddress')}
                            labelStyle={style.withdrawal__label}
                        />
                    </div>
                    <div className={style.withdrawal__inputWrapper}>
                        <Field
                            id="amount"
                            type="text"
                            placeholder={t('general.typeHere')}
                            name="amount"
                            value={amount}
                            onChange={inputOnchange}
                            error={amountErrors}
                            inputStyle={style.withdrawal__amountInput}
                            inputColor="#B0AED3"
                            labelText={`${t('general.amount')} CNG`}
                            labelStyle={style.withdrawal__label}
                        />
                        <button
                            type="button"
                            className={style.withdrawal__maxBtn}
                            onClick={setMaxAmount}
                        >
                            <span>{t('general.max')}</span>
                        </button>
                    </div>
                    <div className={style.withdrawal__inputWrapper}>
                        <Field
                            id="total"
                            type="text"
                            name="total"
                            value={total}
                            inputStyle={style.withdrawal__input}
                            inputColor="#B0AED3"
                            labelText={`${t('general.total')} CNG`}
                            labelStyle={style.withdrawal__label}
                            disabled
                        />
                        <p className={style.withdrawal__fee}>
                            {t('general.fee')}: 0.0012 CNG
                        </p>
                    </div>
                </div>
                <button
                    type="button"
                    className={style.withdrawal__submitBtn}
                    onClick={submit}
                >
                    <span>{t('general.withdrawalRequest')}</span>
                </button>
            </div>
        </div>
    );
};

WithdrawalView.defaultProps = {
    address: '',
    amount: '',
    fee: '',
    addressErrors: {},
    amountErrors: {},
    inputOnchange: () => {},
    setMaxAmount: () => {},
    submit: () => {},
};

WithdrawalView.propTypes = {
    address: PropTypes.string,
    amount: PropTypes.string,
    fee: PropTypes.string,
    addressErrors: PropTypes.object,
    amountErrors: PropTypes.object,
    inputOnchange: PropTypes.func,
    setMaxAmount: PropTypes.func,
    submit: PropTypes.func,
};

export default WithdrawalView;
