import React from 'react';
import "./Button.scss";

const Button = ({ children, ...props }) => {

    return(
        <button className="primary_btn" {...props}>{children}</button>
    )
}

export default Button;