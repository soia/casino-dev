import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import SelectSearch from 'react-select-search';
import { Checkbox } from 'antd';
import frame from '../../small-components/field/images/frame.svg';
import { countries } from '../../../helpers/countries';
import { authModalActions } from '../../../actions/authModal.actions';
import { compose } from '../../../utils';
import Button from '../../small-components/button';
import Field from '../../small-components/field';
import ModalWindow from '../../small-components/modal-window/modal-widow';
import orangeButton from './images/button.svg';
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
            username: '',
            email: '',
            userPasswordRegistration: '',
            termOfService: false,
        },
        usernameErrors: {
            usernameLengthError: '',
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
        const numbersLatinLettersSymbols = /[A-Za-z0-9!@#,./$%^&*/':+{}=();" `/\-/\]/\\()/[_]+$/;
        const numbersLatinLetters = /[A-Za-z0-9]+$/;

        if (name === 'username') {
            this.setState(state => ({
                user: {
                    ...state.user,
                    [name]: value,
                },
                usernameErrors: {
                    ...state.usernameErrors,
                    usernameLengthError: value ? '' : t('error.field_can_not_be_empty'),
                },
            }));
        }

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
                if (value.length < 6) {
                    this.setState(state => ({
                        user: {
                            ...state.user,
                            [name]: value,
                        },
                        passwordErrors: {
                            ...state.passwordErrors,
                            passwordLengthError: t('error.password_at_least_6_chars'),
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
    };

    validateFields = () => {
        const { t } = this.props;
        const {
            user: {
                email,
                userPasswordRegistration,
                username,
                country,
                termOfService,
            },
        } = this.state;

        if (country.length < 1) {
            this.setState({
                countryErrors: t('error.field_can_not_be_empty'),
            });
        }

        if (username.length < 1) {
            this.setState(state => ({
                usernameErrors: {
                    ...state.usernameErrors,
                    usernameLengthError: t('error.field_can_not_be_empty'),
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
                username,
            },
            emailErrors,
            passwordErrors,
        } = this.state;

        const copyEmailErrors = Object.assign({}, emailErrors);
        const copyPasswordErrors = Object.assign({}, passwordErrors);

        Object.keys(copyEmailErrors).forEach(key => {
            if (!copyEmailErrors[key]) delete copyEmailErrors[key];
        });
        Object.keys(copyPasswordErrors).forEach(key => {
            if (!copyPasswordErrors[key]) delete copyPasswordErrors[key];
        });

        if (
            Object.keys(copyEmailErrors).length === 0
            && Object.keys(copyPasswordErrors).length === 0
        ) {
            if (
                email
                && username
                && userPasswordRegistration
                && termOfService
            ) {
                console.log('success');
            }
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
            termOfServiceError: event.target.checked ? '' : t('error.field_can_not_be_empty'),
        });
    };

    render() {
        const { t, signUp, login } = this.props;
        const {
            emailErrors,
            passwordErrors,
            usernameErrors,
            countryErrors,
            termOfServiceError,
            user: {
                username,
                email,
                userPasswordRegistration,
                country,
                termOfService,
            },
        } = this.state;
        const customStyles = {
            content: {
                maxWidth: '50vw',
            },
        };

        const orangeButtonStyle = {
            backgroundImage: `url(${orangeButton})`,
            backgroundSize: 'cover',
        };

        const regtangleStyle = {
            backgroundImage: `url(${frame})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
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
                <form className={style.registration__form} autoComplete="off">
                    <div className={style.registration__inputWrapper}>
                        <Field
                            id="username"
                            type="username"
                            placeholder={t('auth.typeName')}
                            name="username"
                            value={username}
                            onChange={this.inputOnchange}
                            error={usernameErrors}
                            inputStyle={style.registration__input}
                        />
                    </div>
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
                        />
                    </div>
                    <div className={style.registration__inputWrapper}>
                        <Field
                            id="userPasswordRegistration"
                            type="password"
                            placeholder={t('auth.typePassword')}
                            name="userPasswordRegistration"
                            value={userPasswordRegistration}
                            onChange={this.inputOnchange}
                            error={passwordErrors}
                            inputStyle={style.registration__input}
                        />
                    </div>
                    <div className={style.registration__select}>
                        <p className={style.registration__label}>
                            {t('auth.countryOfResidence')}
                        </p>
                        <div style={regtangleStyle}>
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
                        {countryErrors ? (
                            <div className={style.registration__inputWrapper_invalid}>
                                {countryErrors}
                            </div>
                        ) : null}
                    </div>
                    <div className={style.registration__checkBoxWrapper}>
                        <span className={style.registration__checkbox}>
                            <div className={style.registration__checkbox_wrapper}>
                                <Checkbox checked={termOfService} onChange={this.termOfUse}>
                                    <span className={style.registration__checkbox_title}>
                                        {t('auth.iAm18years')}
                                        <Link
                                            target="_blank"
                                            to="termOfServicePath"
                                            className={style.registration__checkbox_link}
                                        >
                                            {t('auth.termsOfLicenseAgreement')}.
                                        </Link>
                                        {' '}{t('auth.iHaveReadAndFullyUnderstand')}
                                        <Link
                                            target="_blank"
                                            to="privacyPolicyPath"
                                            className={style.registration__checkbox_link}
                                        >
                                            {t('auth.privacyPolicyCheckbox')}
                                        </Link>
                                    </span>
                                </Checkbox>
                            </div>
                            {termOfServiceError ? (
                                <div className={style.registration__inputWrapper_invalid}>
                                    {t('error.field_can_not_be_empty')}
                                </div>
                            ) : null}
                        </span>
                    </div>
                    <Button
                        className={style.registration__submitBtn}
                        type="button"
                        style={orangeButtonStyle}
                        onClick={this.registratiOnSubmit}
                    >
                        {t('auth.createAccount')}
                    </Button>
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
