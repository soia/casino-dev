/* eslint-disable */
import { AUTH_MODAL } from '../constants';

export function authModal(state, action) {
    if (state === undefined) {
        return {
            login: false,
            signUp: false
        };
    }
    switch (action.type) {
        case AUTH_MODAL.OPEN_LOGIN:
            return {
                login: true,
                signUp: false
            };

        case AUTH_MODAL.OPEN_SIGNUP:
            return {
                login: false,
                signUp: true
            };

        case AUTH_MODAL.CLOSE_AUTH_MODAL:
            return {
                login: false,
                signUp: false
            };

        default:
            return state;
    }
}
