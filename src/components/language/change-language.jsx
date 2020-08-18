import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import ReactFlagsSelect from 'react-flags-select';
import { personalAreaPath } from '../../constants';
import './change-language.scss';
import 'react-flags-select/scss/react-flags-select.scss';
import '../../../node_modules/antd/dist/antd.css';

function SelectLangeage() {
    const { i18n } = useTranslation();

    const onSelectFlag = countryCode => {
        i18n.changeLanguage(countryCode);
        localStorage.setItem('i18nextLngCngCasion', countryCode);
    };

    const changeLangOnMobile = event => {
        const { value } = event.target;
        i18n.changeLanguage(value);
        localStorage.setItem('i18nextLngCngCasion', value);
    };

    const currentLang = localStorage.getItem('i18nextLngCngCasion');

    const pathName = window.location.pathname;
    const matchPathName = pathName.split('/')[1];

    // Country codes here
    // https://github.com/TechnologyGeek12/react-region-flag-select/blob/master/src/lib/components/subComponents/data/countryCodes.txt

    return (
        <Fragment>
            {`/${matchPathName}` === personalAreaPath
                ? (
                    <div className="changeLanguagePersonalArea">
                        <svg className="changeLanguagePersonalArea__frame" width="58" height="36" viewBox="0 0 58 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M42.1718 17.0001L45.0002 19.8285L47.8287 17.0001" stroke="#D8D6ED" strokeWidth="0.845" />
                            <path d="M14.334 0.4H50.3411C53.61 0.4 56.2774 3.01668 56.34 6.28495L56.7696 28.6849C56.8341 32.0431 54.1295 34.8 50.7708 34.8H8.39994C4.46182 34.8 1.59154 31.0703 2.6 27.2635L8.53402 4.86353C9.23106 2.23233 11.612 0.4 14.334 0.4Z" stroke="#C5C3DF" strokeWidth="0.8" />
                        </svg>
                        <ReactFlagsSelect
                            defaultCountry={currentLang}
                            countries={['US', 'RU']}
                            customLabels={{
                                US: 'EN', RU: 'RU',
                            }}
                            className="change-language-flags personal-area-flags"
                            onSelect={onSelectFlag}
                        />
                        <p className="currentLangTicker">{currentLang === 'US' ? 'EN' : currentLang}</p>
                        <select
                            className="personalAreaMobileSelect"
                            onChange={changeLangOnMobile}
                        >
                            <option selected={currentLang === 'US'} value="US">English</option>
                            <option selected={currentLang === 'RU'} value="RU">Русский</option>
                        </select>
                    </div>
                )
                : (
                    <ReactFlagsSelect
                        defaultCountry={currentLang}
                        countries={['US', 'RU']}
                        customLabels={{
                            US: 'EN', RU: 'RU',
                        }}
                        className="change-language-flags"
                        onSelect={onSelectFlag}
                    />
                )}
        </Fragment>
    );
}

export default SelectLangeage;
