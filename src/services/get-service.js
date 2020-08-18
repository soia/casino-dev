import { message } from 'antd';
import axios from 'axios';

export default class GetService {
    getResource = async url => {
        const user = JSON.parse(localStorage.getItem('user'));
        const getToken = () => user.data.access_token;

        const response = await axios.get(`${process.env.REACT_APP_API_URL_PROVIDER}${url}`, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });

        if (response.status !== 200) {
            response.json().then(errorMessage => {
                message.error(errorMessage.message ? errorMessage.message : errorMessage.error_description, 2);
            });

            if (response.status === 401) {
                this.logout();
            }

            throw new Error(
                `Could not fetch ${process.env.REACT_APP_API_URL_PROVIDER}${url},
                received ${response.status}`,
            );
        }
        return response.data;
    };

    logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('updateTokenTime');
        document.location.reload(true);
    };

    botConfigs = async () => {
        const res = await this.getResource('/bot-configs');
        return res;
    };

    liquidityMarketmaker = async () => {
        const res = await this.getResource('/liquidity/marketmaker');
        return res;
    };

    getOneliquidityMarketmaker = async id => {
        const res = await this.getResource(`/liquidity/marketmaker/${id}`);
        return res;
    };

    getAllCoins = async () => {
        const res = await this.getResource('/pairs/BINANCE');
        return res;
    };

    getCommonPairs = async () => {
        const res = await this.getResource('/pairs/commons/BINANCE');
        return res;
    };

    getTargetPairs = async () => {
        const res = await this.getResource('/pairs/target');
        return res;
    };

    getProviderStatistics = async (pairName, chartType, side) => {
        const res = await this.getResource(
            `/statistics/charts/${pairName}/${chartType}?side=${side}&statisticTimeUnit=MINUTE`,
        );
        return res;
    };

    getProviderConfiguredVolume = async (pairName, chartType) => {
        const res = await this.getResource(`/statistics/charts/${pairName}/${chartType}?statisticTimeUnit=MINUTE`);
        return res;
    };

    getWorkLoadTimeLine = async (pairName, chartType) => {
        const res = await this.getResource(`/statistics/charts/${pairName}/${chartType}`);
        return res;
    };

    getLifeCycleTimeLine = async (pairName, chartType) => {
        const res = await this.getResource(`/statistics/charts/${pairName}/${chartType}`);
        return res;
    };

    getOrders = async () => {
        const res = await this.getResource('/orders');
        return res;
    };

    getOneOrder = async pairName => {
        const res = await this.getResource(`/orders/${pairName}`);
        return res;
    };

    getScheduledOrders = async () => {
        const res = await this.getResource('/scheduled-orders');
        return res;
    };

    getOneScheduledOrder = async pairName => {
        const res = await this.getResource(`/scheduled-orders/${pairName}`);
        return res;
    };

    getAvailableNewPairs = async () => {
        const res = await this.getResource('/orders/pairs');
        return res;
    };

    getCurrenciesAll = async () => {
        const res = await this.getResource('/currencies/all');
        return res;
    };
}
