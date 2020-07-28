import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import style from './listItem.module.scss';

function ListItem({
    className, tag: Tag, children, onClick, disabled, ...rest
}) {
    const classes = ClassNames(style.listItem, className, { [style.disabled]: disabled });

    if (rest.href && Tag === 'li') {
        Tag = 'a';
    }
    const onClickHandler = e => {
        if (Tag === 'a') {
            e.preventDefault();
        } else {
            onClick(e);
        }
    };

    return (
        <Tag className={classes} onClick={onClickHandler} disabled={disabled} {...rest}>
            {children}
        </Tag>
    );
}

ListItem.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
};

ListItem.defaultProps = {
    className: '',
    tag: 'li',
    children: null,
    onClick: () => {},
    disabled: false,
};

export default ListItem;
