import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import ErrorIndicator from '../../../error-page/error-indicator';
import Spinner from '../../../../spinner';
import DepositView from './deposit-view';
import { compose } from '../../../../../utils';

export class DepositContainer extends Component {
    state = {};

    componentDidMount() {
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false,
        });
    };

    render() {
        const {
            loading,
            error,
        } = this.state;
        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? (
            <DepositView />
        ) : null;

        return (
            <Fragment>
                {errorMessage}
                {spinner}
                {content}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    const {
        authentication: { loggedIn },
    } = state;

    return {
        loggedIn,
    };
};

export default compose(withTranslation(), connect(mapStateToProps))(DepositContainer);
