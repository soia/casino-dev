/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Field from '../../../../small-components/field';
import style from './profile-data.module.scss';
import './profile-data.scss';

const ProfileDataView = ({ email, emailErrors, inputOnchange }) => {
    const { t } = useTranslation();

    return (
        <div className={style.profileData}>
            <h1 className={style.profileData__title}>
                {t('general.settings')}
            </h1>
            <p className={style.profileData__changeEmailTitle}>
                {t('general.yourEmailAddress')}
            </p>
            <div className={style.profileData__inputWrapper}>
                <Field
                    id="email"
                    type="email"
                    placeholder={t('auth.typeEmail')}
                    name="email"
                    value={email}
                    onChange={inputOnchange}
                    error={emailErrors}
                    inputStyle={style.profileData__input}
                    labelText="E-mail"
                    labelStyle={style.profileData__label}
                />
                <div className={style.profileData__changeBtn}>
                    <span>{t('general.сhange')}</span>
                </div>
            </div>
        </div>
    );
};

ProfileDataView.defaultProps = {
    email: '',
    emailErrors: {},
    inputOnchange: () => {},
};

ProfileDataView.propTypes = {
    email: PropTypes.string,
    inputOnchange: PropTypes.func,
    emailErrors: PropTypes.object,
};

export default ProfileDataView;
