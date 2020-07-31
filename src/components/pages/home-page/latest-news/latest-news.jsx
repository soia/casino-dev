import React, { Fragment } from 'react';
import ReactWOW from 'react-wow';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import TextTruncate from 'react-text-truncate';
import sliderImg from './images/newsImg.svg';
import style from './latest-news.module.scss';
import './latest-news.scss';

const LatestNews = () => {
    const { t } = useTranslation();

    const slickSettings = {
        infinite: true,
        autoplay: true,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        speed: 700,
        variableWidth: true,
        centerPadding: '80px',
        prevArrow: <ArrowPrev />,
        nextArrow: <ArrowNext />,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '160px',
                    variableWidth: false,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '160px',
                    variableWidth: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '160px',
                    variableWidth: false,
                },
            },
        ],
    };

    const slickImg = [
        {
            img: sliderImg,
            alt: 'img1',
            content: 'This text about the latest news of gambling industry',
        },
        {
            img: sliderImg,
            alt: 'img2',
            content: 'This text about the latest news of gambling industry',
        },
        {
            img: sliderImg,
            alt: 'img3',
            content: 'This text about the latest news of gambling industry',
        },
        {
            img: sliderImg,
            alt: 'img4',
            content: 'This text about the latest news of gambling industry',
        },
    ];

    return (
        <Fragment>
            <div className={style.latestNews}>
                <ReactWOW disabled={!(window.innerWidth > 767)} animation="fadeInUp" delay="0.01s">
                    <h3 className={style.latestNews__title}>{t('latestNews.title')}</h3>
                    <Slider {...slickSettings} className="newsSlickSlider">
                        {slickImg.map(item => {
                            const { img, alt, content } = item;
                            return (
                                <div key={alt} className={style.latestNews__slickItem}>
                                    <img
                                        className={style.latestNews__slickItem_img}
                                        src={img}
                                        alt={alt}
                                    />
                                    <p className={style.latestNews__slickItem_content}>
                                        <TextTruncate
                                            line={2}
                                            element="p"
                                            truncateText="…"
                                            text={content}
                                        />
                                    </p>
                                </div>
                            );
                        })}
                    </Slider>
                </ReactWOW>
            </div>
        </Fragment>
    );
};

export default LatestNews;

const ArrowPrev = props => {
    const { onClick } = props;

    return (
        <svg onClick={onClick} className="slickSlider__arrowPrev" width="69" height="66" viewBox="0 0 69 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect className="slickRect" x="0.5" y="0.5" width="68" height="65" rx="23.26" fillOpacity="0.1" stroke="#D8D6ED" strokeWidth="1.1" />
            <path fillRule="evenodd" clipRule="evenodd" d="M35.827 23.6663L26.4442 33.0001L35.827 42.3339" />
            <path className="slickPath" d="M26.4442 33.0001L25.7389 32.2912L25.0263 33.0001L25.7389 33.7091L26.4442 33.0001ZM35.1217 22.9574L25.7389 32.2912L27.1495 33.7091L36.5322 24.3753L35.1217 22.9574ZM25.7389 33.7091L35.1217 43.0429L36.5322 41.625L27.1495 32.2912L25.7389 33.7091Z" fill="#D8D6ED" mask="url(#path-2-inside-1)" />
        </svg>
    );
};

const ArrowNext = props => {
    const { onClick } = props;

    return (
        <svg onClick={onClick} className="slickSlider__arrowNext" width="69" height="66" viewBox="0 0 69 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect className="slickRect" x="-0.55" y="0.55" width="67.9" height="64.9" rx="23.21" fillOpacity="0.1" transform="matrix(-1 0 0 1 67.9 0)" stroke="#D8D6ED" strokeWidth="1.1" />
            <path fillRule="evenodd" clipRule="evenodd" d="M33.173 23.6661L42.5558 32.9999L33.173 42.3337" />
            <path className="slickPath" d="M42.5558 32.9999L43.3316 32.22L44.1155 32.9999L43.3316 33.7797L42.5558 32.9999ZM33.9488 22.8862L43.3316 32.22L41.78 33.7797L32.3973 24.4459L33.9488 22.8862ZM43.3316 33.7797L33.9488 43.1135L32.3973 41.5538L41.78 32.22L43.3316 33.7797Z" fill="#D8D6ED" mask="url(#path-2-inside-1)" />
        </svg>
    );
};

ArrowPrev.defaultProps = {
    onClick: () => { },
};

ArrowPrev.propTypes = {
    onClick: PropTypes.func,
};

ArrowNext.defaultProps = {
    onClick: () => { },
};

ArrowNext.propTypes = {
    onClick: PropTypes.func,
};
