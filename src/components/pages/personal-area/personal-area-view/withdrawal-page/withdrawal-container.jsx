import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import ErrorIndicator from '../../../error-page/error-indicator';
import Spinner from '../../../../spinner';
import WithdrawalView from './withdrawal-view';
import { compose } from '../../../../../utils';

export class WithdrawalContainer extends Component {
    fee = '0.0012';

    state = {
        address: '',
        amount: '',
        addressErrors: {},
        amountErrors: {},
    };

    componentDidMount() {}

    inputOnchange = event => {
        const { name, value } = event.target;
        this.validateFields(name, value);
    };

    validateFields = (name, value) => {
        const { t } = this.props;
        const onlyNumbers = /^[0-9.]+$/;
        const { address, amount } = this.state;

        if (address.length < 1) {
            this.setState(state => ({
                addressErrors: {
                    ...state.addressErrors,
                    addressCharactersError: t('error.field_can_not_be_empty'),
                },
            }));
        }

        if (amount.length < 1) {
            this.setState(state => ({
                amountErrors: {
                    ...state.amountErrors,
                    amountCharactersError: t('error.field_can_not_be_empty'),
                },
            }));
        }

        if (+amount < this.fee) {
            this.setState(state => ({
                amountErrors: {
                    ...state.amountErrors,
                    amountFeeError: `${t('error.minimumWithdrawalAmount')} ${this.fee}`,
                },
            }));
        }

        if (name === 'address') {
            this.setState(state => ({
                [name]: value,
                addressErrors: {
                    ...state.addressErrors,
                    addressCharactersError: '',
                },
            }));
        }

        if (name === 'amount') {
            if (value === '' || onlyNumbers.test(value)) {
                this.setState(state => ({
                    [name]: value,
                    amountErrors: {
                        ...state.amountErrors,
                        amountCharactersError: '',
                    },
                }));
            }

            if (+value > this.fee) {
                this.setState(state => ({
                    amountErrors: {
                        ...state.amountErrors,
                        amountFeeError: '',
                    },
                }));
            } else {
                this.setState(state => ({
                    amountErrors: {
                        ...state.amountErrors,
                        amountFeeError: `${t('error.minimumWithdrawalAmount')} ${this.fee}`,
                    },
                }));
            }
        }
    };

    setMaxAmount = () => {
        const maxAmount = '10';

        this.setState(state => ({
            amount: maxAmount,
            amountErrors: {
                ...state.amountErrors,
                amountCharactersError: '',
            },
        }), () => {
            const { amount } = this.state;
            this.validateFields('amount', amount);
        });
    };

    submit = async () => {
        await this.validateFields();
        const {
            address, addressErrors, amount, amountErrors,
        } = this.state;

        const copyAddressErrors = { ...addressErrors };
        const copyAmountErrors = { ...amountErrors };

        Object.keys(copyAddressErrors).forEach(key => {
            if (!copyAddressErrors[key]) delete copyAddressErrors[key];
        });

        Object.keys(copyAmountErrors).forEach(key => {
            if (!copyAmountErrors[key]) delete copyAmountErrors[key];
        });

        if (
            Object.keys(copyAddressErrors).length === 0
            && Object.keys(copyAmountErrors).length === 0
        ) {
            if (address && amount) {
                console.log(address, 'address', amount, 'amount');
            }
        }
    };

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
            address,
            amount,
            addressErrors,
            amountErrors,
        } = this.state;
        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? (
            <WithdrawalView
                address={address}
                amount={amount}
                addressErrors={addressErrors}
                amountErrors={amountErrors}
                fee={this.fee}
                inputOnchange={this.inputOnchange}
                setMaxAmount={this.setMaxAmount}
                submit={this.submit}
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

WithdrawalContainer.defaultProps = {
    t: () => {},
};

WithdrawalContainer.propTypes = {
    t: PropTypes.func,
};

const mapStateToProps = state => {
    const {
        authentication: { loggingIn },
    } = state;

    return {
        loggingIn,
    };
};

export default compose(withTranslation(), connect(mapStateToProps))(WithdrawalContainer);
