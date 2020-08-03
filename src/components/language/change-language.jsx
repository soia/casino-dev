import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactFlagsSelect from 'react-flags-select';

import './change-language.scss';

import 'react-flags-select/scss/react-flags-select.scss';
import '../../../node_modules/antd/dist/antd.css';

function SelectLangeage() {
    const { i18n } = useTranslation();

    const onSelectFlag = countryCode => {
        i18n.changeLanguage(countryCode);
        localStorage.setItem('i18nextLngCngCasion', countryCode);
    };

    const currentLang = localStorage.getItem('i18nextLngCngCasion');

    // Country codes here
    // https://github.com/TechnologyGeek12/react-region-flag-select/blob/master/src/lib/components/subComponents/data/countryCodes.txt

    return (
        <ReactFlagsSelect
            defaultCountry={currentLang}
            countries={['GB', 'RU']}
            customLabels={{
                GB: 'EN', RU: 'RU',
            }}
            className="change-language-flags"
            onSelect={onSelectFlag}
        />
    );
}

export default SelectLangeage;
