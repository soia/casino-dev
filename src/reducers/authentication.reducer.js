/* eslint-disable */

import { USER_CONSTANTS } from '../constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
    switch (action.type) {
        case USER_CONSTANTS.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user,
            };
        case USER_CONSTANTS.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user,
            };
        case USER_CONSTANTS.LOGIN_FAILURE:
            return {};
        case USER_CONSTANTS.LOGOUT:
            return {};
        default:
            return state;
    }
}
