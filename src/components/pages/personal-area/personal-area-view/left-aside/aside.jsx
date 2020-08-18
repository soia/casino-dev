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
} from '../../../../../constants';

import style from './aside.module.scss';
import './aside.scss';

class Aside extends Component {
    mounted = true;

    state = {
        isOpenHistorySubMenu: false,
    };

    componentWillUnmount() {
        this.mounted = false;
    }

    openHistorySubMenu = () => {
        this.setState(state => ({
            isOpenHistorySubMenu: !state.isOpenHistorySubMenu,
        }));
    };

    logout = () => {
        console.log('logout');
    };

    mobileHistoryTab = event => {
        const { value } = event.target;
        const { history } = this.props;
        history.push(`${personalAreaPath}${historyPath}/${value}`);
    };

    render() {
        const { t, onClickAside } = this.props;
        const { isOpenHistorySubMenu } = this.state;

        let submenuStyle = {};

        if (isOpenHistorySubMenu) {
            submenuStyle = style.aside__openedSubmenu;
        } else {
            submenuStyle = style.aside__closedSubmenu;
        }

        const activeStyle = { color: '#221876' };
        return (
            <aside id="aside" className={style.aside}>
                <ul className={style.aside__nav} onClick={onClickAside}>
                    <li>
                        <NavLink
                            to={`${personalAreaPath}${profileDataPath}`}
                            className={style.asideLink}
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
                            <span className={style.asideLink__text}>
                                {t('aside.profile')}
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={`${personalAreaPath}${balancePath}`}
                            className={style.asideLink}
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
                            <span className={style.asideLink__text}>
                                {t('aside.balance')}
                            </span>
                        </NavLink>
                    </li>
                    <li className={style.aside__mobileSelect}>
                        <select
                            onChange={this.mobileHistoryTab}
                        >
                            <option>Casino 1</option>
                            <option>Casino 2</option>
                            <option>Casino 3</option>
                        </select>
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
                    </li>
                    <li className={style.aside__historyLink}>
                        <div
                            className={classNames(
                                style.asideLink,
                                isOpenHistorySubMenu ? 'active' : '',
                            )}
                            onClick={this.openHistorySubMenu}
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
                            <span className={style.asideLink__text}>
                                {t('aside.history')}
                            </span>
                        </div>
                        <div id="subMenu" className={submenuStyle}>
                            <NavLink
                                to={`${personalAreaPath}${historyPath}/Casino1`}
                                className={style.aside__subLink}
                            >
                                Casino 1
                            </NavLink>
                            <NavLink
                                to={`${personalAreaPath}${historyPath}/Casino2`}
                                className={style.aside__subLink}
                            >
                                Casino 2
                            </NavLink>
                            <NavLink
                                to={`${personalAreaPath}${historyPath}/Casino3`}
                                className={style.aside__subLink}
                            >
                                Casino 3
                            </NavLink>
                        </div>
                    </li>
                    <li>
                        <div className={style.asideLink} onClick={this.logout}>
                            <svg
                                width="24"
                                height="20"
                                viewBox="0 0 24 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4.13436 3.90859C4.63517 1.90534 6.4351 0.5 8.5 0.5H18.1922C21.1198 0.5 23.2679 3.25125 22.5579 6.09141L20.0579 16.0914C19.5571 18.0947 17.7571 19.5 15.6922 19.5H6C3.07243 19.5 0.924319 16.7487 1.63436 13.9086L4.13436 3.90859Z"
                                    stroke="rgba(34, 24, 118, 0.2)"
                                    className={style.logoutIcon}
                                />
                                <path
                                    d="M10.7835 14.5669H6.63781L9.22828 5.63778H13.374C13.55 5.63778 13.6929 5.4949 13.6929 5.31889C13.6929 5.14288 13.55 5 13.374 5H8.90937C8.73335 5 8.59048 5.14285 8.59048 5.31889L6 14.8858C6 15.0619 6.14288 15.2047 6.31889 15.2047H10.7835C10.9595 15.2047 11.1024 15.0619 11.1024 14.8858C11.1024 14.7098 10.9595 14.5669 10.7835 14.5669Z"
                                    fill="rgba(34, 24, 118, 0.2)"
                                    stroke="rgba(34, 24, 118, 0.2)"
                                    strokeWidth="0.2"
                                    className={style.logoutFill}
                                />
                                <path
                                    d="M17.7599 9.73965L15.5595 7.50769C15.4348 7.38172 15.2329 7.38204 15.1085 7.50769C14.9838 7.63333 14.9838 7.83742 15.1085 7.96306L16.7668 9.64526H10.1997C10.0237 9.64526 9.88086 9.78941 9.88086 9.96736C9.88086 10.1453 10.0237 10.2895 10.1997 10.2895H16.7668L15.1085 11.9716C14.9838 12.0976 14.9838 12.3014 15.1085 12.427C15.2332 12.553 15.4351 12.553 15.5595 12.427L17.7595 10.1951C17.8826 10.071 17.8839 9.86339 17.7599 9.73965Z"
                                    fill="rgba(34, 24, 118, 0.2)"
                                    stroke="rgba(34, 24, 118, 0.2)"
                                    strokeWidth="0.2"
                                    className={style.logoutFill}
                                />
                            </svg>
                            <span className={style.asideLink__text}>
                                {t('aside.logout')}
                            </span>
                        </div>
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
    history: {},
};

Aside.propTypes = {
    t: PropTypes.func,
    onClickAside: PropTypes.func,
    history: PropTypes.object,
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
