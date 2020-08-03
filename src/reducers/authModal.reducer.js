/* eslint-disable */
import { AUTH_MODAL } from '../constants';

export function authModal(state, action) {
    if (state === undefined) {
        return {
            login: false,
            signUp: false,
            passwordRecovery: false,
        };
    }
    switch (action.type) {
        case AUTH_MODAL.OPEN_LOGIN:
            return {
                login: true,
                signUp: false,
                passwordRecovery: false,
            };

        case AUTH_MODAL.OPEN_SIGNUP:
            return {
                login: false,
                signUp: true,
                passwordRecovery: false,
            };

        case AUTH_MODAL.OPEN_PASSWORD_RECOVERY:
            return {
                login: false,
                signUp: false,
                passwordRecovery: true,
            };

        case AUTH_MODAL.CLOSE_AUTH_MODAL:
            return {
                login: false,
                signUp: false,
                passwordRecovery: false,
            };

        default:
            return state;
    }
}
