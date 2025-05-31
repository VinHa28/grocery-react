import React from "react";
import "./Form.scss";

export default function FormGroup({ children, className }) {
    return <div className={`form__group ${className}`}>{children}</div>;
}
