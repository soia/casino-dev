import React, { Fragment } from 'react';
import ReactWOW from 'react-wow';
import { useTranslation } from 'react-i18next';

import Button from '../../../small-components/button';
import orangeButton from './images/button.svg';
import workPrinciplesBg from './images/workPrinciplesBg.svg';
import principleWorkIcon from './images/principleWorkIcon.svg';
import games1 from './images/games1.svg';
import games2 from './images/games2.svg';
import games3 from './images/games3.svg';
import games4 from './images/games4.svg';
import games5 from './images/games5.svg';
import games6 from './images/games6.svg';
import style from './new-games.module.scss';

const WorkPrinciples = () => {
    const { t } = useTranslation();

    const workPrinciplesBgStyle = {
        backgroundImage: `url(${workPrinciplesBg})`,
    };

    const orangeButtonStyle = {
        backgroundImage: `url(${orangeButton})`,
        backgroundSize: 'cover',
    };

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
    ];

    const openGame = id => {
        console.log(id, 'id');
    };

    return (
        <Fragment>
            <div
                className={style.containerWrapper}
                style={window.innerWidth > 767 ? workPrinciplesBgStyle : null}
                id="principleOfWork"
            >
                <ReactWOW animation="fadeInUp" delay="0.05s">
                    <img
                        className={style.containerWrapper__icon}
                        src={principleWorkIcon}
                        alt="principleWorkIcon"
                    />
                </ReactWOW>
                <div className={style.containerWrapper__wrapper}>
                    <ReactWOW animation="fadeInUp" delay="0.05s">
                        <h3 className={style.containerWrapper__title}>
                            {t('newGames.title')}
                        </h3>
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
                                            style={orangeButtonStyle}
                                        >
                                            {t('allGames.play')}
                                        </Button>
                                    </div>
                                );
                            })}
                        </div>
                    </ReactWOW>
                </div>
            </div>
        </Fragment>
    );
};

export default WorkPrinciples;
