import React from 'react';
import '@styles/Button.scss';
import classNames from '@utils/classNames';

const Button = ({ type = 'primary', label = 'button', classes = [], ...rest }) => {
    return <input type="button" value={label} className={classNames(type, classes)} {...rest} />;
};

export default Button;
