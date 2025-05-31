import React from "react";

export default function Form({ children, onSubmit, className, ...props }) {

    /** Side Effect */
    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(e);
        }
    };

    return (
        <form
            className={`form ${className}`}
            onSubmit={handleSubmit}
            {...props}
        >
            {children}
        </form>
    );
}
