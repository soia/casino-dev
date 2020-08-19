/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useTranslation } from 'react-i18next';
import QRCode from 'qrcode.react';
import { Link } from 'react-router-dom';
import { store } from 'react-notifications-component';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { personalAreaPath, balancePath } from '../../../../../constants';
import leftArrow from '../../../../assets/images/left-arrow.svg';
import Field from '../../../../small-components/field';
import style from './deposit.module.scss';
import './deposit.scss';

const DepositView = () => {
    const { t } = useTranslation();

    const onCopy = () => {
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
    const qrCodeValue = 'HUBGVYFCTDXR GCJKLNM:NOJIBYUVTCRYVUYBIU';

    return (
        <div className={style.deposit}>
            <div className={style.deposit__header}>
                <Link
                    to={`${personalAreaPath}${balancePath}`}
                    className={style.deposit__arrowBackWrapper}
                >
                    <img
                        className={style.deposit__leftArrow}
                        src={leftArrow}
                        alt="leftArrow"
                    />
                    <p className={style.deposit__arrowBackWrapper_title}>
                        {t('general.back')}
                    </p>
                </Link>
                <p className={style.deposit__header_title}>{t('general.deposit')}</p>
            </div>
            <div className={style.depositContainer}>
                <div className="qrCode depositQrCode">
                    <QRCode value={qrCodeValue} />
                </div>
                <div className={style.depositContainer__rightSide}>
                    <p className={style.depositContainer__rightSide_text}>
                        Send only USDT to this deposit address. Sending other any coin or
                        token to this address may result in the loss of your deposit.
                    </p>
                    <p className={style.depositContainer__rightSide_minDeposit}>
                        {t('general.minimumDepositAmount')}: 0 CNG
                    </p>
                    <div className={style.depositContainer__qrCodeValueWrapper}>
                        <Field
                            id="qrCodeValue"
                            type="text"
                            name="qrCodeValue"
                            value={qrCodeValue}
                            inputStyle={style.depositContainer__input}
                            inputColor="#B0AED3"
                            labelText={t('general.depositAddress')}
                            labelStyle={style.depositContainer__label}
                        />
                        <CopyToClipboard
                            text={qrCodeValue}
                            onCopy={onCopy}
                        >
                            <div className={style.depositContainer__qrCodeValueBtn}>
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
                </div>
            </div>
        </div>
    );
};

export default DepositView;
