import React, { Fragment } from 'react';
import ReactWOW from 'react-wow';
import { useTranslation } from 'react-i18next';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { store } from 'react-notifications-component';
import airDropBg from './images/airDropBg.svg';
import airDrop1 from './images/airDrop1.svg';
import airDrop2 from './images/airDrop2.svg';
import referalWrapper from './images/referalWrapper.svg';

import style from './airDrop.module.scss';

const AirDrop = () => {
    const { t } = useTranslation();

    const airDropBgStyle = {
        backgroundImage: `url(${airDropBg})`,
    };

    const referalWrapperStyle = {
        backgroundImage: `url(${referalWrapper})`,
    };

    const copied = () => {
        store.addNotification({
            title: t('general.successNotification'),
            message: t('general.сopiedToClipboard'),
            type: 'success',
            insert: 'top',
            container: 'top-right',
            animationIn: ['animated', 'slideInRight'],
            animationOut: ['animated', 'zoomOut'],
            dismiss: {
                duration: 3000,
                pauseOnHover: true,
            },
        });
    };

    return (
        <Fragment>
            <div
                className={style.airDrop}
                style={window.innerWidth > 767 ? airDropBgStyle : null}
            >
                <ReactWOW
                    disabled={!(window.innerWidth > 767)}
                    animation="fadeInUp"
                    delay="0.01s"
                >
                    <h3 className={style.airDrop__title}>{t('referals.title')}</h3>
                    <img className={style.airDrop__icons} src={airDrop1} alt="airDrop1" />
                    <img className={style.airDrop__icons} src={airDrop2} alt="airDrop2" />
                    <div className={style.airDrop__referalWrapper}>
                        <p className={style.airDrop__referalWrapper_title}>
                            {t('referals.link')}
                        </p>
                        <div
                            className={style.airDrop__referalField}
                            style={referalWrapperStyle}
                        >
                            <p className={style.airDrop__referalField_link}>
                                https://coinsbit.io/settings/referral-program
                            </p>
                            <CopyToClipboard
                                text="https://coinsbit.io/settings/referral-program
                                "
                                onCopy={() => copied()}
                            >
                                <div className={style.airDrop__referalField_copy}>
                                    <span className={style.buttonText}>copy</span>
                                </div>
                            </CopyToClipboard>
                        </div>
                    </div>
                </ReactWOW>
            </div>
        </Fragment>
    );
};

export default AirDrop;
