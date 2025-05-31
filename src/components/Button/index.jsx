import React from "react";
import "./Button.scss";

export default function Button(props) {
    const { children, className, onClick, type = "button" } = props;
    
    return (
        <button type={type} className={`btn ${className}`} onClick={onClick}>
            {children}
        </button>
    );
}
