import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { authModalActions } from '../../../actions/authModal.actions';
import { compose } from '../../../utils';
import Field from '../../small-components/field';
import ModalWindow from '../../small-components/modal-window/modal-widow';
import style from './password-recovery.module.scss';

class PasswordRecovery extends PureComponent {
    static defaultProps = {
        t: () => {},
        dispatch: () => {},
        login: false,
        signUp: false,
        passwordRecovery: false,
    };

    static propTypes = {
        t: PropTypes.func,
        dispatch: PropTypes.func,
        login: PropTypes.bool,
        signUp: PropTypes.bool,
        passwordRecovery: PropTypes.bool,
    };

    state = {
        email: '',
        emailErrors: {
            emailLengthError: '',
            emailCharactersError: '',
        },
    };

    inputOnchange = event => {
        const { name, value } = event.target;
        const { t } = this.props;
        const numbersLatinLettersSymbols = /[A-Za-z0-9!@#,./$%^&*/':+{}=();" `/\-/\]/\\()/[_]+$/;

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
                        emailCharactersError: t('error.only_letters_symbols_numbers'),
                    },
                }));
            }
        }
        // EMAIL VALIDATION
    };

    validateFields = () => {
        const { t } = this.props;
        const { email } = this.state;

        if (email.length < 1) {
            this.setState(state => ({
                emailErrors: {
                    ...state.emailErrors,
                    emailLengthError: t('error.field_can_not_be_empty'),
                },
            }));
        }
    };

    submit = async () => {
        await this.validateFields();
        const { email, emailErrors } = this.state;

        const copyEmailErrors = { ...emailErrors };

        Object.keys(copyEmailErrors).forEach(key => {
            if (!copyEmailErrors[key]) delete copyEmailErrors[key];
        });

        if (Object.keys(copyEmailErrors).length === 0) {
            if (email) {
                console.log(email, 'email');
            }
        }
    };

    openSignIn = () => {
        const { dispatch } = this.props;
        dispatch(authModalActions.openLogin());
    };

    closeModal = () => {
        const { dispatch } = this.props;
        dispatch(authModalActions.closeModal());
    };

    render() {
        const {
            t, login, signUp, passwordRecovery,
        } = this.props;
        const { email, emailErrors } = this.state;
        const customStyles = {
            content: {
                maxWidth: '50vw',
            },
        };

        if (login || signUp || passwordRecovery) {
            document.documentElement.style.overflowY = 'hidden';
        } else {
            document.documentElement.style.overflowY = 'visible';
        }

        return (
            <ModalWindow
                isOpen={passwordRecovery}
                style={customStyles}
                onRequestClose={this.closeModal}
            >
                <h3 className={style.signIn__title}>{t('auth.passwordRecovery')}</h3>
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
                            inputColor="#fff"
                        />
                    </div>
                    <div className={style.signIn__submitBtnWrapper}>
                        <button
                            className={style.signIn__submitBtn}
                            type="button"
                            onClick={this.submit}
                        >
                            <span>{t('general.send')}</span>
                        </button>
                    </div>
                    <div onClick={this.openSignIn} className={style.signIn__signIn}>
                        {t('header.signIn')}
                    </div>
                </form>
            </ModalWindow>
        );
    }
}

const mapStateToProps = state => {
    const {
        authModal: { login, signUp, passwordRecovery },
    } = state;

    return {
        login,
        signUp,
        passwordRecovery,
    };
};

export default compose(withTranslation(), connect(mapStateToProps))(PasswordRecovery);
