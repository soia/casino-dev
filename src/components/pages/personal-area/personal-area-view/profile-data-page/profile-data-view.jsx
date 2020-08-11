/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Field from '../../../../small-components/field';
import style from './profile-data.module.scss';
import './profile-data.scss';

const ProfileDataView = ({ nickname, nicknameErrors, inputOnchange }) => {
    const { t } = useTranslation();

    return (
        <div className={style.profileData}>
            <h1 className={style.profileData__title}>
                {t('general.settings')}
            </h1>
            <div className={style.profileData__settingsWrapper}>
                <div>
                    <p className={style.profileData__changeAvatar}>
                        {t('general.changeAvatar')}
                    </p>
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
    nicknameErrors: {},
    inputOnchange: () => {},
};

ProfileDataView.propTypes = {
    nickname: PropTypes.string,
    inputOnchange: PropTypes.func,
    nicknameErrors: PropTypes.object,
};

export default ProfileDataView;
