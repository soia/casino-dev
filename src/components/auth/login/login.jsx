import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { authModalActions } from '../../../actions/authModal.actions';
import { compose } from '../../../utils';
import Button from '../../small-components/button';
import Field from '../../small-components/field';
import ModalWindow from '../../small-components/modal-window/modal-widow';
import orangeButton from './images/button.svg';
import style from './login.module.scss';

class Login extends PureComponent {
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
        email: '',
        userPasswordLogin: '',
        emailErrors: {
            emailLengthError: '',
            emailCharactersError: '',
        },
        passwordErrors: {
            passwordCharactersError: '',
            passwordLengthError: '',
            passwordDigitError: '',
            passwordLettersError: '',
        },
    };

    inputOnchange = event => {
        const { name, value } = event.target;
        const { t } = this.props;
        const numbersLatinLettersSymbols = /[A-Za-z0-9!@#,./$%^&*/':+{}=();" `/\-/\]/\\()/[_]+$/;
        const numbersLatinLetters = /[A-Za-z0-9]+$/;

        // EMAIL VALIDATION
        if (name === 'email') {
            if (value === '' || numbersLatinLettersSymbols.test(value)) {
                this.setState(state => ({
                    [name]: value.toLowerCase(),
                    emailErrors: {
                        ...state.emailErrors,
                        emailCharactersError: '',
                    },
                }));

                // min length
                if (value.length > 0) {
                    this.setState(state => ({
                        [name]: value.toLowerCase(),
                        emailErrors: {
                            ...state.emailErrors,
                            emailLengthError: '',
                        },
                    }));
                }
                // min length

                // email validation
                if (!/^\S+@\S+\.\S+$/.test(value.toLowerCase().trim())) {
                    this.setState(state => ({
                        [name]: value.toLowerCase(),
                        emailErrors: {
                            ...state.emailErrors,
                            wrongEmail: t('error.wrong_email'),
                        },
                    }));
                } else {
                    this.setState(state => ({
                        [name]: value.toLowerCase(),
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
                        emailCharactersError: t(
                            'error.only_letters_symbols_numbers',
                        ),
                    },
                }));
            }
        }
        // EMAIL VALIDATION

        // PASSWORD VALIDATION
        if (name === 'userPasswordLogin') {
            // only numbers and letters
            if (value === '' || numbersLatinLetters.test(value)) {
                this.setState(state => ({
                    [name]: value,
                    passwordErrors: {
                        ...state.passwordErrors,
                        passwordCharactersError: '',
                    },
                }));

                // min length 6 chars
                if (value.length < 6) {
                    this.setState(state => ({
                        [name]: value,
                        passwordErrors: {
                            ...state.passwordErrors,
                            passwordLengthError: t(
                                'error.password_at_least_6_chars',
                            ),
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
                // min length 6 chars

                // at least one digit
                if (!/^(?=.*[0-9])/.test(value)) {
                    this.setState(state => ({
                        [name]: value,
                        passwordErrors: {
                            ...state.passwordErrors,
                            passwordDigitError: t('error.password_at_least_1_digit'),
                        },
                    }));
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
                            passwordLettersError: t(
                                'error.password_at_least_1_letters',
                            ),
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
        const { email, userPasswordLogin } = this.state;

        if (email.length < 1) {
            this.setState(state => ({
                emailErrors: {
                    ...state.emailErrors,
                    emailLengthError: t('error.field_can_not_be_empty'),
                },
            }));
        }

        if (userPasswordLogin.length < 1) {
            this.setState(state => ({
                passwordErrors: {
                    ...state.passwordErrors,
                    passwordLengthError: t('error.field_can_not_be_empty'),
                },
            }));
        }
    };

    loginSubmit = async () => {
        await this.validateFields();
        const {
            email, userPasswordLogin, passwordErrors, emailErrors,
        } = this.state;

        const copyEmailErrors = { ...emailErrors };
        const copyPasswordErrors = { ...passwordErrors };

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
            if (email && userPasswordLogin) {
                console.log(email, 'email');
                console.log(userPasswordLogin, 'userPasswordLogin');
            }
        }
    };

    openSignUp = () => {
        const { dispatch } = this.props;
        dispatch(authModalActions.openSignUp());
    };

    closeModal = () => {
        const { dispatch } = this.props;
        dispatch(authModalActions.closeModal());
    };

    render() {
        const { t, login, signUp } = this.props;
        const {
            email, emailErrors, userPasswordLogin, passwordErrors,
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

        if (login || signUp) {
            document.documentElement.style.overflowY = 'hidden';
        } else {
            document.documentElement.style.overflowY = 'visible';
        }

        return (
            <ModalWindow
                isOpen={login}
                style={customStyles}
                onRequestClose={this.closeModal}
            >
                <h3 className={style.signIn__title}>{t('header.signIn')}</h3>
                <form className={style.signIn__form} autoComplete="off">
                    <div className={style.signIn__inputWrapper}>
                        <Field
                            id="email"
                            type="email"
                            placeholder={t('auth.typeEmail')}
                            name="email"
                            value={email}
                            onChange={this.inputOnchange}
                            error={emailErrors}
                            inputStyle={style.signIn__input}
                        />
                    </div>
                    <div className={style.signIn__inputWrapper}>
                        <Field
                            id="password"
                            type="password"
                            placeholder={t('auth.typePassword')}
                            name="userPasswordLogin"
                            value={userPasswordLogin}
                            onChange={this.inputOnchange}
                            error={passwordErrors}
                            inputStyle={style.signIn__input}
                        />
                    </div>
                    <div className={style.signIn__forgotPassword}>
                        {t('auth.forgotPassword')}
                    </div>
                    <Button
                        className={style.signIn__submitBtn}
                        type="button"
                        style={orangeButtonStyle}
                        onClick={this.loginSubmit}
                    >
                        {t('header.signIn')}
                    </Button>
                    <div
                        onClick={this.openSignUp}
                        className={style.signIn__registration}
                    >
                        {t('header.registration')}
                    </div>
                </form>
            </ModalWindow>
        );
    }
}

const mapStateToProps = state => {
    const {
        authModal: { login, signUp },
    } = state;

    return {
        login,
        signUp,
    };
};

export default compose(withTranslation(), connect(mapStateToProps))(Login);