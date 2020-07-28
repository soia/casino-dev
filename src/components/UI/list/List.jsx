import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import style from './list.module.scss';

const List = ({
    children, tag: Tag, className, ...rest
}) => {
    const classes = ClassNames(style.list, className);
    return (
        <Tag className={classes} {...rest}>
            {children}
        </Tag>
    );
};

List.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};
List.defaultProps = {
    children: null,
    className: '',
    tag: 'ul',
};

export default List;
