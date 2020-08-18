import { message } from 'antd';
import axios from 'axios';

export default class PostService {
    getResource = async (url, data, method) => {
        const user = JSON.parse(localStorage.getItem('user'));
        const getToken = () => user.data.access_token;

        const options = {
            method,
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
            data,
            url: `${process.env.REACT_APP_API_URL_PROVIDER}${url}`,
        };
        const response = await axios(options);

        if (response.status === 401) {
            this.logout();
        }

        if (response.status !== 200) {
            response.json().then(errorMessage => {
                message.error(errorMessage.message ? errorMessage.message : errorMessage.error_description, 2);
            });
        }

        return response.data;
    };

    logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('updateTokenTime');
        document.location.reload(true);
    };

    createProviderBot = async data => {
        const res = await this.getResource('/bot-configs/', data, 'POST');
        return res;
    };

    createGeneratorBot = async (data, pairName) => {
        const res = await this.getResource(`/liquidity/marketmaker/${pairName}`, data, 'POST');
        return res;
    };

    saveOrderPairName = async pairName => {
        const res = await this.getResource(`/orders/${pairName}`, undefined, 'PUT');
        return res;
    };

    createScheduledOrder = async data => {
        const res = await this.getResource('/orders', data, 'POST');
        return res;
    };

    updateAllStatus = async status => {
        const res = await this.getResource(`/orders/status/${status}`, undefined, 'PUT');
        return res;
    };
}
