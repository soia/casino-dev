import React, { Fragment } from 'react';
import ReactWOW from 'react-wow';
import { useTranslation } from 'react-i18next';
import Button from '../../../small-components/button';
import blueCoin from '../../../assets/images/blueCoin.svg';
import games1 from './images/games1.svg';
import games2 from './images/games2.svg';
import games3 from './images/games3.svg';
import games4 from './images/games4.svg';
import games5 from './images/games5.svg';
import games6 from './images/games6.svg';
import games7 from './images/games7.svg';
import games8 from './images/games8.svg';
import games9 from './images/games9.svg';
import style from './all-games.module.scss';

const AllGames = () => {
    const { t } = useTranslation();

    const gamesData = [
        {
            id: 1,
            img: games1,
        },
        {
            id: 2,
            img: games2,
        },
        {
            id: 3,
            img: games3,
        },
        {
            id: 4,
            img: games4,
        },
        {
            id: 5,
            img: games5,
        },
        {
            id: 6,
            img: games6,
        },
        {
            id: 7,
            img: games7,
        },
        {
            id: 8,
            img: games8,
        },
        {
            id: 9,
            img: games9,
        },
    ];

    const openGame = id => {
        console.log(id, 'id');
    };

    return (
        <Fragment>
            <div className={style.allGames} id="advantages">
                <ReactWOW disabled={!(window.innerWidth > 767)} animation="fadeInUp" delay="0.01s">
                    <p className={style.allGames__title}>{t('allGames.title')}</p>
                    <div className={style.allGames__wrapper}>
                        {gamesData.map(item => {
                            const { id, img } = item;

                            return (
                                <div
                                    key={id}
                                    className={style.allGames__wrapper_item}
                                    onClick={() => openGame(id)}
                                >
                                    <img
                                        className={style.allGames__wrapper_img}
                                        src={img}
                                        alt="img"
                                    />
                                    <div className={style.allGames__wrapper_mask} />
                                    <Button
                                        className={style.allGames__wrapper_button}
                                        type="button"
                                    >
                                        <span>{t('allGames.play')}</span>
                                    </Button>
                                </div>
                            );
                        })}
                    </div>
                </ReactWOW>
                <ReactWOW disabled={!(window.innerWidth > 767)} animation="fadeInUp" delay="0.01s">
                    <img className={style.allGames_coin} src={blueCoin} alt="blueCoin" />
                </ReactWOW>
            </div>
        </Fragment>
    );
};

export default AllGames;
