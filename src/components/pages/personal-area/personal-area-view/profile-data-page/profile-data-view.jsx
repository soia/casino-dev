/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Upload, Modal } from 'antd';
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
}) => {
    const { t } = useTranslation();
    const uploadButton = (
        <div className="uploadAvatar__icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0V19.5" stroke="#C5C3DF" strokeWidth="0.8" />
                <path d="M19.75 9.75L0.25 9.75" stroke="#C5C3DF" strokeWidth="0.8" />
            </svg>
        </div>
    );
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
        </div>
    );
};

ProfileDataView.defaultProps = {
    nickname: '',
    previewVisible: false,
    previewImage: '',
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
    previewImage: PropTypes.string,
    fileList: PropTypes.instanceOf(Array),
    inputOnchange: PropTypes.func,
    nicknameErrors: PropTypes.object,
    handlePreview: PropTypes.func,
    handleChange: PropTypes.func,
    handleCancel: PropTypes.func,
};

export default ProfileDataView;
