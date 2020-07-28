import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './table.module.scss';
import List from '../list/List';
import ListItem from '../listItem/ListItem';

const Table = ({ className, children }) => {
    const classes = classNames(style.table, className);
    return <div className={classes}>{children}</div>;
};

Table.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};
Table.defaultProps = {
    className: '',
    children: null,
};

export default Table;

export const Tr = ({ rowClassName, children, ...rest }) => {
    const classes = classNames(style.table__row, rowClassName);
    return (
        <List className={classes} {...rest}>
            {children}
        </List>
    );
};

Tr.propTypes = {
    rowClassName: PropTypes.string,
    children: PropTypes.node,
};
Tr.defaultProps = {
    rowClassName: '',
    children: null,
};

export const Td = ({ children, ...rest }) => (
    <ListItem className={style.table__td} {...rest}>
        {children}
    </ListItem>
);

Td.propTypes = {
    children: PropTypes.node,
};
Td.defaultProps = {
    children: null,
};
