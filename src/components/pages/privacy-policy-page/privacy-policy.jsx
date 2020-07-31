import React from 'react';
import { useTranslation } from 'react-i18next';

import style from './privacy-policy.module.scss';

const PrivacyPolicy = () => {
    const { t } = useTranslation();

    return (
        <div className={style.privacyPolicy}>
            <h1 className={style.privacyPolicy__title}>
                {t('general.privacyPolicy')}
            </h1>
        </div>
    );
};

export default PrivacyPolicy;
