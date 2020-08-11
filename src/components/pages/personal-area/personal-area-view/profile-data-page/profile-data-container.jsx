import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import ErrorIndicator from '../../../error-page/error-indicator';
import Spinner from '../../../../spinner';
import ProfileDataView from './profile-data-view';
import { compose } from '../../../../../utils';

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}
export class ProfileDataContainer extends Component {
    state = {
        previewVisible: false,
        previewImage: '',
        fileList: [],
    };

    componentDidMount() {}

    handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
        });
    };

    handleChange = ({ fileList }) => this.setState({ fileList });

    onError = () => {
        this.setState({
            error: true,
            loading: false,
        });
    };

    render() {
        const {
            loading, error, previewVisible, previewImage, fileList,
        } = this.state;
        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? (
            <ProfileDataView
                previewVisible={previewVisible}
                previewImage={previewImage}
                fileList={fileList}
                handlePreview={this.handlePreview}
                handleChange={this.handleChange}
                handleCancel={this.handleCancel}
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

export default compose(withTranslation(), connect(mapStateToProps))(ProfileDataContainer);
