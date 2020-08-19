import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { compose } from '../../../utils';
import Field from '../../small-components/field';
import eye from '../personal-area/personal-area-view/profile-data-page/images/eye.svg';
import style from './password-recovery.module.scss';

class PasswordRecovery extends Component {
    static defaultProps = {
        t: () => {},
    };

    static propTypes = {
        t: PropTypes.func,
    };

    state = {
        password: '',
        confirmPassword: '',
        passwordErrors: {
            passwordCharactersError: '',
            passwordLengthError: '',
            passwordDigitError: '',
            passwordLettersError: '',
        },
        confirmPasswordErrors: {
            confirmPasswordCharactersError: '',
        },
        type: 'password',
    };

    inputOnchange = event => {
        const { name, value } = event.target;
        const { password, confirmPassword } = this.state;
        const { t } = this.props;
        const numbersLatinLetters = /[A-Za-z0-9]+$/;

        // PASSWORD VALIDATION
        if (name === 'password') {
            // only numbers and letters
            if (value === '' || numbersLatinLetters.test(value)) {
                this.setState(state => ({
                    [name]: value,
                    passwordErrors: {
                        ...state.passwordErrors,
                        passwordCharactersError: '',
                    },
                }));

                // min length 8 chars
                if (value.length < 8) {
                    this.setState(state => ({
                        [name]: value,
                        passwordErrors: {
                            ...state.passwordErrors,
                            passwordLengthError: t('error.password_at_least_8_chars'),
                        },
                    }));
                } else {
                    this.setState(state => ({
                        [name]: value,
                        passwordErrors: {
                            ...state.passwordErrors,
                            passwordLengthError: '',
                        },
                    }));
                }
                // min length 8 chars

                // at least one digit
                if (!/^(?=.*[0-9])/.test(value)) {
                    this.setState(state => ({
                        [name]: value,
                        passwordErrors: {
                            ...state.passwordErrors,
                            passwordDigitError: t('error.password_at_least_1_digit'),
                        },
                    }));
                    // at least one digit
                } else {
                    this.setState(state => ({
                        [name]: value,
                        passwordErrors: {
                            ...state.passwordErrors,
                            passwordDigitError: '',
                        },
                    }));
                }
                // at least one digit

                // at least one letters
                if (!/^(?=.*[a-z])/.test(value.toLowerCase())) {
                    this.setState(state => ({
                        [name]: value,
                        passwordErrors: {
                            ...state.passwordErrors,
                            passwordLettersError: t('error.password_at_least_1_letters'),
                        },
                    }));
                } else {
                    this.setState(state => ({
                        [name]: value,
                        passwordErrors: {
                            ...state.passwordErrors,
                            passwordLettersError: '',
                        },
                    }));
                }
                // at least one letters

                // paswords doesn't match
                if (confirmPassword.length > 0 && confirmPassword !== value) {
                    this.setState(state => ({
                        confirmPasswordErrors: {
                            ...state.confirmPasswordErrors,
                            confirmPasswordDoesntMatch: t(
                                'error.password_does_not_match',
                            ),
                        },
                    }));
                } else {
                    this.setState(state => ({
                        confirmPasswordErrors: {
                            ...state.confirmPasswordErrors,
                            confirmPasswordDoesntMatch: '',
                        },
                    }));
                }
                // paswords doesn't match
            } else {
                this.setState(state => ({
                    passwordErrors: {
                        ...state.passwordErrors,
                        passwordCharactersError: t(
                            'error.only_latin_letters_and_numbers_allowed',
                        ),
                    },
                }));
            }
            // PASSWORD VALIDATION
        }
        // PASSWORD VALIDATION

        // CONFIRM PASSWORD VALIDATION
        if (name === 'confirmPassword') {
            // only numbers and letters
            if (value === '' || numbersLatinLetters.test(value)) {
                this.setState(state => ({
                    [name]: value,

                    confirmPasswordErrors: {
                        ...state.confirmPasswordErrors,
                        confirmPasswordCharactersError: '',
                    },
                }));

                // paswords doesn't match
                if (value.length > 0 && password !== value) {
                    this.setState(state => ({
                        confirmPasswordErrors: {
                            ...state.confirmPasswordErrors,
                            confirmPasswordDoesntMatch: t(
                                'error.password_does_not_match',
                            ),
                        },
                    }));
                } else {
                    this.setState(state => ({
                        confirmPasswordErrors: {
                            ...state.confirmPasswordErrors,
                            confirmPasswordDoesntMatch: '',
                        },
                    }));
                }
                // paswords doesn't match
            } else {
                this.setState(state => ({
                    passwordErrors: {
                        ...state.passwordErrors,
                        confirmPasswordCharactersError: t(
                            'error.only_latin_letters_and_numbers_allowed',
                        ),
                    },
                }));
            }
            // PASSWORD VALIDATION
        }
        // CONFIRM PASSWORD VALIDATION
    };

    showHidePassword = () => {
        const { type } = this.state;
        this.setState({
            type: type === 'password' ? 'text' : 'password',
        });
    };

    submitNewPassword = event => {
        event.preventDefault();
        const {
            password,
            passwordErrors,
            confirmPassword,
            confirmPasswordErrors,
        } = this.state;
        const { t } = this.props;
        const copyPasswordErrors = Object.assign({}, passwordErrors);
        const copyConfirmPasswordErrors = Object.assign({}, confirmPasswordErrors);

        Object.keys(copyPasswordErrors).forEach(key => {
            if (!copyPasswordErrors[key]) delete copyPasswordErrors[key];
        });
        Object.keys(copyConfirmPasswordErrors).forEach(key => {
            if (!copyConfirmPasswordErrors[key]) delete copyConfirmPasswordErrors[key];
        });

        if (!password.length) {
            this.setState(state => ({
                passwordErrors: {
                    ...state.passwordErrors,
                    passwordLengthError: t('error.field_can_not_be_empty'),
                },
            }));
        } else if (!confirmPassword.length) {
            this.setState(state => ({
                confirmPasswordErrors: {
                    ...state.confirmPasswordErrors,
                    confirmPasswordCharactersError: t('error.field_can_not_be_empty'),
                },
            }));
        } else if (
            Object.keys(copyPasswordErrors).length === 0
            && Object.keys(copyConfirmPasswordErrors).length === 0
        ) {
            if (password && confirmPassword) {
                console.log(password, 'password');
            }
        }
    };

    render() {
        const {
            password,
            confirmPassword,
            passwordErrors,
            confirmPasswordErrors,
            type,
        } = this.state;
        const { t } = this.props;

        return (
            <div className={style.resetPasswordContainer}>
                <div>
                    <h3 className={style.resetPasswordContainer__title}>
                        {t('general.newPassword')}
                    </h3>
                    <div className={style.resetPasswordContainer__inputContainer}>
                        <div className={style.resetPasswordContainer__inputWrapper}>
                            <Field
                                id="password"
                                type={type}
                                placeholder={t('general.typeHere')}
                                name="password"
                                value={password}
                                onChange={this.inputOnchange}
                                error={passwordErrors}
                                inputStyle={style.resetPasswordContainer__input}
                                labelText={t('general.enterNewPassword')}
                                labelStyle={style.resetPasswordContainer__label}
                                inputColor="#B0AED3"
                                passwordType
                            />
                            {password.length >= 1 ? (
                                <div
                                    onClick={this.showHidePassword}
                                    className={style.resetPasswordContainer__inputWrapper_eye}
                                >
                                    <img src={eye} alt="eye" />
                                </div>
                            ) : null}
                        </div>
                        <div className={style.resetPasswordContainer__inputWrapper}>
                            <Field
                                id="confirmPassword"
                                type={type}
                                placeholder={t('general.typeHere')}
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={this.inputOnchange}
                                error={confirmPasswordErrors}
                                inputStyle={style.resetPasswordContainer__input}
                                labelText={t('general.confirmNewPassword')}
                                labelStyle={style.resetPasswordContainer__label}
                                inputColor="#B0AED3"
                                passwordType
                            />
                            {confirmPassword.length >= 1 ? (
                                <div
                                    onClick={this.showHidePassword}
                                    className={style.resetPasswordContainer__inputWrapper_eye}
                                >
                                    <img src={eye} alt="eye" />
                                </div>
                            ) : null}
                        </div>
                    </div>
                    <div
                        className={style.resetPasswordContainer__saveBtn}
                        onClick={this.submitNewPassword}
                    >
                        <span className={style.buttonText}>{t('general.apply')}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default compose(withTranslation())(PasswordRecovery);
