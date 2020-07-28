import React from 'react';
import ReactWOW from 'react-wow';
import { useTranslation } from 'react-i18next';

import redCoin from '../../../assets/images/redCoin.svg';
import style from './token-implementation.module.scss';

const TokenImplementation = () => {
    const { t } = useTranslation();

    return (
        <div className={style.tokenImplementation} id="CNG">
            <ReactWOW animation="fadeInUp" delay="0.05s">
                <img
                    className={style.tokenImplementation__coin}
                    src={redCoin}
                    alt="redCoin"
                />
            </ReactWOW>
            <ReactWOW animation="fadeInUp" delay="0.05s">
                <h3 className={style.tokenImplementation__title}>
                    {t('tokenImplementation.title')}
                </h3>
            </ReactWOW>
            <div className={style.tokenImplementation__contentWrapper}>
                <ReactWOW animation="fadeInUp" delay="0.05s">
                    <div className={style.tokenImplementation__contentWrapper_item}>
                        <svg
                            width="100"
                            height="48"
                            viewBox="0 0 100 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={style.tokenImplementation__contentWrapper_step}
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.48646 3.77739C8.96728 1.57229 10.9194 0 13.1763 0H95.1968C98.2598 0 100.539 2.82997 99.8866 5.82261L91.5135 44.2226C91.0327 46.4277 89.0806 48 86.8237 48H4.80316C1.7402 48 -0.53919 45.17 0.113355 42.1774L8.48646 3.77739Z"
                                fill="url(#paint0_linear)"
                            />
                            <path
                                d="M46.9822 18.928C48.3582 18.928 49.4742 19.184 50.3302 19.696C51.0422 20.136 51.5582 20.72 51.8782 21.448C52.1262 22.032 52.2502 22.66 52.2502 23.332V23.692C52.2502 24.356 52.1222 24.98 51.8662 25.564C51.5382 26.324 51.0222 26.92 50.3182 27.352C49.4622 27.88 48.3502 28.144 46.9822 28.144H46.4542C45.0862 28.144 43.9742 27.88 43.1182 27.352C42.4142 26.92 41.8982 26.324 41.5702 25.564C41.3142 24.98 41.1862 24.356 41.1862 23.692V23.332C41.1862 22.644 41.3142 22.012 41.5702 21.436C41.8982 20.7 42.4142 20.12 43.1182 19.696C43.9742 19.184 45.0862 18.928 46.4542 18.928H46.9822ZM49.2622 23.416C49.2622 22.856 49.1142 22.384 48.8182 22C48.3862 21.44 47.6862 21.16 46.7182 21.16C45.7262 21.16 45.0222 21.44 44.6062 22C44.3182 22.384 44.1742 22.856 44.1742 23.416V23.572C44.1742 23.812 44.2062 24.06 44.2702 24.316C44.3422 24.572 44.4622 24.808 44.6302 25.024C45.0782 25.6 45.7782 25.888 46.7302 25.888C47.6982 25.888 48.3982 25.6 48.8302 25.024C49.1182 24.64 49.2622 24.156 49.2622 23.572V23.416ZM54.4181 22.456V20.5C55.3141 20.5 55.9701 20.396 56.3861 20.188C56.6021 20.084 56.7781 19.944 56.9141 19.768C57.0501 19.592 57.1661 19.36 57.2621 19.072H59.4221V28H56.5781V22.456H54.4181Z"
                                fill="white"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="48"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#2E51CA" />
                                    <stop offset="1" stopColor="#1F38DC" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <p className={style.tokenImplementation__contentWrapper_title}>
                            01.02.20 - 20.02.20
                        </p>
                        <p className={style.tokenImplementation__contentWrapper_subTitle}>
                            {t('tokenImplementation.content1')}
                        </p>
                    </div>
                </ReactWOW>
                <ReactWOW animation="fadeInUp" delay="0.05s">
                    <div className={style.tokenImplementation__contentWrapper_item}>
                        <svg
                            width="100"
                            height="48"
                            viewBox="0 0 100 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={style.tokenImplementation__contentWrapper_step}
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.48646 3.77739C8.96728 1.57229 10.9194 0 13.1763 0H95.1968C98.2598 0 100.539 2.82997 99.8866 5.82261L91.5135 44.2226C91.0327 46.4277 89.0806 48 86.8237 48H4.80316C1.7402 48 -0.53919 45.17 0.113355 42.1774L8.48646 3.77739Z"
                                fill="url(#paint0_linear)"
                            />
                            <path
                                d="M44.7088 18.928C46.0848 18.928 47.2008 19.184 48.0568 19.696C48.7688 20.136 49.2848 20.72 49.6048 21.448C49.8528 22.032 49.9768 22.66 49.9768 23.332V23.692C49.9768 24.356 49.8488 24.98 49.5928 25.564C49.2648 26.324 48.7488 26.92 48.0448 27.352C47.1888 27.88 46.0768 28.144 44.7088 28.144H44.1808C42.8128 28.144 41.7008 27.88 40.8448 27.352C40.1408 26.92 39.6248 26.324 39.2968 25.564C39.0408 24.98 38.9128 24.356 38.9128 23.692V23.332C38.9128 22.644 39.0408 22.012 39.2968 21.436C39.6248 20.7 40.1408 20.12 40.8448 19.696C41.7008 19.184 42.8128 18.928 44.1808 18.928H44.7088ZM46.9888 23.416C46.9888 22.856 46.8408 22.384 46.5448 22C46.1128 21.44 45.4128 21.16 44.4448 21.16C43.4528 21.16 42.7488 21.44 42.3328 22C42.0448 22.384 41.9008 22.856 41.9008 23.416V23.572C41.9008 23.812 41.9328 24.06 41.9968 24.316C42.0688 24.572 42.1888 24.808 42.3568 25.024C42.8048 25.6 43.5048 25.888 44.4568 25.888C45.4248 25.888 46.1248 25.6 46.5568 25.024C46.8448 24.64 46.9888 24.156 46.9888 23.572V23.416ZM52.3232 28V26.572C52.3232 26.188 52.3632 25.848 52.4432 25.552C52.5232 25.248 52.6792 24.96 52.9112 24.688C53.4712 24.048 54.5232 23.512 56.0672 23.08L56.7752 22.888L57.4232 22.708C58.0152 22.564 58.4312 22.416 58.6712 22.264C58.7832 22.192 58.8592 22.12 58.8992 22.048C58.9392 21.968 58.9592 21.876 58.9592 21.772V21.76C58.9592 21.52 58.8552 21.336 58.6472 21.208C58.3832 21.056 57.9232 20.98 57.2672 20.98C56.5312 20.98 56.0192 21.14 55.7312 21.46C55.5472 21.652 55.4472 21.916 55.4312 22.252H52.4792V22.168C52.4792 21.664 52.5752 21.208 52.7672 20.8C53.0232 20.256 53.4512 19.828 54.0512 19.516C54.7872 19.14 55.7472 18.952 56.9312 18.952H57.5312C59.1632 18.952 60.3352 19.22 61.0472 19.756C61.6632 20.22 61.9712 20.888 61.9712 21.76V21.856C61.9712 22.264 61.8992 22.612 61.7552 22.9C61.6192 23.188 61.4032 23.436 61.1072 23.644C60.8192 23.852 60.4392 24.032 59.9672 24.184C59.4952 24.336 58.9112 24.476 58.2152 24.604L57.4952 24.748C56.7352 24.9 56.1592 25.032 55.7672 25.144C55.4792 25.232 55.2712 25.308 55.1432 25.372C54.9912 25.444 54.8952 25.508 54.8552 25.564C54.8072 25.62 54.7832 25.676 54.7832 25.732H62.1632V28H52.3232Z"
                                fill="white"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="48"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#2E51CA" />
                                    <stop offset="1" stopColor="#1F38DC" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <p className={style.tokenImplementation__contentWrapper_title}>
                            20.02.20 - 20.05.20
                        </p>
                        <p className={style.tokenImplementation__contentWrapper_subTitle}>
                            {t('tokenImplementation.content2')}
                        </p>
                    </div>
                </ReactWOW>
                <ReactWOW animation="fadeInUp" delay="0.05s">
                    <div className={style.tokenImplementation__contentWrapper_item}>
                        <svg
                            width="100"
                            height="48"
                            viewBox="0 0 100 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={style.tokenImplementation__contentWrapper_step}
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.48646 3.77739C8.96728 1.57229 10.9194 0 13.1763 0H95.1968C98.2598 0 100.539 2.82997 99.8866 5.82261L91.5135 44.2226C91.0327 46.4277 89.0806 48 86.8237 48H4.80316C1.7402 48 -0.53919 45.17 0.113355 42.1774L8.48646 3.77739Z"
                                fill="url(#paint0_linear)"
                            />
                            <path
                                d="M44.615 18.928C45.991 18.928 47.107 19.184 47.963 19.696C48.675 20.136 49.191 20.72 49.511 21.448C49.759 22.032 49.883 22.66 49.883 23.332V23.692C49.883 24.356 49.755 24.98 49.499 25.564C49.171 26.324 48.655 26.92 47.951 27.352C47.095 27.88 45.983 28.144 44.615 28.144H44.087C42.719 28.144 41.607 27.88 40.751 27.352C40.047 26.92 39.531 26.324 39.203 25.564C38.947 24.98 38.819 24.356 38.819 23.692V23.332C38.819 22.644 38.947 22.012 39.203 21.436C39.531 20.7 40.047 20.12 40.751 19.696C41.607 19.184 42.719 18.928 44.087 18.928H44.615ZM46.895 23.416C46.895 22.856 46.747 22.384 46.451 22C46.019 21.44 45.319 21.16 44.351 21.16C43.359 21.16 42.655 21.44 42.239 22C41.951 22.384 41.807 22.856 41.807 23.416V23.572C41.807 23.812 41.839 24.06 41.903 24.316C41.975 24.572 42.095 24.808 42.263 25.024C42.711 25.6 43.411 25.888 44.363 25.888C45.331 25.888 46.031 25.6 46.463 25.024C46.751 24.64 46.895 24.156 46.895 23.572V23.416ZM56.8001 28.132C55.5441 28.132 54.5321 27.936 53.7641 27.544C53.1641 27.24 52.7201 26.812 52.4321 26.26C52.2321 25.876 52.1321 25.468 52.1321 25.036V24.904H55.1081C55.1321 25.144 55.2441 25.352 55.4441 25.528C55.7721 25.824 56.3361 25.972 57.1361 25.972C57.9841 25.972 58.5681 25.864 58.8881 25.648C59.1201 25.504 59.2361 25.3 59.2361 25.036V25.024C59.2361 24.808 59.1521 24.64 58.9841 24.52C58.8241 24.4 58.5401 24.34 58.1321 24.34H55.3841V22.42H58.1201C58.4881 22.42 58.7561 22.356 58.9241 22.228C59.0521 22.132 59.1161 21.988 59.1161 21.796C59.1161 21.684 59.0961 21.584 59.0561 21.496C59.0161 21.408 58.9321 21.328 58.8041 21.256C58.6761 21.184 58.4761 21.124 58.2041 21.076C57.9321 21.028 57.5641 21.004 57.1001 21.004C56.6361 21.004 56.2761 21.04 56.0201 21.112C55.5561 21.24 55.2881 21.42 55.2161 21.652C55.2001 21.684 55.1801 21.756 55.1561 21.868H52.2521V21.724C52.2521 21.34 52.3361 20.98 52.5041 20.644C52.7361 20.172 53.1521 19.788 53.7521 19.492C54.4721 19.132 55.4401 18.952 56.6561 18.952H57.3521C59.1201 18.952 60.3841 19.208 61.1441 19.72C61.6881 20.088 61.9601 20.592 61.9601 21.232V21.316C61.9601 21.74 61.8161 22.104 61.5281 22.408C61.2961 22.656 60.9721 22.836 60.5561 22.948C61.0281 23.052 61.4121 23.26 61.7081 23.572C62.0681 23.948 62.2481 24.424 62.2481 25V25.072C62.2481 25.936 61.9481 26.616 61.3481 27.112C60.5321 27.792 59.2041 28.132 57.3641 28.132H56.8001Z"
                                fill="white"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="48"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#2E51CA" />
                                    <stop offset="1" stopColor="#1F38DC" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <p className={style.tokenImplementation__contentWrapper_title}>
                            20.05.20 - 01.06.20
                        </p>
                        <p className={style.tokenImplementation__contentWrapper_subTitle}>
                            {t('tokenImplementation.content3')}
                        </p>
                    </div>
                </ReactWOW>
                <ReactWOW animation="fadeInUp" delay="0.05s">
                    <div className={style.tokenImplementation__contentWrapper_item}>
                        <svg
                            width="100"
                            height="48"
                            viewBox="0 0 100 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={style.tokenImplementation__contentWrapper_step}
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.48646 3.77739C8.96728 1.57229 10.9194 0 13.1763 0H95.1968C98.2598 0 100.539 2.82997 99.8866 5.82261L91.5135 44.2226C91.0327 46.4277 89.0806 48 86.8237 48H4.80316C1.7402 48 -0.53919 45.17 0.113355 42.1774L8.48646 3.77739Z"
                                fill="url(#paint0_linear)"
                            />
                            <path
                                d="M43.9451 18.928C45.3211 18.928 46.4371 19.184 47.2931 19.696C48.0051 20.136 48.5211 20.72 48.8411 21.448C49.0891 22.032 49.2131 22.66 49.2131 23.332V23.692C49.2131 24.356 49.0851 24.98 48.8291 25.564C48.5011 26.324 47.9851 26.92 47.2811 27.352C46.4251 27.88 45.3131 28.144 43.9451 28.144H43.4171C42.0491 28.144 40.9371 27.88 40.0811 27.352C39.3771 26.92 38.8611 26.324 38.5331 25.564C38.2771 24.98 38.1491 24.356 38.1491 23.692V23.332C38.1491 22.644 38.2771 22.012 38.5331 21.436C38.8611 20.7 39.3771 20.12 40.0811 19.696C40.9371 19.184 42.0491 18.928 43.4171 18.928H43.9451ZM46.2251 23.416C46.2251 22.856 46.0771 22.384 45.7811 22C45.3491 21.44 44.6491 21.16 43.6811 21.16C42.6891 21.16 41.9851 21.44 41.5691 22C41.2811 22.384 41.1371 22.856 41.1371 23.416V23.572C41.1371 23.812 41.1691 24.06 41.2331 24.316C41.3051 24.572 41.4251 24.808 41.5931 25.024C42.0411 25.6 42.7411 25.888 43.6931 25.888C44.6611 25.888 45.3611 25.6 45.7931 25.024C46.0811 24.64 46.2251 24.156 46.2251 23.572V23.416ZM51.4982 26.188V24.448L56.4662 19.012H60.1142V24.1H62.0822V26.188H60.1142V28H57.2822V26.188H51.4982ZM57.2822 24.1V20.86L54.3422 24.1H57.2822Z"
                                fill="white"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="48"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#2E51CA" />
                                    <stop offset="1" stopColor="#1F38DC" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <p className={style.tokenImplementation__contentWrapper_title}>
                            01.06.20 - 10.06.20
                        </p>
                        <p className={style.tokenImplementation__contentWrapper_subTitle}>
                            {t('tokenImplementation.content4')}
                        </p>
                    </div>
                </ReactWOW>
                <ReactWOW animation="fadeInUp" delay="0.05s">
                    <div className={style.tokenImplementation__contentWrapper_item}>
                        <svg
                            width="100"
                            height="48"
                            viewBox="0 0 100 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={style.tokenImplementation__contentWrapper_step}
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.48646 3.77739C8.96728 1.57229 10.9194 0 13.1763 0H95.1968C98.2598 0 100.539 2.82997 99.8866 5.82261L91.5135 44.2226C91.0327 46.4277 89.0806 48 86.8237 48H4.80316C1.7402 48 -0.53919 45.17 0.113355 42.1774L8.48646 3.77739Z"
                                fill="url(#paint0_linear)"
                            />
                            <path
                                d="M44.7674 18.928C46.1434 18.928 47.2594 19.184 48.1154 19.696C48.8274 20.136 49.3434 20.72 49.6634 21.448C49.9114 22.032 50.0354 22.66 50.0354 23.332V23.692C50.0354 24.356 49.9074 24.98 49.6514 25.564C49.3234 26.324 48.8074 26.92 48.1034 27.352C47.2474 27.88 46.1354 28.144 44.7674 28.144H44.2394C42.8714 28.144 41.7594 27.88 40.9034 27.352C40.1994 26.92 39.6834 26.324 39.3554 25.564C39.0994 24.98 38.9714 24.356 38.9714 23.692V23.332C38.9714 22.644 39.0994 22.012 39.3554 21.436C39.6834 20.7 40.1994 20.12 40.9034 19.696C41.7594 19.184 42.8714 18.928 44.2394 18.928H44.7674ZM47.0474 23.416C47.0474 22.856 46.8994 22.384 46.6034 22C46.1714 21.44 45.4714 21.16 44.5034 21.16C43.5114 21.16 42.8074 21.44 42.3914 22C42.1034 22.384 41.9594 22.856 41.9594 23.416V23.572C41.9594 23.812 41.9914 24.06 42.0554 24.316C42.1274 24.572 42.2474 24.808 42.4154 25.024C42.8634 25.6 43.5634 25.888 44.5154 25.888C45.4834 25.888 46.1834 25.6 46.6154 25.024C46.9034 24.64 47.0474 24.156 47.0474 23.572V23.416ZM57.0964 28.132C55.8724 28.132 54.8804 27.956 54.1204 27.604C53.5364 27.332 53.1084 26.96 52.8364 26.488C52.6524 26.168 52.5604 25.82 52.5604 25.444V25.288H55.5604C55.5764 25.44 55.6884 25.576 55.8964 25.696C56.2084 25.888 56.7004 25.984 57.3724 25.984C58.0364 25.984 58.5324 25.88 58.8604 25.672C59.1244 25.504 59.2564 25.272 59.2564 24.976V24.916C59.2564 24.604 59.1244 24.372 58.8604 24.22C58.5564 24.044 58.0604 23.956 57.3724 23.956C56.6924 23.956 56.2004 24.036 55.8964 24.196C55.7764 24.26 55.6884 24.328 55.6324 24.4C55.5844 24.456 55.5524 24.512 55.5364 24.568H52.6924V19.072H61.4884V21.208H55.5244V22.768L55.7524 22.612C56.0324 22.436 56.4604 22.288 57.0364 22.168C57.3724 22.104 57.7444 22.072 58.1524 22.072H58.2844C59.6924 22.072 60.7244 22.372 61.3804 22.972C61.8684 23.436 62.1124 24.064 62.1124 24.856V25C62.1124 25.84 61.8324 26.524 61.2724 27.052C60.4964 27.772 59.2684 28.132 57.5884 28.132H57.0964Z"
                                fill="white"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="48"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#2E51CA" />
                                    <stop offset="1" stopColor="#1F38DC" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <p className={style.tokenImplementation__contentWrapper_title}>
                            10.06.20 - 01.10.20
                        </p>
                        <p className={style.tokenImplementation__contentWrapper_subTitle}>
                            {t('tokenImplementation.content5')}
                        </p>
                    </div>
                </ReactWOW>
                <ReactWOW animation="fadeInUp" delay="0.05s">
                    <div className={style.tokenImplementation__contentWrapper_item}>
                        <svg
                            width="100"
                            height="48"
                            viewBox="0 0 100 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={style.tokenImplementation__contentWrapper_step}
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.48646 3.77739C8.96728 1.57229 10.9194 0 13.1763 0H95.1968C98.2598 0 100.539 2.82997 99.8866 5.82261L91.5135 44.2226C91.0327 46.4277 89.0806 48 86.8237 48H4.80316C1.7402 48 -0.53919 45.17 0.113355 42.1774L8.48646 3.77739Z"
                                fill="url(#paint0_linear)"
                            />
                            <path
                                d="M43.8924 18.928C45.2684 18.928 46.3844 19.184 47.2404 19.696C47.9524 20.136 48.4684 20.72 48.7884 21.448C49.0364 22.032 49.1604 22.66 49.1604 23.332V23.692C49.1604 24.356 49.0324 24.98 48.7764 25.564C48.4484 26.324 47.9324 26.92 47.2284 27.352C46.3724 27.88 45.2604 28.144 43.8924 28.144H43.3644C41.9964 28.144 40.8844 27.88 40.0284 27.352C39.3244 26.92 38.8084 26.324 38.4804 25.564C38.2244 24.98 38.0964 24.356 38.0964 23.692V23.332C38.0964 22.644 38.2244 22.012 38.4804 21.436C38.8084 20.7 39.3244 20.12 40.0284 19.696C40.8844 19.184 41.9964 18.928 43.3644 18.928H43.8924ZM46.1724 23.416C46.1724 22.856 46.0244 22.384 45.7284 22C45.2964 21.44 44.5964 21.16 43.6284 21.16C42.6364 21.16 41.9324 21.44 41.5164 22C41.2284 22.384 41.0844 22.856 41.0844 23.416V23.572C41.0844 23.812 41.1164 24.06 41.1804 24.316C41.2524 24.572 41.3724 24.808 41.5404 25.024C41.9884 25.6 42.6884 25.888 43.6404 25.888C44.6084 25.888 45.3084 25.6 45.7404 25.024C46.0284 24.64 46.1724 24.156 46.1724 23.572V23.416ZM56.5694 28.132C55.2094 28.132 54.1254 27.864 53.3174 27.328C52.6294 26.888 52.1494 26.296 51.8774 25.552C51.6614 25 51.5534 24.392 51.5534 23.728V23.44C51.5534 22.824 51.6614 22.228 51.8774 21.652C52.1734 20.868 52.6494 20.252 53.3054 19.804C54.1214 19.244 55.1934 18.964 56.5214 18.964H56.9414C58.7174 18.964 59.9974 19.28 60.7814 19.912C61.3574 20.384 61.6454 20.988 61.6454 21.724V21.736H58.7174C58.6454 21.544 58.5214 21.396 58.3454 21.292C58.0094 21.092 57.4974 20.992 56.8094 20.992C55.9214 20.992 55.2814 21.252 54.8894 21.772C54.6254 22.108 54.4934 22.544 54.4934 23.08V23.164L54.7814 22.948C55.1014 22.74 55.6014 22.576 56.2814 22.456C56.6814 22.392 57.1294 22.36 57.6254 22.36H57.8414C59.3054 22.36 60.3854 22.616 61.0814 23.128C61.6734 23.56 61.9694 24.14 61.9694 24.868V25.072C61.9694 25.88 61.6854 26.544 61.1174 27.064C60.3254 27.776 59.0134 28.132 57.1814 28.132H56.5694ZM54.7814 25.12C54.7814 25.4 54.9094 25.62 55.1654 25.78C55.5014 25.996 56.0774 26.104 56.8934 26.104C57.7494 26.104 58.3414 25.988 58.6694 25.756C58.9014 25.604 59.0174 25.396 59.0174 25.132V25.084C59.0174 24.82 58.8894 24.612 58.6334 24.46C58.2894 24.252 57.7094 24.148 56.8934 24.148C56.0774 24.148 55.5014 24.252 55.1654 24.46C54.9094 24.612 54.7814 24.82 54.7814 25.084V25.12Z"
                                fill="white"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="48"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#2E51CA" />
                                    <stop offset="1" stopColor="#1F38DC" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <p className={style.tokenImplementation__contentWrapper_title}>
                            01.10.2020
                        </p>
                        <p className={style.tokenImplementation__contentWrapper_subTitle}>
                            {t('tokenImplementation.content6')}
                        </p>
                    </div>
                </ReactWOW>
            </div>
        </div>
    );
};

export default TokenImplementation;
