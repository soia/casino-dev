/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useTranslation } from 'react-i18next';
import style from './profile-data.module.scss';
import './profile-data.scss';

const ProfileDataView = () => {
    const { t } = useTranslation();

    return (
        <div className={style.profileData}>
            {t('aside.profileData')}
        </div>
    );
};

export default ProfileDataView;
