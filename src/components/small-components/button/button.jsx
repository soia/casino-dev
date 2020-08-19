import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import classNames from 'classnames';
import styles from './button.module.scss';

const Button = props => {
    const {
        id, type, value, onClick, name, className, children, style, loading,
    } = props;

    return (
        <Fragment>
            <button
                id={id}
                type={type}
                disabled={loading}
                name={name}
                value={value}
                className={classNames(
                    loading ? (styles.button__loading, className) : className,
                )}
                style={style}
                onClick={onClick}
            >
                {loading ? <Spin size="default" /> : children}
            </button>
        </Fragment>
    );
};

Button.defaultProps = {
    id: '',
    value: '',
    name: '',
    className: '',
    loading: false,
    children: '',
    style: {},
    onClick: () => {},
};

Button.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    loading: PropTypes.bool,
    onClick: PropTypes.func,
    name: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.node,
};

export default Button;
