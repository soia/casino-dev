/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Upload, Modal, message } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import QRCode from 'qrcode.react';
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
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="picture-card"
                            fileList={fileList}
                            onPreview={handlePreview}
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
                <div>
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
                            inputStyle={style.profileData__input}
                            labelText={t('general.enterYourNickname')}
                            labelStyle={style.profileData__label}
                            inputColor="#B0AED3"
                        />
                        <div className={style.profileData__changeBtn}>
                            <span>{t('general.сhange')}</span>
                        </div>
                    </div>
                </div>
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
                                <span> {t('general.enabled')}</span>
                            </div>
                        ) : (
                            <div
                                className={
                                    style.twoFactorAuth__statusWrapper_statusTurnedOff
                                }
                            >
                                <span> {t('general.turnedOff')}</span>
                            </div>
                        )}
                    </div>
                </div>
                <div className={style.twoFactorAuth__qrCodeWrapper}>
                    <div className="qrCode">
                        <QRCode value={qrCodeValue} />
                    </div>
                    <div className={style.twoFactorAuth__qrCodeWrapper_rightSide}>
                        <p className={style.twoFactorAuth__qrCodeWrapper_title}>
                            Lorem ipsum is placeholder text commonly used in the graphic,
                            print, and publishing industries for previewing layouts and
                            visual mockups:
                        </p>
                        <div className={style.twoFactorAuth__generateCodeWrapper}>
                            <div
                                className={
                                    style.twoFactorAuth__qrCodeWrapper_generateCode
                                }
                            >
                                <span>{t('general.generateCode')}</span>
                            </div>
                            <CopyToClipboard
                                text={qrCodeValue}
                                onCopy={() => message.success(t('general.сopiedToClipboard'), 2)}
                            >
                                <p className={style.twoFactorAuth__qrCodeWrapper_qrCode}>
                                    {qrCodeValue}
                                </p>
                            </CopyToClipboard>
                        </div>
                        <div className={style.twoFactorAuth__twoFAInputWrapper}>
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
                            <div className={style.twoFactorAuth__switchQrCodeBtn}>
                                <span>{t('general.enable')}</span>
                            </div>
                        </div>
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
    twoFACodeErrors: '',
    fileList: [],
    nicknameErrors: {},
    inputOnchange: () => {},
    handlePreview: () => {},
    handleChange: () => {},
    handleCancel: () => {},
};

ProfileDataView.propTypes = {
    nickname: PropTypes.string,
    previewVisible: PropTypes.bool,
    status: PropTypes.bool,
    previewImage: PropTypes.string,
    twoFACode: PropTypes.string,
    twoFACodeErrors: PropTypes.string,
    fileList: PropTypes.instanceOf(Array),
    inputOnchange: PropTypes.func,
    nicknameErrors: PropTypes.object,
    handlePreview: PropTypes.func,
    handleChange: PropTypes.func,
    handleCancel: PropTypes.func,
};

export default ProfileDataView;
