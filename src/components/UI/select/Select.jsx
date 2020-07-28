import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './select.module.scss';

const { Provider: SelectProvider, Consumer: SelectConsumer } = React.createContext();

class Select extends Component {
    state = {
        value: '',
        open: false,
    };

    Ref = React.createRef();

    onBlurhnadler = () => {
        const { open } = this.state;
        if (open) {
            this.setState({ open: false });
        }
    };

    onFocusHandler = () => {
        const { open } = this.state;
        if (!open) {
            this.setState({ open: true });
        }
    };

    onSelectedAction = ({ target }) => {
        const data = target.getAttribute('data-value');
        const value = target.textContent;

        this.Ref.current.blur();
        this.setState({ value }, () => this.changePropsAction(data));
    };

    changePropsAction = value => {
        const { changeAction } = this.props;
        this.onBlurhnadler();
        changeAction(value);
    };

    onClickHandler = () => {
        const { open } = this.state;
        if (open) {
            this.onBlurhnadler();
        } else {
            this.onFocusHandler();
        }
    };

    render() {
        const { open, value } = this.state;
        const {
            defaultValue, children, dropDownClassName, className,
        } = this.props;

        const classes = classNames(style.select, className, style[className]);
        return (
            <div
                ref={this.Ref}
                className={classes}
                tabIndex="-1"
                onBlur={this.onBlurhnadler}
                onClick={this.onClickHandler}
            >
                <SelectProvider value={{ open, dropDownClassName, onClick: this.onSelectedAction }}>
                    <Select.Visual
                        defaultValue={defaultValue}
                        value={value}
                        open={open}
                        onClick={this.onClickHandler}
                    >
                        <Select.DropDown options={children} />
                    </Select.Visual>
                </SelectProvider>
            </div>
        );
    }
}

Select.propTypes = {
    defaultValue: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    children: PropTypes.node,
    dropDownClassName: PropTypes.string,
    className: PropTypes.string,
    changeAction: PropTypes.func,
};
Select.defaultProps = {
    defaultValue: '',
    children: null,
    dropDownClassName: '',
    className: '',
    changeAction: () => { },
};

export default Select;

Select.Visual = ({
    defaultValue, value, children, open,
}) => {
    const classes = classNames(style.select__visual, { [style.select__open]: open });
    return (
        <Fragment>
            <div className={classes}>
                {value || defaultValue}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.99984 11.3218L5.58909 6.91107C5.26366 6.58563 4.73602 6.58563 4.41058 6.91107C4.08514 7.23651 4.08514 7.76414 4.41058 8.08958L9.41058 13.0896C9.73602 13.415 10.2637 13.415 10.5891 13.0896L15.5891 8.08958C15.9145 7.76414 15.9145 7.23651 15.5891 6.91107C15.2637 6.58563 14.736 6.58563 14.4106 6.91107L9.99984 11.3218Z" fill="black" />
                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="4" y="6" width="12" height="8">
                        <path d="M9.99984 11.3218L5.58909 6.91107C5.26366 6.58563 4.73602 6.58563 4.41058 6.91107C4.08514 7.23651 4.08514 7.76414 4.41058 8.08958L9.41058 13.0896C9.73602 13.415 10.2637 13.415 10.5891 13.0896L15.5891 8.08958C15.9145 7.76414 15.9145 7.23651 15.5891 6.91107C15.2637 6.58563 14.736 6.58563 14.4106 6.91107L9.99984 11.3218Z" fill="white" />
                    </mask>
                </svg>
            </div>
            {children}
        </Fragment>
    );
};

Select.Visual.propTypes = {
    defaultValue: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    value: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    children: PropTypes.node,
    open: PropTypes.bool,
};
Select.Visual.defaultProps = {
    defaultValue: '',
    value: '',
    children: null,
    open: false,
};

Select.DropDown = ({ options, ...rest }) => (
    <SelectConsumer>
        {({ open, dropDownClassName }) => open && (
            <div
                {...rest}
                className={classNames(style.select__dropdown, dropDownClassName,
                    { [style.open]: open })}
            >
                {options}
            </div>
        )
        }
    </SelectConsumer>
);

Select.DropDown.propTypes = {
    options: PropTypes.node,
};
Select.DropDown.defaultProps = {
    options: null,
};

Select.Option = ({ children, value }) => (
    <SelectConsumer>
        {({ onClick }) => (
            <div className={classNames(style.select__option)} data-value={value} onClick={onClick}>
                {children}
            </div>
        )}
    </SelectConsumer>
);

Select.Option.propTypes = {
    children: PropTypes.node,
    value: PropTypes.node,
};
Select.Option.defaultProps = {
    children: null,
    value: 'rus',
};

export const { Option } = Select;
