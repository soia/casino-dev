/* eslint-disable */

import { AUTH_MODAL } from '../constants';

const openLogin = () => {
    return {
        type: AUTH_MODAL.OPEN_LOGIN,
    };
}

const openSignUp = () => {
    return {
        type: AUTH_MODAL.OPEN_SIGNUP,
    };
}

const openPasswordRecovery = () => {
    return {
        type: AUTH_MODAL.OPEN_PASSWORD_RECOVERY,
    };
}

const closeModal = () => {
    return {
        type: AUTH_MODAL.CLOSE_AUTH_MODAL,
    };
}

export const authModalActions = {
    openLogin,
    openSignUp,
    openPasswordRecovery,
    closeModal,
};
