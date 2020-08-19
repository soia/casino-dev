/* eslint-disable */
import { AUTH_MODAL } from '../constants';

export function authModal(state, action) {
    if (state === undefined) {
        return {
            login: false,
            signUp: false,
            passwordRecovery: false,
            twoFa: false,
        };
    }
    switch (action.type) {
        case AUTH_MODAL.OPEN_LOGIN:
            return {
                login: true,
                signUp: false,
                passwordRecovery: false,
                twoFa: false,
            };

        case AUTH_MODAL.OPEN_SIGNUP:
            return {
                login: false,
                signUp: true,
                passwordRecovery: false,
                twoFa: false,
            };

        case AUTH_MODAL.OPEN_PASSWORD_RECOVERY:
            return {
                login: false,
                signUp: false,
                passwordRecovery: true,
                twoFa: false,
            };

            case AUTH_MODAL.TWO_FA:
                return {
                    login: false,
                    signUp: false,
                    passwordRecovery: false,
                    twoFa: true,
                };

        case AUTH_MODAL.CLOSE_AUTH_MODAL:
            return {
                login: false,
                signUp: false,
                passwordRecovery: false,
                twoFa: false,
            };

        default:
            return state;
    }
}
