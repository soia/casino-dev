import React from 'react';

import style from './loading-page.module.scss';
import logo from '../../assets/images/logo.svg';

const LoadingPage = () => <div className={style.loading}><img src={logo} alt="logo" /></div>;

export default LoadingPage;
