import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import Button from '../../small-components/button';
import { authModalActions } from '../../../actions/authModal.actions';
import { compose } from '../../../utils';
import closeIcon from '../../assets/images/close-white.svg';
import Field from '../../small-components/field';
import ModalWindow from '../../small-components/modal-window/modal-widow';
import style from './two-fa.module.scss';
import googleAuth from './images/googleAuth.svg';

class TwoFa extends PureComponent {
    static defaultProps = {
        t: () => {},
        dispatch: () => {},
        login: false,
        signUp: false,
        passwordRecovery: false,
        twoFa: false,
    };

    static propTypes = {
        t: PropTypes.func,
        dispatch: PropTypes.func,
        login: PropTypes.bool,
        signUp: PropTypes.bool,
        passwordRecovery: PropTypes.bool,
        twoFa: PropTypes.bool,
    };

    state = {
        code: '',
        codeErrors: {
            codeLengthError: '',
        },
    };

    inputOnchange = event => {
        const { name, value } = event.target;
        const { t } = this.props;

        // min length
        if (value.length > 5) {
            this.setState(state => ({
                [name]: value,
                codeErrors: {
                    ...state.codeErrors,
                    codeLengthError: '',
                },
            }));
        } else {
            this.setState(state => ({
                [name]: value,
                codeErrors: {
                    ...state.codeErrors,
                    codeLengthError: t('error.min_length', { digit: 6 }),
                },
            }));
        }
        // min length
    };

    validateFields = () => {
        const { t } = this.props;
        const { code } = this.state;

        if (code.length < 1) {
            this.setState(state => ({
                codeErrors: {
                    ...state.codeErrors,
                    codeLengthError: t('error.field_can_not_be_empty'),
                },
            }));
        }
    };

    submit = async () => {
        await this.validateFields();
        const { code, codeErrors } = this.state;

        const copyEmailErrors = { ...codeErrors };

        Object.keys(copyEmailErrors).forEach(key => {
            if (!copyEmailErrors[key]) delete copyEmailErrors[key];
        });

        if (Object.keys(copyEmailErrors).length === 0) {
            if (code) {
                console.log(code, 'code');
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
            t, login, signUp, passwordRecovery, twoFa,
        } = this.props;
        const { code, codeErrors } = this.state;
        const customStyles = {
            content: {
                maxWidth: '50vw',
            },
        };

        if (login || signUp || passwordRecovery || twoFa) {
            document.documentElement.style.overflowY = 'hidden';
        } else {
            document.documentElement.style.overflowY = 'visible';
        }

        return (
            <ModalWindow
                isOpen={twoFa}
                style={customStyles}
                onRequestClose={this.closeModal}
            >
                <h3 className={style.twoFa__title}>{t('auth.twoFactorAuth')}</h3>
                <div className={style.twoFa__closeWrapper} onClick={this.closeModal}>
                    <img
                        className={style.twoFa__closeWrapper_close}
                        src={closeIcon}
                        alt="closeIcon"
                    />
                </div>
                <form className={style.twoFa__form} autoComplete="off">
                    <div className={style.twoFa__infoWapper}>
                        <img
                            src={googleAuth}
                            alt="googleAuth"
                            className={style.twoFa__infoWapper_img}
                        />
                        <div>
                            <p className={style.twoFa__infoWapper_title}>
                            Google Authenticator
                            </p>
                            <p className={style.twoFa__infoWapper_subTitle}>
                                {t('auth.EnterGoogleAuthenticatorCode')}
                            </p>
                        </div>
                    </div>
                    <div className={style.twoFa__inputWrapper}>
                        <Field
                            id="code"
                            type="text"
                            placeholder={t('general.typeHere')}
                            name="code"
                            value={code}
                            onChange={this.inputOnchange}
                            error={codeErrors}
                            inputStyle={style.twoFa__input}
                            inputColor="#fff"
                            labelStyle={style.twoFa__label}
                            labelText={t('auth.googleAuthenticationCode')}
                        />
                    </div>
                    <div className={style.twoFa__submitBtnWrapper}>
                        <Button
                            className={style.twoFa__submitBtn}
                            type="button"
                            onClick={this.submit}
                        >
                            <span className={style.buttonText}>{t('general.send')}</span>
                        </Button>
                    </div>
                </form>
            </ModalWindow>
        );
    }
}

const mapStateToProps = state => {
    const {
        authModal: {
            login, signUp, passwordRecovery, twoFa,
        },
    } = state;

    return {
        login,
        signUp,
        passwordRecovery,
        twoFa,
    };
};

export default compose(withTranslation(), connect(mapStateToProps))(TwoFa);
