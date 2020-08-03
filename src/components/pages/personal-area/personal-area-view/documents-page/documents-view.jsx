/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useTranslation } from 'react-i18next';
import style from './documents.module.scss';
import './documents.scss';

const DocumentsView = () => {
    const { t } = useTranslation();

    return (
        <div className={style.documents}>
            {t('aside.documents')}
        </div>
    );
};

export default DocumentsView;
