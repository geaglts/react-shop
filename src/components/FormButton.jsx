import React from 'react';
import '@styles/Button.scss';
import classNames from '@utils/classNames';

const Button = ({ type = 'primary', label = 'button', classes = [] }) => {
    return <input type="button" value={label} className={classNames(type, classes)} />;
};

export default Button;
