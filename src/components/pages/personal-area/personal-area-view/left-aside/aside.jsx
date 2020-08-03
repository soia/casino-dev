/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import backgroundImage from './images/left-aside-image.svg';
import { compose } from '../../../../../utils';
import {
    personalAreaPath,
    balancePath,
    historyPath,
    profileDataPath,
    documentsPath,
} from '../../../../../constants';

import style from './aside.module.scss';
import './aside.scss';

class Aside extends Component {
    mounted = true;

    state = {};

    componentWillUnmount() {
        this.mounted = false;
    }

    render() {
        const { t, onClickAside } = this.props;

        const activeStyle = { color: '#221876' };
        return (
            <aside id="aside" className={style.aside}>
                <ul className={style.aside__nav} onClick={onClickAside}>
                    <li>
                        <NavLink
                            to={`${personalAreaPath}${balancePath}`}
                            activeStyle={activeStyle}
                        >
                            <svg
                                width="26"
                                height="22"
                                viewBox="0 0 26 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3.7714 4.92002C4.3997 2.6115 6.5813 1 9.07821 1H19.5139C23.1024 1 25.7237 4.23841 24.8207 7.55618L22.2286 17.08C21.6003 19.3885 19.4187 21 16.9218 21H6.48613C2.89762 21 0.276321 17.7616 1.17931 14.4438L3.7714 4.92002Z"
                                    stroke="#D3D1E4"
                                    className={classNames(style.svgStroke, 'svgStroke')}
                                />
                                <path
                                    d="M16.0835 11.6094C16.0835 11.894 16.2888 12.125 16.5418 12.125C16.7948 12.125 17.0002 11.894 17.0002 11.6094V8.51562C17.0002 8.51094 17.0001 8.50628 17 8.50163C17.0004 8.37301 16.9571 8.24424 16.87 8.14627C16.7816 8.04679 16.6649 7.99805 16.5489 8.00006C16.5465 8.00002 16.5442 8 16.5418 8H13.7918C13.5388 8 13.3335 8.231 13.3335 8.51562C13.3335 8.80025 13.5388 9.03125 13.7918 9.03125H15.4549L13.3569 11.3917L11.8653 10.5526C11.6937 10.4556 11.4875 10.4936 11.3524 10.6466L9.13001 13.1469C8.95666 13.3419 8.95666 13.659 9.13001 13.854C9.21712 13.951 9.33091 14 9.44469 14C9.55848 14 9.67226 13.951 9.75849 13.854L11.7542 11.6087L13.2458 12.4478C13.4156 12.5428 13.6227 12.5068 13.7587 12.3538L16.0835 9.73823V11.6094Z"
                                    fill="#241A7A"
                                />
                                <path
                                    d="M16.0835 11.6094C16.0835 11.894 16.2888 12.125 16.5418 12.125C16.7948 12.125 17.0002 11.894 17.0002 11.6094V8.51562C17.0002 8.51094 17.0001 8.50628 17 8.50163C17.0004 8.37301 16.9571 8.24424 16.87 8.14627C16.7816 8.04679 16.6649 7.99805 16.5489 8.00006C16.5465 8.00002 16.5442 8 16.5418 8H13.7918C13.5388 8 13.3335 8.231 13.3335 8.51562C13.3335 8.80025 13.5388 9.03125 13.7918 9.03125H15.4549L13.3569 11.3917L11.8653 10.5526C11.6937 10.4556 11.4875 10.4936 11.3524 10.6466L9.13001 13.1469C8.95666 13.3419 8.95666 13.659 9.13001 13.854C9.21712 13.951 9.33091 14 9.44469 14C9.55848 14 9.67226 13.951 9.75849 13.854L11.7542 11.6087L13.2458 12.4478C13.4156 12.5428 13.6227 12.5068 13.7587 12.3538L16.0835 9.73823V11.6094Z"
                                    fill="#241A7A"
                                    className={classNames(style.svgIcon, 'svgIcon')}
                                />
                            </svg>

                            {t('aside.balance')}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={`${personalAreaPath}${historyPath}`}
                            activeStyle={activeStyle}
                        >
                            <svg
                                width="26"
                                height="22"
                                viewBox="0 0 26 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3.7714 4.92002C4.3997 2.6115 6.5813 1 9.07821 1H19.5139C23.1024 1 25.7237 4.23841 24.8207 7.55618L22.2286 17.08C21.6003 19.3885 19.4187 21 16.9218 21H6.48613C2.89762 21 0.276321 17.7616 1.17931 14.4438L3.7714 4.92002Z"
                                    stroke="#D3D1E4"
                                    className={classNames(style.svgStroke, 'svgStroke')}
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M15.4737 12.0252C15.2207 12.0252 15.0155 11.7993 15.0155 11.521V10.9748H14.4737C14.1978 10.9748 13.9738 10.7678 13.9738 10.5126C13.9738 10.2575 14.1978 10.0505 14.4737 10.0505H15.0155V9.4582C15.0155 9.20514 15.2206 9 15.4737 9C15.7267 9 15.9319 9.20514 15.9319 9.4582V10.0505H16.5108C16.766 10.0505 16.973 10.2574 16.973 10.5126C16.973 10.7679 16.766 10.9748 16.5108 10.9748H15.9319V11.521C15.9319 11.7993 15.7266 12.0252 15.4737 12.0252ZM9.36149 9.96628C9.14714 9.96628 8.97317 9.75923 8.97317 9.5041C8.97317 9.24897 9.14714 9.04191 9.36149 9.04191H12.5099C12.7651 9.04191 12.972 9.24884 12.972 9.5041C12.972 9.75936 12.7651 9.96628 12.5099 9.96628H9.36149ZM8.97317 11.5209C8.97317 11.7761 9.14714 11.9831 9.36149 11.9831H12.5099C12.7651 11.9831 12.972 11.7762 12.972 11.5209C12.972 11.2657 12.7651 11.0588 12.5099 11.0588H9.36149C9.14714 11.0588 8.97317 11.2658 8.97317 11.5209ZM9.40451 14C9.1664 14 8.97314 13.7929 8.97314 13.5378C8.97314 13.2827 9.1664 13.0756 9.40451 13.0756H16.5087C16.7639 13.0756 16.9709 13.2825 16.9709 13.5378C16.9709 13.793 16.7639 14 16.5087 14H9.40451Z"
                                    fill="url(#paint0_linear)"
                                    className={classNames(style.svgIcon, 'svgIcon')}
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear"
                                        x1="5.77319"
                                        y1="13.7235"
                                        x2="5.90227"
                                        y2="12.4266"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#2A1F84" />
                                        <stop offset="1" stopColor="#221876" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            <span>{t('aside.history')}</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={`${personalAreaPath}${profileDataPath}`}
                            activeStyle={activeStyle}
                        >
                            <svg
                                width="26"
                                height="22"
                                viewBox="0 0 26 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3.7714 4.92002C4.3997 2.6115 6.5813 1 9.07821 1H19.5139C23.1024 1 25.7237 4.23841 24.8207 7.55618L22.2286 17.08C21.6003 19.3885 19.4187 21 16.9218 21H6.48613C2.89762 21 0.276321 17.7616 1.17931 14.4438L3.7714 4.92002Z"
                                    stroke="#D3D1E4"
                                    className={classNames(style.svgStroke, 'svgStroke')}
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M15.072 10.5042C15.3553 10.1342 15.5253 9.66281 15.5253 9.15002C15.5253 7.96453 14.6168 7 13.5 7C12.3832 7 11.4747 7.96449 11.4747 9.15002C11.4747 9.66269 11.6446 10.134 11.9278 10.5039C11.3744 10.8229 11 11.4469 11 12.1524V13.5827C11 13.8131 11.176 14 11.3931 14H15.6069C15.824 14 16 13.8131 16 13.5827V12.1524C16 11.4482 15.6252 10.8237 15.072 10.5042ZM13.4997 7.83447C14.1829 7.83447 14.7387 8.42455 14.7387 9.14988C14.7387 9.87516 14.1829 10.4652 13.4997 10.4652C12.8164 10.4652 12.2606 9.87516 12.2606 9.14988C12.2606 8.42455 12.8164 7.83447 13.4997 7.83447ZM15.2137 13.1653H11.7861V12.1523C11.7861 11.614 12.1787 11.1615 12.682 11.1167C12.9322 11.2345 13.209 11.2999 13.4999 11.2999C13.7908 11.2999 14.0676 11.2345 14.3179 11.1167C14.8207 11.1614 15.2137 11.6151 15.2137 12.1523L15.2137 13.1653Z"
                                    fill="url(#paint0_linear)"
                                    className={classNames(style.svgIcon, 'svgIcon')}
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear"
                                        x1="12.5792"
                                        y1="16.8009"
                                        x2="17.507"
                                        y2="14.0225"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#2A1F84" />
                                        <stop offset="1" stopColor="#221876" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {t('aside.profileData')}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={`${personalAreaPath}${documentsPath}`}
                            activeStyle={activeStyle}
                        >
                            <svg
                                width="26"
                                height="22"
                                viewBox="0 0 26 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3.7714 4.92002C4.3997 2.6115 6.5813 1 9.07821 1H19.5139C23.1024 1 25.7237 4.23841 24.8207 7.55618L22.2286 17.08C21.6003 19.3885 19.4187 21 16.9218 21H6.48613C2.89762 21 0.276321 17.7616 1.17931 14.4438L3.7714 4.92002Z"
                                    stroke="#D3D1E4"
                                    className={classNames(style.svgStroke, 'svgStroke')}
                                />
                                <path
                                    d="M10.4858 8.95695C10.2177 8.95695 10.0001 8.75162 10.0001 8.49862C10.0001 8.24562 10.2177 8.04028 10.4858 8.04028H12.5418C12.7949 8.04028 13.0001 8.24549 13.0001 8.49862C13.0001 8.75175 12.7949 8.95695 12.5418 8.95695H10.4858Z"
                                    fill="url(#paint0_linear)"
                                    className={classNames(style.svgIcon, 'svgIcon')}
                                />
                                <path
                                    d="M10.4856 10.9569C10.2176 10.9569 10.0001 10.7516 10.0001 10.4986C10.0001 10.2456 10.2176 10.0403 10.4856 10.0403H14.5418C14.7949 10.0403 15.0001 10.2455 15.0001 10.4986C15.0001 10.7517 14.7949 10.9569 14.5418 10.9569H10.4856Z"
                                    fill="url(#paint1_linear)"
                                    className={classNames(style.svgIcon, 'svgIcon')}
                                />
                                <path
                                    d="M10.0001 12.4986C10.0001 12.7516 10.2177 12.957 10.4858 12.957H12.5418C12.7949 12.957 13.0001 12.7517 13.0001 12.4986C13.0001 12.2455 12.7949 12.0403 12.5418 12.0403H10.4858C10.2177 12.0403 10.0001 12.2456 10.0001 12.4986Z"
                                    fill="url(#paint2_linear)"
                                    className={classNames(style.svgIcon, 'svgIcon')}
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8.59685 7.52936C8.81402 6.63189 9.61737 5.99976 10.5407 5.99976H16.9114C18.2063 5.99976 19.1598 7.21157 18.8552 8.47015L17.4033 14.4702C17.1862 15.3676 16.3828 15.9998 15.4594 15.9998H9.08883C7.79391 15.9998 6.84037 14.7879 7.14493 13.5294L8.59685 7.52936ZM10.5407 6.79976H16.9114C17.6883 6.79976 18.2604 7.52684 18.0777 8.28199L16.6258 14.282C16.4955 14.8205 16.0135 15.1998 15.4594 15.1998H9.08883C8.31188 15.1998 7.73975 14.4727 7.92249 13.7175L9.3744 7.71752C9.50471 7.17904 9.98672 6.79976 10.5407 6.79976Z"
                                    fill="url(#paint3_linear)"
                                    className={classNames(style.svgIcon, 'svgIcon')}
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear"
                                        x1="8.79962"
                                        y1="12.6827"
                                        x2="9.11925"
                                        y2="11.4679"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#2A1F84" />
                                        <stop offset="1" stopColor="#221876" />
                                    </linearGradient>
                                    <linearGradient
                                        id="paint1_linear"
                                        x1="8.79962"
                                        y1="12.6827"
                                        x2="9.11925"
                                        y2="11.4679"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#2A1F84" />
                                        <stop offset="1" stopColor="#221876" />
                                    </linearGradient>
                                    <linearGradient
                                        id="paint2_linear"
                                        x1="8.79962"
                                        y1="12.6827"
                                        x2="9.11925"
                                        y2="11.4679"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#2A1F84" />
                                        <stop offset="1" stopColor="#221876" />
                                    </linearGradient>
                                    <linearGradient
                                        id="paint3_linear"
                                        x1="8.79962"
                                        y1="12.6827"
                                        x2="9.11925"
                                        y2="11.4679"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#2A1F84" />
                                        <stop offset="1" stopColor="#221876" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {t('aside.documents')}
                        </NavLink>
                    </li>
                </ul>
                <img
                    className={style.aside__backgroundImage}
                    src={backgroundImage}
                    alt="backgroundImage"
                />
            </aside>
        );
    }
}

Aside.defaultProps = {
    t: () => {},
    onClickAside: () => {},
};

Aside.propTypes = {
    t: PropTypes.func,
    onClickAside: PropTypes.func,
};

const mapStateToProps = state => {
    const {
        authentication: { loggedIn },
    } = state;

    return {
        loggedIn,
    };
};

export default compose(withTranslation(), connect(mapStateToProps), withRouter)(Aside);
