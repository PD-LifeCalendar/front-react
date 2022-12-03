import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';

import classes from './Button.module.css';

export const Button = ({ children, ...props }) => (
    <button type="button" className={classes.button} {...props}>
        {children}
    </button>
);

Button.propTypes = {
    children: arrayOf(PropTypes.element),
};
