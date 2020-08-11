/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import questionMark from './images/questionMark.svg';
import attention from './images/attention.svg';

import style from './field.module.scss';

const Field = props => {
    const {
        id,
        labelText,
        type,
        placeholder,
        value,
        onChange,
        onFocus,
        onKeyDown,
        name,
        maxLength,
        error,
        inputStyle,
        labelStyle,
        min,
        max,
        disabled,
        step,
        inputColor,
        passwordType,
    } = props;

    const errorValues = Object.values(error).filter(item => item.length > 0);

    let questionMarkPosition = '';
    let tooltipPosition = '';
    let tooltipWidth = '';

    if (passwordType && value.length > 0) {
        questionMarkPosition = '2vw';
        tooltipPosition = '1vw';
        tooltipWidth = '24vw';
    } else {
        questionMarkPosition = '0';
        tooltipPosition = '-1vw';
        tooltipWidth = '26vw';
    }

    const questionMarkStyle = {
        marginRight: questionMarkPosition,
    };

    const tooltipPositionStyle = {
        right: tooltipPosition,
        maxWidth: tooltipWidth,
    };

    let inputInlineStyle = {};
    let borderInlineStyle = {};
    let dynamicInputStyle = {};

    if (errorValues.length > 0) {
        inputInlineStyle = {
            color: '#E55541',
        };
        borderInlineStyle = {
            border: '1px solid #E55541',
        };
        dynamicInputStyle = style.hasError;
    } else {
        inputInlineStyle = {
            color: inputColor,
        };

        borderInlineStyle = {
            border: `0.07vw solid ${inputColor}`,
        };

        dynamicInputStyle = {};
    }

    return (
        <div className={style.inputWrapper}>
            <label className={labelStyle} htmlFor={id}>
                {labelText}
            </label>
            <div className={style.frame} style={borderInlineStyle}>
                <input
                    id={id}
                    type={type}
                    className={classNames(
                        inputStyle,
                        dynamicInputStyle,
                    )}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onFocus={onFocus}
                    onKeyDown={onKeyDown}
                    name={name}
                    maxLength={maxLength}
                    min={min}
                    max={max}
                    autoComplete="new-password"
                    disabled={disabled}
                    step={step}
                    style={inputInlineStyle}
                />
            </div>
            {errorValues.length > 0 ? (
                <div className={style.inputWrapper__invalid}>
                    <div
                        className={style.inputWrapper__tooltip}
                        style={tooltipPositionStyle}
                    >
                        <img
                            className={style.inputWrapper__tooltip_attention}
                            src={attention}
                            alt="attention"
                        />
                        <div>
                            <ol className={style.inputWrapper__tooltip_errorList}>
                                {errorValues.map(item => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ol>
                        </div>
                    </div>
                    <img
                        style={questionMarkStyle}
                        className={style.questionMarkStyle}
                        src={questionMark}
                        alt="questionMark"
                    />
                </div>
            ) : null}
        </div>
    );
};

Field.defaultProps = {
    labelText: '',
    placeholder: '',
    value: '',
    name: '',
    maxLength: '',
    min: 0,
    inputStyle: '',
    labelStyle: '',
    error: {},
    step: '',
    onChange: () => {},
    onFocus: () => {},
    onKeyDown: () => {},
    disabled: false,
    inputColor: '',
    passwordType: false,
};

Field.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    labelText: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    name: PropTypes.string,
    maxLength: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    error: PropTypes.object,
    step: PropTypes.string,
    inputStyle: PropTypes.string,
    labelStyle: PropTypes.string,
    disabled: PropTypes.bool,
    inputColor: PropTypes.string,
    passwordType: PropTypes.bool,
};

export default Field;
