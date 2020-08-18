import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { compose } from '../../../utils';
import PersonalAreaContainer from './personal-area-container';

const PersonalArea = ({ loggedIn }) => {
    if (loggedIn) {
        return <PersonalAreaContainer />;
    }

    return <Redirect to="/" />;
};

const mapStateToProps = state => {
    const {
        authentication: { loggedIn },
    } = state;

    return {
        loggedIn,
    };
};

PersonalArea.defaultProps = {
    loggedIn: false,
};

PersonalArea.propTypes = {
    loggedIn: PropTypes.bool,
};
export default compose(connect(mapStateToProps))(PersonalArea);
