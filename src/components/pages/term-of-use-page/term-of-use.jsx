import React from 'react';
import { useTranslation } from 'react-i18next';

import style from './term-of-use.module.scss';

const TermOfUse = () => {
    const { t } = useTranslation();

    return (
        <div className={style.termOfUse}>
            <h1 className={style.termOfUse__title}>
                {t('general.termOfUse')}
            </h1>
        </div>
    );
};

export default TermOfUse;
