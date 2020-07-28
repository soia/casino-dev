import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Tooltip } from 'antd';
import { withRouter } from 'react-router-dom';

import { compose } from '../../../utils';
import { authModalActions } from '../../../actions';

import Img from '../img';
import Button from '../button';
import StarRaiting from '../star-raiting';
import {
    PENDING,
    COMPLETED,
    CANCELLED,
    OPENED,
    CLOSED,
    YOUROPENED,
    ARBITRAGE,
    personalAreaPath,
    dashboardPath,
    profilePath,
    BUY,
    SELL,
    EXCHANGE,
} from '../../../constants';

import { countries } from '../../../helpers/countries';

import style from './table-row.module.scss';

const TableRow = ({
    logoSrc,
    userName,
    raiting,
    coinBuy,
    coinSell,
    transfer,
    country,
    limitsFrom,
    limitsTo,
    cost,
    onClick,
    statusOrder,
    showStatusOrder,
    online,
    fast,
    status,
    speed,
    userId,
    history,
    loggedIn,
    openLogin,
    allCoins,
    userInfo: { id: currentUserId },
    location: { pathname },
}) => {
    const { t } = useTranslation();

    let buttonStyle = '';
    let costStyle = '';
    let buttonText = '';
    const isDashboardPath = pathname === `${personalAreaPath}${dashboardPath}`;

    if (transfer === BUY) {
        buttonStyle = style.tableRowWrapper__buttonWrapper_buttonSell;
        buttonText = t('general.sell');

        if (isDashboardPath) {
            costStyle = style.tableRowWrapper__priceWrapper_costBuy;
        } else {
            costStyle = style.tableRowWrapper__priceWrapper_costSell;
        }
    }

    if (transfer === SELL) {
        buttonStyle = style.tableRowWrapper__buttonWrapper_buttonBuy;
        buttonText = t('general.buy');

        if (isDashboardPath) {
            costStyle = style.tableRowWrapper__priceWrapper_costSell;
        } else {
            costStyle = style.tableRowWrapper__priceWrapper_costBuy;
        }
    }

    if (transfer === EXCHANGE) {
        buttonStyle = style.tableRowWrapper__buttonWrapper_buttonExchange;
        costStyle = style.tableRowWrapper__priceWrapper_costExchange;
        buttonText = t('general.exchange');
    }

    const pending = PENDING === statusOrder ? (
        <p className={style.tableRowWrapper__statusWrapper_statusPending}>
            {t('general.pending')}
        </p>
    ) : null;

    const opened = OPENED === statusOrder ? (
        <p className={style.tableRowWrapper__statusWrapper_statusPending}>
            {t('general.opened')}
        </p>
    ) : null;

    const yourOpened = YOUROPENED === statusOrder ? (
        <p className={style.tableRowWrapper__statusWrapper_statusPending}>
            {t('general.yourOpened')}
        </p>
    ) : null;

    const completed = COMPLETED === statusOrder ? (
        <p className={style.tableRowWrapper__statusWrapper_statusCompleted}>
            {t('general.completed')}
        </p>
    ) : null;

    const canceled = CANCELLED === statusOrder ? (
        <p className={style.tableRowWrapper__statusWrapper_statusCanceled}>
            {t('general.disabled')}
        </p>
    ) : null;

    const closed = CLOSED === statusOrder ? (
        <p className={style.tableRowWrapper__statusWrapper_statusCanceled}>
            {t('general.closed')}
        </p>
    ) : null;

    const arbitrage = ARBITRAGE === statusOrder ? (
        <p className={style.tableRowWrapper__statusWrapper_statusCanceled}>
            {t('general.arbitrage')}
        </p>
    ) : null;

    const currentCountry = countries.map(item => {
        const { name, value } = item;
        return <Fragment key={value}>{value === country ? name : ''}</Fragment>;
    });

    let fixedCost = '';
    let currency = '';

    const fixed = parseFloat(cost).toFixed(5);
    fixedCost = fixed.replace(/0*$/, '');

    if (transfer === BUY) {
        currency = coinSell;
    } else {
        currency = coinBuy;
    }

    const pushToProfile = () => {
        history.push(`${personalAreaPath}${profilePath}/${userId}`);
    };

    const onlyFiatCoins = [];
    allCoins
        .filter(item => item.isCrypto === false)
        .map(item => {
            onlyFiatCoins.push(item.handle);
            return true;
        });

    const costWithDigitsAfterDot = onlyFiatCoins.includes(currency) ? +fixedCost : cost;

    return (
        <div className={style.tableRowWrapper}>
            <div
                onClick={loggedIn ? () => pushToProfile() : () => openLogin()}
                className={style.tableRowWrapper__logoStars}
            >
                <Img
                    className={style.tableRowWrapper__logo}
                    src={logoSrc}
                    status={status}
                    online={online}
                    speed={speed}
                    fast={fast}
                    userName={userName}
                    alt="logo"
                />
                <div className={style.tableRowWrapper__nameStarsWrapper}>
                    <p className={style.tableRowWrapper__nameStarsWrapper_name}>
                        {userName}
                    </p>
                    <StarRaiting raiting={parseInt(raiting, 16)} />
                </div>
            </div>
            <div className={style.tableRowWrapper__currencyWrapper}>
                <p className={style.tableRowWrapper__currencyWrapper_title}>
                    {t('general.currency')}
                </p>
                <p className={style.tableRowWrapper__currencyWrapper_value}>
                    {transfer === BUY ? coinBuy : coinSell} /{' '}
                    {transfer === BUY ? coinSell : coinBuy}
                </p>
            </div>
            <p className={style.tableRowWrapper__transfer}>
                {transfer === EXCHANGE ? 'Crypto transfer' : 'Bank transfer'}
            </p>

            <Tooltip placement="topLeft" title={currentCountry}>
                <p className={style.tableRowWrapper__country}>{currentCountry}</p>
            </Tooltip>

            <div className={style.tableRowWrapper__currencyRatioWrapper}>
                <p className={style.tableRowWrapper__currencyRatioWrapper_title}>
                    {t('general.amount')}
                </p>
                <Tooltip
                    placement="topLeft"
                    title={`${limitsFrom} - ${limitsTo} ${
                        transfer === BUY ? coinBuy : coinSell
                    }`}
                >
                    <p className={style.tableRowWrapper__currencyRatioWrapper_value}>
                        {limitsFrom}
                        {' - '}
                        {limitsTo} {transfer === BUY ? coinBuy : coinSell}
                    </p>
                </Tooltip>
            </div>

            <div className={style.tableRowWrapper__priceWrapper}>
                <p className={style.tableRowWrapper__priceWrapper_price}>
                    {t('general.price')}
                </p>
                <Tooltip
                    placement="topLeft"
                    title={`${costWithDigitsAfterDot} ${
                        transfer === BUY ? coinSell : coinBuy
                    } / ${transfer === BUY ? coinBuy : coinSell}`}
                >
                    <p className={costStyle}>
                        {costWithDigitsAfterDot} {transfer === BUY ? coinSell : coinBuy} /{' '}
                        {transfer === BUY ? coinBuy : coinSell}
                    </p>
                </Tooltip>
            </div>
            {showStatusOrder ? (
                <div className={style.tableRowWrapper__statusWrapper}>
                    <p className={style.tableRowWrapper__statusWrapper_statusLabel}>
                        {t('general.status')}
                    </p>
                    {pending}
                    {opened}
                    {completed}
                    {canceled}
                    {closed}
                    {yourOpened}
                    {arbitrage}
                </div>
            ) : (
                <Fragment>
                    {currentUserId !== userId ? (
                        <div className={style.tableRowWrapper__buttonWrapper}>
                            <Button
                                type="button"
                                className={buttonStyle}
                                onClick={onClick}
                            >
                                {buttonText}
                            </Button>
                        </div>
                    ) : (
                        <div className={style.tableRowWrapper__yourOrderWrapper}>
                            <p className={style.tableRowWrapper__yourOrderWrapper_button}>
                                {t('general.yourOrder')}
                            </p>
                        </div>
                    )}
                </Fragment>
            )}
        </div>
    );
};

TableRow.defaultProps = {
    logoSrc: '',
    userName: '',
    raiting: 0,
    coinBuy: '',
    coinSell: '',
    transfer: '',
    country: '',
    cost: 0,
    statusOrder: '',
    limitsFrom: 0,
    limitsTo: 0,
    status: false,
    speed: false,
    fast: false,
    online: false,
    loggedIn: false,
    showStatusOrder: false,
    location: {},
    userInfo: {},
    history: {},
    allCoins: [],
    onClick: () => {},
    openLogin: () => {},
};

TableRow.propTypes = {
    logoSrc: PropTypes.string,
    userName: PropTypes.string,
    userId: PropTypes.number.isRequired,
    raiting: PropTypes.number,
    coinBuy: PropTypes.string,
    coinSell: PropTypes.string,
    statusOrder: PropTypes.string,
    transfer: PropTypes.string,
    country: PropTypes.string,
    limitsFrom: PropTypes.any,
    limitsTo: PropTypes.any,
    cost: PropTypes.any,
    status: PropTypes.bool,
    speed: PropTypes.bool,
    fast: PropTypes.bool,
    online: PropTypes.bool,
    loggedIn: PropTypes.bool,
    showStatusOrder: PropTypes.bool,
    allCoins: PropTypes.instanceOf(Array),
    onClick: PropTypes.func,
    openLogin: PropTypes.func,
    location: PropTypes.object,
    userInfo: PropTypes.object,
    history: PropTypes.object,
};

const mapStateToProps = state => {
    const {
        getUserInfo: { userInfo },
        getAllCoins: { allCoins },
        authentication: { loggedIn },
    } = state;

    return {
        userInfo,
        loggedIn,
        allCoins,
    };
};

const mapDispatchToProps = dispatch => ({
    openLogin: () => {
        dispatch(authModalActions.openLogin());
    },
});

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
    withRouter,
)(TableRow);
