import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import HeaderSite from './header-site-area';
import HeaderPersonalArea from './header-personal-area';

import { personalAreaPath } from '../../../constants';
import { compose } from '../../../utils';

const Header = () => {
    const pathName = window.location.pathname;
    const matchPathName = pathName.split('/')[1];

    const activeHeader = `/${matchPathName}` === personalAreaPath ? (
        <HeaderPersonalArea />
    ) : (
        <HeaderSite />
    );

    return activeHeader;
};

const mapStateToProps = state => {
    const {
        authentication: { loggingIn },
    } = state;

    return {
        loggingIn,
    };
};

Header.defaultProps = {
    loggingIn: false,
};

Header.propTypes = {
    loggingIn: PropTypes.bool,
};

export default compose(
    connect(mapStateToProps),
    withRouter,
)(Header);
