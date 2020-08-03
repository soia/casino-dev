import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Avatar from 'react-avatar';

import style from './img.module.scss';

const Img = ({
    className,
    userName,
    src,
    alt,
    width,
    height,
    ...args
}) => {
    if (!src) {
        return (
            <div className={style.avatar}>
                <Avatar className={classNames(className, style.logo)} unstyled name={userName} />
            </div>
        );
    }
    return (
        <div className={style.avatar}>
            <img {...args} className={classNames(className, style.logo)} src={src} alt={alt} />
        </div>
    );
};

Img.defaultProps = {
    className: '',
    userName: '',
    src: '',
    alt: '',
    width: '',
    height: '',
    onClick: () => {},
};

Img.propTypes = {
    className: PropTypes.string,
    userName: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    onClick: PropTypes.func,
};

export default Img;
