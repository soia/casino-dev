/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import frame from './images/frame.svg';
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
    } = props;

    const regtangleStyle = {
        backgroundImage: `url(${frame})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
    };

    const errorValues = Object.values(error).filter(item => item.length > 0);

    return (
        <div className={style.inputWrapper}>
            <label className={labelStyle} htmlFor={id}>
                {labelText}
                <input
                    id={id}
                    type={type}
                    className={inputStyle}
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
                    style={regtangleStyle}
                />
            </label>
            {errorValues.length > 0 ? (
                <div className={style.inputWrapper__invalid}>
                    <ol className={style.inputWrapper__tooltip_errorList}>
                        {errorValues.map(item => (
                            <li key={item}>{item}</li>
                        ))}
                    </ol>
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
};

export default Field;
