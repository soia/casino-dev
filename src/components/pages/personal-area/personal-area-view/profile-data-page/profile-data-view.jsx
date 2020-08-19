/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Upload, Modal } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import QRCode from 'qrcode.react';
import eye from './images/eye.svg';
import Field from '../../../../small-components/field';
import style from './profile-data.module.scss';
import './profile-data.scss';

const ProfileDataView = ({
    nickname,
    nicknameErrors,
    inputOnchange,
    previewVisible,
    previewImage,
    fileList,
    handlePreview,
    handleChange,
    handleCancel,
    status,
    twoFACode,
    twoFACodeErrors,
    password,
    passwordErrors,
    confirmPassword,
    confirmPasswordErrors,
    showHidePassword,
    type,
    submitChangeName,
    submitNewPassword,
    submitTwoFACode,
    copyTwoFaCode,
}) => {
    const { t } = useTranslation();
    const uploadButton = (
        <div className="uploadAvatar__icon">
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M10 0V19.5" stroke="#C5C3DF" strokeWidth="0.8" />
                <path d="M19.75 9.75L0.25 9.75" stroke="#C5C3DF" strokeWidth="0.8" />
            </svg>
        </div>
    );
    const qrCodeValue = 'HUBGVYFCTDXR GCJKLNM:NOJIBYUVTCRYVUYBIU';

    return (
        <div className={style.profileData}>
            <h1 className={style.profileData__title}>{t('general.settings')}</h1>
            <div className={style.profileData__settingsWrapper}>
                <div className={style.profileData__changeAvatarWrapper}>
                    <p className={style.profileData__changeAvatar}>
                        {t('general.changeAvatar')}
                    </p>
                    <div className="uploadAvatar">
                        <Upload
                            listType="picture-card"
                            fileList={fileList}
                            onPreview={handlePreview}
                            beforeUpload={() => false}
                            onChange={handleChange}
                        >
                            {fileList.length >= 1 ? null : uploadButton}
                        </Upload>
                        <Modal
                            visible={previewVisible}
                            footer={null}
                            onCancel={handleCancel}
                        >
                            <img
                                alt="example"
                                style={{ width: '100%' }}
                                src={previewImage}
                            />
                        </Modal>
                    </div>
                </div>
                <form
                    className={style.profileData__formChangeUserName}
                    onSubmit={submitChangeName}
                >
                    <p className={style.profileData__changeUserName}>
                        {t('general.changeNickname')}
                    </p>
                    <div className={style.profileData__inputWrapper}>
                        <Field
                            id="nickname"
                            type="text"
                            placeholder={t('general.enterYourNickname')}
                            name="nickname"
                            value={nickname}
                            onChange={inputOnchange}
                            error={nicknameErrors}
                            inputStyle={style.profileData__inputNickname}
                            labelText={t('general.enterYourNickname')}
                            labelStyle={style.profileData__label}
                            inputColor="#B0AED3"
                        />
                        <button type="submit" className={style.profileData__changeBtn}>
                            <span className={style.buttonText}>{t('general.apply')}</span>
                        </button>
                    </div>
                </form>
            </div>
            <div className={style.twoFactorAuth}>
                <div className={style.twoFactorAuth__header}>
                    <h3 className={style.twoFactorAuth__title}>
                        {t('general.twoFactorAuth')}
                    </h3>
                    <div className={style.twoFactorAuth__statusWrapper}>
                        <p className={style.twoFactorAuth__statusWrapper_title}>
                            {t('general.status')}
                        </p>
                        {status ? (
                            <div
                                className={
                                    style.twoFactorAuth__statusWrapper_statusEnabled
                                }
                            >
                                <span className={style.buttonText}> {t('general.enabled')}</span>
                            </div>
                        ) : (
                            <div
                                className={
                                    style.twoFactorAuth__statusWrapper_statusTurnedOff
                                }
                            >
                                <span className={style.buttonText}> {t('general.turnedOff')}</span>
                            </div>
                        )}
                    </div>
                </div>
                <div className={style.twoFactorAuth__qrCodeWrapper}>
                    <div className="qrCode twoFAQrCode">
                        <QRCode value={qrCodeValue} />
                    </div>
                    <div className={style.twoFactorAuth__qrCodeWrapper_rightSide}>
                        <p className={style.twoFactorAuth__qrCodeWrapper_title}>
                            Lorem ipsum is placeholder text commonly used in the graphic,
                            print, and publishing industries for previewing layouts and
                            visual mockups:
                        </p>
                        <div className={style.profileData__qrCodeValueWrapper}>
                            <Field
                                id="qrCodeValue"
                                type="text"
                                name="qrCodeValue"
                                value={qrCodeValue}
                                inputStyle={style.profileData__codeInput}
                                inputColor="#B0AED3"
                                labelText={t('general.twoFACode')}
                                labelStyle={style.profileData__label}
                            />
                            <CopyToClipboard
                                text={qrCodeValue}
                                onCopy={copyTwoFaCode}
                            >
                                <div className={style.profileData__qrCodeValueBtn}>
                                    <span className={style.buttonText}>
                                        <svg
                                            width="13"
                                            height="13"
                                            viewBox="0 0 13 13"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g opacity="0.9">
                                                <path
                                                    d="M1.73436 3.76071C1.73436 2.30156 2.96524 1.11401 4.47763 1.11401H9.75195C9.56139 0.473014 8.95504 0 8.2309 0H1.58971C0.713973 0 0.00195312 0.686957 0.00195312 1.53186V10.1673C0.00195312 11.013 0.713973 11.7 1.58971 11.7H1.73436V3.76071Z"
                                                    fill="#F3F3F3"
                                                />
                                                <path
                                                    d="M10.7775 1.94995H4.18146C3.31167 1.94995 2.60449 2.6312 2.60449 3.46909V11.4808C2.60449 12.3187 3.31167 12.9999 4.18146 12.9999H10.7775C11.6473 12.9999 12.3545 12.3187 12.3545 11.4808V3.46909C12.3545 2.6312 11.6473 1.94995 10.7775 1.94995ZM9.63072 11.3424H5.32912C5.09168 11.3424 4.89896 11.1568 4.89896 10.928C4.89896 10.6993 5.09168 10.5136 5.32912 10.5136H9.63072C9.86817 10.5136 10.0609 10.6993 10.0609 10.928C10.0609 11.1568 9.86817 11.3424 9.63072 11.3424ZM9.63072 9.13208H5.32912C5.09168 9.13208 4.89896 8.94643 4.89896 8.71769C4.89896 8.48895 5.09168 8.30331 5.32912 8.30331H9.63072C9.86817 8.30331 10.0609 8.48895 10.0609 8.71769C10.0609 8.94643 9.86817 9.13208 9.63072 9.13208ZM9.63072 7.19856H5.32912C5.09168 7.19856 4.89896 7.01291 4.89896 6.78417C4.89896 6.55543 5.09168 6.36978 5.32912 6.36978H9.63072C9.86817 6.36978 10.0609 6.55543 10.0609 6.78417C10.0609 7.01291 9.86817 7.19856 9.63072 7.19856ZM9.63072 4.98822H5.32912C5.09168 4.98822 4.89896 4.80258 4.89896 4.57384C4.89896 4.3451 5.09168 4.15945 5.32912 4.15945H9.63072C9.86817 4.15945 10.0609 4.3451 10.0609 4.57384C10.0609 4.80258 9.86817 4.98822 9.63072 4.98822Z"
                                                    fill="white"
                                                />
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                            </CopyToClipboard>
                        </div>
                        <form
                            className={style.twoFactorAuth__twoFAInputWrapper}
                            onSubmit={submitTwoFACode}
                        >
                            <Field
                                id="twoFACode"
                                type="text"
                                placeholder={t('general.twoFACode')}
                                name="twoFACode"
                                value={twoFACode}
                                onChange={inputOnchange}
                                error={twoFACodeErrors}
                                inputStyle={style.twoFactorAuth__input}
                                inputColor="#B0AED3"
                            />
                            <button
                                type="submit"
                                className={style.twoFactorAuth__switchQrCodeBtn}
                            >
                                <span className={style.buttonText}>{t('general.enable')}</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className={style.resetPasswordContainer}>
                <h3 className={style.resetPasswordContainer__title}>
                    {t('general.changePassword')}
                </h3>
                <div className={style.resetPasswordContainer__inputContainer}>
                    <div className={style.resetPasswordContainer__inputWrapper}>
                        <Field
                            id="password"
                            type={type}
                            placeholder={t('general.enterPassword')}
                            name="password"
                            value={password}
                            onChange={inputOnchange}
                            error={passwordErrors}
                            inputStyle={style.profileData__input}
                            labelText={t('general.enterPassword')}
                            labelStyle={style.profileData__label}
                            inputColor="#B0AED3"
                            passwordType
                        />
                        {password.length >= 1 ? (
                            <div
                                onClick={showHidePassword}
                                className={
                                    style.resetPasswordContainer__inputWrapper_eye
                                }
                            >
                                <img src={eye} alt="eye" />
                            </div>
                        ) : null}
                    </div>
                    <div className={style.resetPasswordContainer__inputWrapper}>
                        <Field
                            id="confirmPassword"
                            type={type}
                            placeholder={t('general.confirmPassword')}
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={inputOnchange}
                            error={confirmPasswordErrors}
                            inputStyle={style.profileData__input}
                            labelText={t('general.confirmPassword')}
                            labelStyle={style.profileData__label}
                            inputColor="#B0AED3"
                            passwordType
                        />
                        {confirmPassword.length >= 1 ? (
                            <div
                                onClick={showHidePassword}
                                className={
                                    style.resetPasswordContainer__inputWrapper_eye
                                }
                            >
                                <img src={eye} alt="eye" />
                            </div>
                        ) : null}
                    </div>
                    <div
                        className={style.resetPasswordContainer__saveBtn}
                        onClick={submitNewPassword}
                    >
                        <span className={style.buttonText}>{t('general.apply')}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProfileDataView.defaultProps = {
    nickname: '',
    previewVisible: false,
    status: false,
    previewImage: '',
    twoFACode: '',
    twoFACodeErrors: {},
    password: '',
    passwordErrors: {},
    confirmPassword: '',
    confirmPasswordErrors: {},
    type: '',
    fileList: [],
    nicknameErrors: {},
    inputOnchange: () => {},
    handlePreview: () => {},
    handleChange: () => {},
    handleCancel: () => {},
    showHidePassword: () => {},
    submitChangeName: () => {},
    submitNewPassword: () => {},
    submitTwoFACode: () => {},
    copyTwoFaCode: () => {},
};

ProfileDataView.propTypes = {
    nickname: PropTypes.string,
    previewVisible: PropTypes.bool,
    status: PropTypes.bool,
    previewImage: PropTypes.string,
    twoFACode: PropTypes.string,
    twoFACodeErrors: PropTypes.object,
    password: PropTypes.string,
    passwordErrors: PropTypes.object,
    confirmPassword: PropTypes.string,
    confirmPasswordErrors: PropTypes.object,
    type: PropTypes.string,
    fileList: PropTypes.instanceOf(Array),
    inputOnchange: PropTypes.func,
    nicknameErrors: PropTypes.object,
    handlePreview: PropTypes.func,
    handleChange: PropTypes.func,
    handleCancel: PropTypes.func,
    showHidePassword: PropTypes.func,
    submitChangeName: PropTypes.func,
    submitNewPassword: PropTypes.func,
    submitTwoFACode: PropTypes.func,
    copyTwoFaCode: PropTypes.func,
};

export default ProfileDataView;
