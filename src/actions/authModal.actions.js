/* eslint-disable */

import { AUTH_MODAL } from '../constants';

function openLogin() {
    return {
        type: AUTH_MODAL.OPEN_LOGIN,
    };
}

function openSignUp() {
    return {
        type: AUTH_MODAL.OPEN_SIGNUP,
    };
}

function closeModal() {
    return {
        type: AUTH_MODAL.CLOSE_AUTH_MODAL,
    };
}

export const authModalActions = {
    openLogin,
    openSignUp,
    closeModal,
};
