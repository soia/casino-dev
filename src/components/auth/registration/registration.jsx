import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import classNames from 'classnames';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import SelectSearch from 'react-select-search';
import { Checkbox } from 'antd';
import { termOfServicePath, privacyPolicyPath } from '../../../constants';
import { countries } from '../../../helpers/countries';
import { authModalActions } from '../../../actions/authModal.actions';
import { compose } from '../../../utils';
import closeIcon from '../../assets/images/close-white.svg';
import Field from '../../small-components/field';
import eye from '../../assets/images/white-eye.svg';
import ModalWindow from '../../small-components/modal-window/modal-widow';
import style from './registration.module.scss';

class Registration extends PureComponent {
    static defaultProps = {
        t: () => {},
        dispatch: () => {},
        login: false,
        signUp: false,
    };

    static propTypes = {
        t: PropTypes.func,
        dispatch: PropTypes.func,
        login: PropTypes.bool,
        signUp: PropTypes.bool,
    };

    state = {
        user: {
            country: '',
            confirmPassword: '',
            email: '',
            userPasswordRegistration: '',
            termOfService: false,
        },
        confirmPasswordErrors: {
            confirmPasswordCharactersError: '',
        },
        countryErrors: '',
        emailErrors: {
            emailLengthError: '',
            emailCharactersError: '',
        },
        passwordErrors: {
            passwordCharactersError: '',
            passwordLengthError: '',
            passwordDigitError: '',
            passwordUpperCaseLetter: '',
            passwordLettersError: '',
        },
        termOfServiceError: '',
        type: 'password',
    };

    location = value => {
        this.setState(state => ({
            user: {
                ...state.user,
                country: value,
            },
            countryErrors: '',
        }));
    };

    inputOnchange = event => {
        const { t } = this.props;
        const { name, value } = event.target;
        const {
            user: { userPasswordRegistration, confirmPassword },
        } = this.state;
        const numbersLatinLettersSymbols = /[A-Za-z0-9!@#,./$%^&*/':+{}=();" `/\-/\]/\\()/[_]+$/;
        const numbersLatinLetters = /[A-Za-z0-9]+$/;

        // EMAIL VALIDATION
        if (name === 'email') {
            if (value === '' || numbersLatinLettersSymbols.test(value)) {
                this.setState(state => ({
                    user: {
                        ...state.user,
                        [name]: value,
                    },
                    emailErrors: {
                        ...state.emailErrors,
                        emailCharactersError: '',
                    },
                }));

                // min length
                if (value.length > 0) {
                    this.setState(state => ({
                        user: {
                            ...state.user,
                            [name]: value,
                        },
                        emailErrors: {
                            ...state.emailErrors,
                            emailLengthError: '',
                        },
                    }));
                }
                // min length

                // email validation
                if (!/^\S+@\S+\.\S+$/.test(value.toLowerCase())) {
                    this.setState(state => ({
                        user: {
                            ...state.user,
                            [name]: value,
                        },
                        emailErrors: {
                            ...state.emailErrors,
                            wrongEmail: t('error.wrong_email'),
                        },
                    }));
                } else {
                    this.setState(state => ({
                        user: {
                            ...state.user,
                            [name]: value,
                        },
                        emailErrors: {
                            ...state.emailErrors,
                            wrongEmail: '',
                        },
                    }));
                }
                // email validation
            } else {
                this.setState(state => ({
                    emailErrors: {
                        ...state.emailErrors,
                        emailCharactersError: t('error.only_letters_symbols_numbers'),
                    },
                }));
            }
        }
        // EMAIL VALIDATION

        // PASSWORD VALIDATION
        if (name === 'userPasswordRegistration') {
            // only numbers and letters
            if (value === '' || numbersLatinLetters.test(value)) {
                this.setState(state => ({
                    user: {
                        ...state.user,
                        [name]: value,
                    },
                    passwordErrors: {
                        ...state.passwordErrors,
                        passwordCharactersError: '',
                    },
                }));

                // min length 6 chars
                if (value.length < 8) {
                    this.setState(state => ({
                        user: {
                            ...state.user,
                            [name]: value,
                        },
                        passwordErrors: {
                            ...state.passwordErrors,
                            passwordLengthError: t('error.password_at_least_8_chars'),
                        },
                    }));
                } else {
                    this.setState(state => ({
                        user: {
                            ...state.user,
                            [name]: value,
                        },
                        passwordErrors: {
                            ...state.passwordErrors,
                            passwordLengthError: '',
                        },
                    }));
                }
                // min length 6 chars

                // at least one digit
                if (!/^(?=.*[0-9])/.test(value)) {
                    this.setState(state => ({
                        user: {
                            ...state.user,
                            [name]: value,
                        },
                        passwordErrors: {
                            ...state.passwordErrors,
                            passwordDigitError: t('error.password_at_least_1_digit'),
                        },
                    }));
                } else {
                    this.setState(state => ({
                        user: {
                            ...state.user,
                            [name]: value,
                        },
                        passwordErrors: {
                            ...state.passwordErrors,
                            passwordDigitError: '',
                        },
                    }));
                }
                // at least one digit

                // at least one letter to Upper Case
                if (!/^(?=.*[A-Z])/.test(value)) {
                    this.setState(state => ({
                        user: {
                            ...state.user,
                            [name]: value,
                        },
                        passwordErrors: {
                            ...state.passwordErrors,
                            passwordUpperCaseLetter: t(
                                'error.password_at_least_1_upperCase_letter',
                            ),
                        },
                    }));
                } else {
                    this.setState(state => ({
                        user: {
                            ...state.user,
                            [name]: value,
                        },
                        passwordErrors: {
                            ...state.passwordErrors,
                            passwordUpperCaseLetter: '',
                        },
                    }));
                }
                // at least one letter to Upper Case

                // at least one letters
                if (!/^(?=.*[a-z])/.test(value)) {
                    this.setState(state => ({
                        user: {
                            ...state.user,
                            [name]: value,
                        },
                        passwordErrors: {
                            ...state.passwordErrors,
                            passwordLettersError: t('error.password_at_least_1_letters'),
                        },
                    }));
                } else {
                    this.setState(state => ({
                        user: {
                            ...state.user,
                            [name]: value,
                        },
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
        }
        // PASSWORD VALIDATION

        // CONFIRM PASSWORD VALIDATION
        if (name === 'confirmPassword') {
            // only numbers and letters
            if (value === '' || numbersLatinLetters.test(value)) {
                this.setState(state => ({
                    user: {
                        ...state.user,
                        [name]: value,
                    },

                    confirmPasswordErrors: {
                        ...state.confirmPasswordErrors,
                        confirmPasswordCharactersError: '',
                    },
                }));

                // paswords doesn't match
                if (value.length > 0 && userPasswordRegistration !== value) {
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

    validateFields = () => {
        const { t } = this.props;
        const {
            user: {
                email,
                userPasswordRegistration,
                confirmPassword,
                country,
                termOfService,
            },
        } = this.state;

        if (country.length < 1) {
            this.setState({
                countryErrors: t('error.field_can_not_be_empty'),
            });
        }

        if (confirmPassword.length < 1) {
            this.setState(state => ({
                confirmPasswordErrors: {
                    ...state.confirmPasswordErrors,
                    confirmPasswordCharactersError: t('error.field_can_not_be_empty'),
                },
            }));
        }

        if (email.length < 1) {
            this.setState(state => ({
                emailErrors: {
                    ...state.emailErrors,
                    emailLengthError: t('error.field_can_not_be_empty'),
                },
            }));
        }

        if (userPasswordRegistration.length < 1) {
            this.setState(state => ({
                passwordErrors: {
                    ...state.passwordErrors,
                    passwordLengthError: t('error.field_can_not_be_empty'),
                },
            }));
        }

        if (!termOfService) {
            this.setState({
                termOfServiceError: t('error.field_can_not_be_empty'),
            });
        }
    };

    registratiOnSubmit = async event => {
        event.preventDefault();
        await this.validateFields();
        const {
            user: {
                email,
                userPasswordRegistration,
                termOfService,
                confirmPassword,
                country,
            },
            emailErrors,
            passwordErrors,
            confirmPasswordErrors,
        } = this.state;

        const copyEmailErrors = Object.assign({}, emailErrors);
        const copyPasswordErrors = Object.assign({}, passwordErrors);
        const copyConfirmPassword = Object.assign({}, confirmPasswordErrors);

        Object.keys(copyEmailErrors).forEach(key => {
            if (!copyEmailErrors[key]) delete copyEmailErrors[key];
        });

        Object.keys(copyPasswordErrors).forEach(key => {
            if (!copyPasswordErrors[key]) delete copyPasswordErrors[key];
        });

        Object.keys(copyConfirmPassword).forEach(key => {
            if (!copyConfirmPassword[key]) delete copyConfirmPassword[key];
        });

        if (
            Object.keys(copyEmailErrors).length === 0
            && Object.keys(copyPasswordErrors).length === 0
            && Object.keys(copyConfirmPassword).length === 0
            && termOfService
            && country
            && email
            && confirmPassword
            && userPasswordRegistration
        ) {
            console.log('success');
        }
    };

    closeModal = () => {
        const { dispatch } = this.props;
        dispatch(authModalActions.closeModal());
    };

    openLogin = () => {
        const { dispatch } = this.props;
        dispatch(authModalActions.openLogin());
    };

    termOfUse = event => {
        const { t } = this.props;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                termOfService: event.target.checked,
            },
            termOfServiceError: event.target.checked
                ? ''
                : t('error.field_can_not_be_empty'),
        });
    };

    showHidePassword = () => {
        const { type } = this.state;
        this.setState({
            type: type === 'password' ? 'text' : 'password',
        });
    };


    render() {
        const { t, signUp, login } = this.props;
        const {
            emailErrors,
            passwordErrors,
            confirmPasswordErrors,
            countryErrors,
            termOfServiceError,
            user: {
                confirmPassword,
                email,
                userPasswordRegistration,
                country,
                termOfService,
            },
            type,
        } = this.state;
        const customStyles = {
            content: {
                maxWidth: '50vw',
            },
        };

        if (login || signUp) {
            document.documentElement.style.overflowY = 'hidden';
        } else {
            document.documentElement.style.overflowY = 'visible';
        }

        return (
            <ModalWindow
                isOpen={signUp}
                style={customStyles}
                onRequestClose={this.closeModal}
            >
                <h3 className={style.registration__title}>{t('header.registration')}</h3>
                <div
                    className={style.registration__closeWrapper}
                    onClick={this.closeModal}
                >
                    <img
                        className={style.registration__closeWrapper_close}
                        src={closeIcon}
                        alt="closeIcon"
                    />
                </div>
                <form className={style.registration__form} autoComplete="off">
                    <div className={style.registration__inputWrapper}>
                        <Field
                            id="email"
                            type="email"
                            placeholder={t('auth.typeEmail')}
                            name="email"
                            value={email}
                            onChange={this.inputOnchange}
                            error={emailErrors}
                            inputStyle={style.registration__input}
                            inputColor="#fff"
                        />
                    </div>
                    <div className={style.registration__inputWrapper}>
                        <Field
                            id="userPasswordRegistration"
                            type={type}
                            placeholder={t('auth.typePassword')}
                            name="userPasswordRegistration"
                            value={userPasswordRegistration}
                            onChange={this.inputOnchange}
                            error={passwordErrors}
                            inputStyle={style.registration__input}
                            inputColor="#fff"
                            passwordType
                        />
                        {userPasswordRegistration.length >= 1 ? (
                            <div
                                onClick={this.showHidePassword}
                                className={
                                    style.registration__inputWrapper_eye
                                }
                            >
                                <img src={eye} alt="eye" />
                            </div>
                        ) : null}
                    </div>
                    <div className={style.registration__inputWrapper}>
                        <Field
                            id="confirmPassword"
                            type={type}
                            placeholder={t('general.confirmPassword')}
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={this.inputOnchange}
                            error={confirmPasswordErrors}
                            inputStyle={style.registration__input}
                            inputColor="#fff"
                            passwordType
                        />
                        {confirmPassword.length >= 1 ? (
                            <div
                                onClick={this.showHidePassword}
                                className={
                                    style.registration__inputWrapper_eye
                                }
                            >
                                <img src={eye} alt="eye" />
                            </div>
                        ) : null}
                    </div>
                    <div className={style.registration__select}>
                        <p
                            className={classNames(
                                style.registration__label,
                                countryErrors ? style.registration__labelError : {},
                            )}
                        >
                            {t('auth.countryOfResidence')}
                        </p>
                        <div
                            className={classNames(
                                style.frame,
                                countryErrors ? style.frame__error : {},
                            )}
                        >
                            <SelectSearch
                                name="country"
                                mode="input"
                                value={country}
                                options={countries}
                                placeholder={t('general.selectFromList')}
                                onChange={this.location}
                                search
                            />
                        </div>
                    </div>
                    <div className={style.registration__checkBoxWrapper}>
                        <span className={style.registration__checkbox}>
                            <div className={style.registration__checkbox_wrapper}>
                                <Checkbox
                                    checked={termOfService}
                                    onChange={this.termOfUse}
                                >
                                    <span
                                        className={classNames(
                                            style.registration__checkbox_title,
                                            termOfServiceError
                                                ? style.registration__checkbox_titleError
                                                : {},
                                        )}
                                    >
                                        {t('auth.iAm18years')}
                                        <Link
                                            target="_blank"
                                            to={termOfServicePath}
                                            className={style.registration__checkbox_link}
                                        >
                                            {t('auth.termsOfLicenseAgreement')}.
                                        </Link>{' '}
                                        {t('auth.iHaveReadAndFullyUnderstand')}
                                        <Link
                                            target="_blank"
                                            to={privacyPolicyPath}
                                            className={style.registration__checkbox_link}
                                        >
                                            {t('auth.privacyPolicyCheckbox')}
                                        </Link>
                                    </span>
                                </Checkbox>
                            </div>
                        </span>
                    </div>
                    <div className={style.registration__submitBtnWrapper}>
                        <button
                            className={style.registration__submitBtn}
                            type="button"
                            onClick={this.registratiOnSubmit}
                        >
                            <span>{t('auth.createAccount')}</span>
                        </button>
                    </div>
                    <div
                        onClick={this.openLogin}
                        className={style.registration__alreadyHaveAccount}
                    >
                        {t('auth.alreadyHaveAccount')}
                    </div>
                </form>
            </ModalWindow>
        );
    }
}

const mapStateToProps = state => {
    const {
        authModal: { signUp, login },
    } = state;

    return {
        signUp,
        login,
    };
};

export default compose(
    withTranslation(),
    connect(mapStateToProps),
    withRouter,
)(Registration);
