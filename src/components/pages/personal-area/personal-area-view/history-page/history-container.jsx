import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import ErrorIndicator from '../../../error-page/error-indicator';
import Spinner from '../../../../spinner';
import HistoryCriptoView from './history-view';
import { compose } from '../../../../../utils';
import 'react-datepicker/dist/react-datepicker.css';

const TABS = {
    OPERATIONS_HISTORY: 'OPERATIONS_HISTORY',
    BET_HISTORY: 'BET_HISTORY',
};
export class HistoryContainer extends Component {
    state = {
        date: '',
        activeTab: TABS.OPERATIONS_HISTORY,
    };

    componentDidMount() {
    }

    changeDate = date => {
        this.setState({
            date,
        });
    };

    setActiveTab = id => {
        this.setState({
            activeTab: id,
        });
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
            date,
            activeTab,
        } = this.state;
        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? (
            <HistoryCriptoView
                date={date}
                activeTab={activeTab}
                TABS={TABS}
                changeDate={this.changeDate}
                setActiveTab={this.setActiveTab}
            />
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

export default compose(withTranslation(), connect(mapStateToProps))(HistoryContainer);
