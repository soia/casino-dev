import * as moment from 'moment';

const clientId = process.env.REACT_APP_CLIENT_ID;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

const user = JSON.parse(localStorage.getItem('user'));
const updateTokenTime = JSON.parse(localStorage.getItem('updateTokenTime'));
const expiresTokenTime = user ? updateTokenTime + user.expires_in : 0;

const currentTime = moment().unix();

export {
    clientId, clientSecret, updateTokenTime, expiresTokenTime, currentTime,
};
