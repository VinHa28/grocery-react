import React, { useState } from "react";
import "./Form.scss";
import ArrowDownIcon from "assets/icons/arrow-down.svg";

const FormSelect = ({
    className,
    style = {},
    defaultValue,
    iconSrc = ArrowDownIcon,
    options = [],
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState(defaultValue);
    // const handleClose = () => {
    //     setIsOpen(!isOpen);
    // };
    const handleChange = (e) => {
        const selectedValue = e.target.innerText;
        setValue(selectedValue);
        setIsOpen(false);
    };
    return (
        <div
            className={`form__select ${className}`}
            onClick={() => setIsOpen(!isOpen)}
            style={style}
        >
            {value}
            <img src={iconSrc} alt="icon" className="icon form__select-icon" />
            {isOpen && (
                <ul className="form__select-options show">
                    {options.length === 0 ? (
                        <li className="form__select-no-option">(No option)</li>
                    ) : (
                        options.map((option) => (
                            <li
                                key={option}
                                className={`form__select-option ${
                                    value == option &&
                                    "form__select-option--current"
                                }`}
                                onClick={handleChange}
                            >
                                {option}
                            </li>
                        ))
                    )}
                </ul>
            )}
        </div>
    );
};

export default FormSelect;
