import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import ReactNotification, { store } from 'react-notifications-component';
import { message } from 'antd';
import ErrorIndicator from '../../../error-page/error-indicator';
import Spinner from '../../../../spinner';
import ProfileDataView from './profile-data-view';
import { compose } from '../../../../../utils';

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}
export class ProfileDataContainer extends Component {
    static defaultProps = {
        t: () => {},
    };

    static propTypes = {
        t: PropTypes.func,
    };

    state = {
        previewVisible: false,
        previewImage: '',
        fileList: [],
        nickname: '',
        twoFACode: '',
        password: '',
        confirmPassword: '',
        nicknameErrors: {
            nicknameCharactersError: '',
        },
        twoFACodeErrors: {
            twoFACodeCharactersError: '',
        },
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

    handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
        });
    };

    beforeUpload = file => {
        const { t } = this.props;
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        const isLt5M = file.size / 1024 / 1024 < 5;
        if (!isJpgOrPng) {
            message.error(t('general.youCanUploadPNGFile'), 5);
        } else if (!isLt5M) {
            message.error(t('general.imageMustSmallerThan5MB'), 5);
        } else {
            this.uploadAvatar(file);
        }
    };

    handleChange = ({ fileList }) => {
        if (fileList.length) {
            this.beforeUpload(fileList[0]);
        } else {
            this.setState({
                fileList: [],
            });
        }
    };

    uploadAvatar = file => {
        this.setState({
            fileList: [file],
        });
    };

    inputOnchange = event => {
        const { name, value } = event.target;
        const { password, confirmPassword } = this.state;
        const { t } = this.props;
        const numbersLatinLetters = /[A-Za-z0-9]+$/;

        if (name === 'nickname') {
            this.setState(state => ({
                [name]: value.toLowerCase(),
                nicknameErrors: {
                    ...state.nicknameErrors,
                    nicknameCharactersError: '',
                },
            }));
        }

        if (name === 'twoFACode') {
            this.setState(state => ({
                [name]: value.toLowerCase(),
                twoFACodeErrors: {
                    ...state.twoFACodeErrors,
                    twoFACodeCharactersError: '',
                },
            }));
        }

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

    submitChangeName = event => {
        event.preventDefault();
        const { nickname } = this.state;
        const { t } = this.props;
        if (!nickname.length) {
            this.setState({
                nicknameErrors: {
                    nicknameCharactersError: t('error.field_can_not_be_empty'),
                },
            });
        } else {
            console.log(nickname, 'nickname');
        }
    };

    submitTwoFACode = event => {
        event.preventDefault();
        const { twoFACode } = this.state;
        const { t } = this.props;
        if (!twoFACode.length) {
            this.setState({
                twoFACodeErrors: {
                    twoFACodeCharactersError: t('error.field_can_not_be_empty'),
                },
            });
        } else {
            console.log(twoFACode, 'twoFACode');
        }
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

    submitGenerateCode = () => {
        store.addNotification({
            title: 'Success!',
            message: 'Coming soon!',
            type: 'success',
            insert: 'top',
            container: 'top-right',
            animationIn: ['animated', 'zoomIn'],
            animationOut: ['animated', 'zoomOut'],
            dismiss: {
                duration: 3000,
                pauseOnHover: true,
            },
        });
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false,
        });
    };

    render() {
        const {
            loading,
            error,
            previewVisible,
            previewImage,
            fileList,
            nickname,
            twoFACode,
            password,
            confirmPassword,
            nicknameErrors,
            twoFACodeErrors,
            passwordErrors,
            confirmPasswordErrors,
            type,
        } = this.state;
        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? (
            <ProfileDataView
                previewVisible={previewVisible}
                previewImage={previewImage}
                fileList={fileList}
                nickname={nickname}
                twoFACode={twoFACode}
                password={password}
                confirmPassword={confirmPassword}
                nicknameErrors={nicknameErrors}
                twoFACodeErrors={twoFACodeErrors}
                passwordErrors={passwordErrors}
                type={type}
                confirmPasswordErrors={confirmPasswordErrors}
                handlePreview={this.handlePreview}
                handleChange={this.handleChange}
                handleCancel={this.handleCancel}
                inputOnchange={this.inputOnchange}
                showHidePassword={this.showHidePassword}
                beforeUpload={this.beforeUpload}
                submitChangeName={this.submitChangeName}
                submitNewPassword={this.submitNewPassword}
                submitTwoFACode={this.submitTwoFACode}
                submitGenerateCode={this.submitGenerateCode}
            />
        ) : null;

        return (
            <Fragment>
                {errorMessage}
                {spinner}
                {content}
                <ReactNotification />
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    const {
        authentication: { loggedIn },
    } = state;

    return {
        loggedIn,
    };
};

export default compose(withTranslation(), connect(mapStateToProps))(ProfileDataContainer);
